import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { useLanguage } from '../i18n';
import { DownloadCloud, Smartphone, Check, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const { language } = useLanguage();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const isVi = language === 'vi';

  // If already running as an installed PWA in standalone mode, hide button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-black shadow-sm transition-all active:scale-95 shrink-0"
        title={isVi ? 'Cài đặt ứng dụng PWA' : 'Install PWA App'}
      >
        <DownloadCloud className="w-3.5 h-3.5" />
        <span className="hidden xs:inline">{isVi ? 'Cài PWA' : 'Install App'}</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shrink-0"
          title={isVi ? 'Cài trên iPhone/iPad' : 'Install on iOS'}
        >
          <Smartphone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
          <span className="hidden sm:inline">{isVi ? 'Cài iOS' : 'Install'}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900 border border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-gray-900 dark:text-white">
                    {isVi ? 'Cài đặt Learnix trên iOS' : 'Install Learnix on iOS'}
                  </h3>
                </div>
                <button 
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white font-black text-[11px] shrink-0">1</span>
                  <p>
                    {isVi ? 'Nhấn nút ' : 'Tap the '}
                    <strong>{isVi ? 'Chia sẻ (Share)' : 'Share'}</strong>
                    {isVi ? ' trên thanh công cụ Safari của bạn.' : ' button in Safari toolbar.'}
                  </p>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white font-black text-[11px] shrink-0">2</span>
                  <p>
                    {isVi ? 'Cuộn xuống và chọn ' : 'Scroll down and tap '}
                    <strong>{isVi ? 'Thêm vào Màn hình chính' : 'Add to Home Screen'}</strong>.
                  </p>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-600 text-white font-black text-[11px] shrink-0">3</span>
                  <p>
                    {isVi ? 'Nhấn ' : 'Tap '}
                    <strong>{isVi ? 'Thêm' : 'Add'}</strong>
                    {isVi ? ' để tận hưởng trải nghiệm mượt mà không cần mạng!' : ' to enjoy full offline practice anytime!'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-teal-600 py-2.5 text-xs font-black text-white hover:bg-teal-700 transition"
              >
                {isVi ? 'Đã hiểu' : 'Got it'}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
