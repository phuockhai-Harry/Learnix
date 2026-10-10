import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { useLanguage } from '../i18n';
import { getPendingSubmissions, syncPendingSubmissions } from '../lib/offlineSync';

export type ToastType = 'offline' | 'online' | 'success' | 'info' | 'warning' | 'error';

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  duration?: number; // milliseconds; 0 = persistent
  badge?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  pendingCount?: number;
}

interface ToastContextType {
  toasts: ToastItem[];
  showToast: (toast: Omit<ToastItem, 'id'> & { id?: string }) => string;
  dismissToast: (id: string) => void;
  isOnline: boolean;
  isSimulatedOffline: boolean;
  toggleSimulatedOffline: () => void;
  pendingSyncCount: number;
  triggerManualSync: () => Promise<void>;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const OFFLINE_TOAST_ID = 'learnix-offline-status-toast';

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t, language } = useLanguage();
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [isNavigatorOnline, setIsNavigatorOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [isSimulatedOffline, setIsSimulatedOffline] = useState<boolean>(false);
  const [pendingSyncCount, setPendingSyncCount] = useState<number>(() => getPendingSubmissions().length);

  const prevIsOfflineRef = useRef<boolean>(false);

  const isEffectiveOffline = !isNavigatorOnline || isSimulatedOffline;

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const showToast = useCallback((toastData: Omit<ToastItem, 'id'> & { id?: string }): string => {
    const id = toastData.id || 'toast_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    const newToast: ToastItem = { ...toastData, id };

    setToasts((prev) => {
      // Remove any existing toast with the same id
      const filtered = prev.filter((t) => t.id !== id);
      return [...filtered, newToast];
    });

    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        dismissToast(id);
      }, newToast.duration);
    }

    return id;
  }, [dismissToast]);

  const triggerManualSync = useCallback(async () => {
    try {
      const synced = await syncPendingSubmissions();
      setPendingSyncCount(getPendingSubmissions().length);
      if (synced > 0) {
        showToast({
          type: 'success',
          title: language === 'vi' ? 'Đồng bộ thành công!' : 'Sync Complete!',
          message: language === 'vi' 
            ? `Đã đồng bộ ${synced} bài tập/tiến độ đã làm ngoại tuyến lên hệ thống.`
            : `Successfully synced ${synced} offline item(s) to cloud.`,
          duration: 4000
        });
      }
    } catch (err) {
      console.warn('Manual sync error:', err);
    }
  }, [language, showToast]);

  // Track pending offline items count
  useEffect(() => {
    const handleCountChange = (e: any) => {
      if (typeof e.detail?.count === 'number') {
        setPendingSyncCount(e.detail.count);
      } else {
        setPendingSyncCount(getPendingSubmissions().length);
      }
    };
    window.addEventListener('learnix_pending_sync_change', handleCountChange);
    return () => window.removeEventListener('learnix_pending_sync_change', handleCountChange);
  }, []);

  // Listen for browser online/offline events
  useEffect(() => {
    const handleOnline = () => setIsNavigatorOnline(true);
    const handleOffline = () => setIsNavigatorOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // React to change in effective offline status
  useEffect(() => {
    const wasOffline = prevIsOfflineRef.current;
    prevIsOfflineRef.current = isEffectiveOffline;

    if (isEffectiveOffline) {
      // Show persistent offline toast
      const count = getPendingSubmissions().length;
      showToast({
        id: OFFLINE_TOAST_ID,
        type: 'offline',
        title: t('toast.offline_title'),
        message: t('toast.offline_desc'),
        badge: isSimulatedOffline 
          ? (language === 'vi' ? 'Thử nghiệm Ngoại tuyến' : 'Simulated Offline') 
          : t('toast.offline_badge'),
        pendingCount: count,
        duration: 0, // Persistent while offline
        action: isSimulatedOffline
          ? {
              label: t('toast.reconnect'),
              onClick: () => setIsSimulatedOffline(false)
            }
          : undefined
      });
    } else if (wasOffline && !isEffectiveOffline) {
      // Transitioned from Offline to Online
      dismissToast(OFFLINE_TOAST_ID);

      // Perform sync
      syncPendingSubmissions().then((syncedCount) => {
        setPendingSyncCount(getPendingSubmissions().length);
        const syncMessage = syncedCount > 0
          ? (language === 'vi' 
              ? `Đã khôi phục kết nối. Đã tự động đồng bộ ${syncedCount} bài học/tiến độ đã làm trước đó!` 
              : `Connection restored. Automatically synced ${syncedCount} offline activity record(s)!`)
          : t('toast.online_desc');

        showToast({
          type: 'online',
          title: t('toast.online_title'),
          message: syncMessage,
          badge: language === 'vi' ? 'Đã đồng bộ' : 'Synced',
          duration: 5000
        });
      });
    }
  }, [isEffectiveOffline, isSimulatedOffline, language, t, showToast, dismissToast]);

  // Keep toast text updated if language changes while offline
  useEffect(() => {
    if (isEffectiveOffline) {
      const count = getPendingSubmissions().length;
      showToast({
        id: OFFLINE_TOAST_ID,
        type: 'offline',
        title: t('toast.offline_title'),
        message: t('toast.offline_desc'),
        badge: isSimulatedOffline 
          ? (language === 'vi' ? 'Thử nghiệm Ngoại tuyến' : 'Simulated Offline') 
          : t('toast.offline_badge'),
        pendingCount: count,
        duration: 0,
        action: isSimulatedOffline
          ? {
              label: t('toast.reconnect'),
              onClick: () => setIsSimulatedOffline(false)
            }
          : undefined
      });
    }
  }, [language, t, isEffectiveOffline, isSimulatedOffline, showToast]);

  const toggleSimulatedOffline = useCallback(() => {
    setIsSimulatedOffline((prev) => !prev);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        showToast,
        dismissToast,
        isOnline: !isEffectiveOffline,
        isSimulatedOffline,
        toggleSimulatedOffline,
        pendingSyncCount,
        triggerManualSync
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
