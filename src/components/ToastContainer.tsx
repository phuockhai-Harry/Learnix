import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  WifiOff, 
  Wifi, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  XCircle, 
  X, 
  CloudOff,
  ShieldCheck
} from 'lucide-react';
import { useToast, ToastItem } from '../context/ToastContext';
import { useLanguage } from '../i18n';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast, isSimulatedOffline, toggleSimulatedOffline } = useToast();
  const { language } = useLanguage();
  const isVi = language === 'vi';

  if (toasts.length === 0) return null;

  return (
    <aside 
      aria-label="Notifications" 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 max-w-[92vw] sm:max-w-md w-full pointer-events-none"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            className="pointer-events-auto"
            role="status"
            aria-live="polite"
          >
            <ToastCard 
              toast={toast} 
              onDismiss={() => dismissToast(toast.id)} 
              isVi={isVi}
              isSimulatedOffline={isSimulatedOffline}
              toggleSimulatedOffline={toggleSimulatedOffline}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </aside>
  );
};

interface ToastCardProps {
  toast: ToastItem;
  onDismiss: () => void;
  isVi: boolean;
  isSimulatedOffline: boolean;
  toggleSimulatedOffline: () => void;
}

const ToastCard: React.FC<ToastCardProps> = ({ 
  toast, 
  onDismiss, 
  isVi, 
  isSimulatedOffline,
  toggleSimulatedOffline 
}) => {
  // Offline Toast Special Styling
  if (toast.type === 'offline') {
    return (
      <div 
        id="toast-offline-notification"
        className="w-full bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-amber-500/40 ring-1 ring-amber-400/20 transition-all duration-200"
      >
        <div className="flex items-start gap-3.5">
          {/* Icon with pulsing indicator */}
          <div className="relative flex-shrink-0 mt-0.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <WifiOff className="w-5 h-5" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pr-1">
            <div className="flex items-center flex-wrap gap-2 mb-1">
              <h4 className="text-sm sm:text-base font-black tracking-tight text-white">
                {toast.title}
              </h4>
              {toast.badge && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {toast.badge}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {toast.message}
            </p>

            {/* Offline reassurance features badge */}
            <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {isVi ? 'Tự động lưu tiến độ vào bộ nhớ đệm' : 'Progress saved to local cache'}
              </span>

              {typeof toast.pendingCount === 'number' && toast.pendingCount > 0 && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-950/60 px-2 py-1 rounded-lg border border-amber-800/40">
                  <CloudOff className="w-3.5 h-3.5 text-amber-400" />
                  {toast.pendingCount} {isVi ? 'tiến độ đang chờ đồng bộ' : 'item(s) queued for sync'}
                </span>
              )}
            </div>

            {/* Action buttons if simulated or reconnect */}
            {toast.action ? (
              <div className="mt-3 flex items-center gap-2">
                <button
                  id="toast-action-btn"
                  onClick={toast.action.onClick}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-lg transition-colors shadow-sm"
                >
                  {toast.action.label}
                </button>
              </div>
            ) : isSimulatedOffline ? (
              <div className="mt-3 flex items-center gap-2">
                <button
                  id="toast-reconnect-btn"
                  onClick={toggleSimulatedOffline}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-lg transition-colors shadow-sm"
                >
                  {isVi ? 'Kết nối lại' : 'Reconnect'}
                </button>
              </div>
            ) : null}
          </div>

          {/* Dismiss button */}
          <button
            id="toast-dismiss-offline-btn"
            onClick={onDismiss}
            aria-label="Dismiss offline notification"
            className="flex-shrink-0 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Back Online Toast Special Styling
  if (toast.type === 'online') {
    return (
      <div 
        id="toast-online-notification"
        className="w-full bg-emerald-900/95 dark:bg-emerald-950/95 backdrop-blur-md text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-emerald-500/40 ring-1 ring-emerald-400/30 transition-all duration-200"
      >
        <div className="flex items-start gap-3.5">
          <div className="flex-shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
            <Wifi className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0 pr-1">
            <div className="flex items-center flex-wrap gap-2 mb-1">
              <h4 className="text-sm sm:text-base font-black tracking-tight text-white">
                {toast.title}
              </h4>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                <RefreshCw className="w-3 h-3 animate-spin" />
                {toast.badge || (isVi ? 'Đang đồng bộ' : 'Synced')}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              {toast.message}
            </p>
          </div>

          <button
            id="toast-dismiss-online-btn"
            onClick={onDismiss}
            aria-label="Dismiss online notification"
            className="flex-shrink-0 text-emerald-300 hover:text-white p-1 rounded-lg hover:bg-emerald-800/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Generic Toasts (success, info, warning, error)
  const typeConfig = {
    success: {
      bg: 'bg-teal-900/95 text-white border-teal-500/40 ring-teal-400/20',
      iconBg: 'bg-teal-500/20 text-teal-300 border-teal-400/40',
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    error: {
      bg: 'bg-rose-900/95 text-white border-rose-500/40 ring-rose-400/20',
      iconBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      icon: <XCircle className="w-5 h-5" />
    },
    warning: {
      bg: 'bg-amber-900/95 text-white border-amber-500/40 ring-amber-400/20',
      iconBg: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      icon: <AlertCircle className="w-5 h-5" />
    },
    info: {
      bg: 'bg-slate-900/95 text-white border-blue-500/40 ring-blue-400/20',
      iconBg: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
      icon: <Info className="w-5 h-5" />
    }
  }[toast.type];

  return (
    <div 
      className={`w-full backdrop-blur-md rounded-2xl p-4 shadow-xl border ring-1 transition-all ${typeConfig.bg}`}
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl border flex items-center justify-center ${typeConfig.iconBg}`}>
          {typeConfig.icon}
        </div>
        <div className="flex-1 min-w-0 pr-1">
          <h4 className="text-sm font-bold text-white mb-0.5">{toast.title}</h4>
          <p className="text-xs text-slate-200 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onDismiss}
          className="flex-shrink-0 text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
