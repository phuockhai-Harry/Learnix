import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, 
  Sparkles, Coffee, Timer, ChevronDown, ChevronUp, 
  CheckCircle2, Flame, Award
} from 'lucide-react';
import { audio } from '../lib/audio';
import { useLanguage } from '../i18n';

export type PomodoroMode = 'focus' | 'shortBreak' | 'longBreak';

const MODE_DURATIONS: Record<PomodoroMode, number> = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60
};

interface PomodoroTimerProps {
  onStatusChange?: (status: 'studying' | 'online') => void;
  className?: string;
  defaultExpanded?: boolean;
}

export default function PomodoroTimer({ 
  onStatusChange, 
  className = '',
  defaultExpanded = true 
}: PomodoroTimerProps) {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const [mode, setMode] = useState<PomodoroMode>('focus');
  const [secondsLeft, setSecondsLeft] = useState<number>(MODE_DURATIONS.focus);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  
  // Track completed focus sessions from localStorage
  const [completedSessions, setCompletedSessions] = useState<number>(() => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const saved = localStorage.getItem(`pomodoro_sessions_${today}`);
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const timerRef = useRef<any>(null);

  // Sync mode changes with remaining seconds
  const handleSwitchMode = (newMode: PomodoroMode) => {
    setIsRunning(false);
    setMode(newMode);
    setSecondsLeft(MODE_DURATIONS[newMode]);
    if (onStatusChange) {
      onStatusChange(newMode === 'focus' ? 'studying' : 'online');
    }
  };

  // Timer interval effect
  useEffect(() => {
    if (isRunning) {
      if (onStatusChange && mode === 'focus') {
        onStatusChange('studying');
      }

      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            // Timer completed!
            clearInterval(timerRef.current);
            setIsRunning(false);

            if (soundEnabled) {
              try {
                audio.playPomodoroComplete();
              } catch (e) {
                console.error('Audio play error:', e);
              }
            }

            if (mode === 'focus') {
              setCompletedSessions((cnt) => {
                const updated = cnt + 1;
                try {
                  const today = new Date().toISOString().slice(0, 10);
                  localStorage.setItem(`pomodoro_sessions_${today}`, String(updated));
                } catch (e) {
                  console.error(e);
                }
                return updated;
              });

              if (onStatusChange) {
                onStatusChange('online');
              }
              // Switch to short break or long break (every 4th cycle)
              const nextMode = (completedSessions + 1) % 4 === 0 ? 'longBreak' : 'shortBreak';
              setMode(nextMode);
              return MODE_DURATIONS[nextMode];
            } else {
              // Break finished -> back to focus
              setMode('focus');
              return MODE_DURATIONS.focus;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (onStatusChange) {
        onStatusChange('online');
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, mode, soundEnabled, completedSessions, onStatusChange]);

  const handleTogglePlay = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(MODE_DURATIONS[mode]);
    if (onStatusChange) {
      onStatusChange('online');
    }
  };

  // Format MM:SS
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Progress percentage
  const totalSeconds = MODE_DURATIONS[mode];
  const progressPercent = Math.round(((totalSeconds - secondsLeft) / totalSeconds) * 100);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-3xl border-2 border-teal-100 dark:border-teal-900/60 shadow-xs transition-all ${className}`}>
      
      {/* Header bar / Collapsible toggle */}
      <div className="p-4 sm:px-6 flex items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-700/80">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`w-9 h-9 rounded-2xl flex items-center justify-center text-white shrink-0 ${
            mode === 'focus' 
              ? 'bg-gradient-to-tr from-rose-500 to-amber-500 shadow-rose-500/20 shadow-md' 
              : mode === 'shortBreak'
              ? 'bg-gradient-to-tr from-teal-500 to-emerald-500'
              : 'bg-gradient-to-tr from-indigo-500 to-blue-500'
          }`}>
            {mode === 'focus' ? <Timer className="w-5 h-5 animate-pulse" /> : <Coffee className="w-5 h-5" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-black text-gray-900 dark:text-white truncate">
                {isVi ? 'Đồng hồ Tập trung Pomodoro' : 'Pomodoro Focus Timer'}
              </h3>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                isRunning
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 animate-pulse'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}>
                {isRunning ? (isVi ? 'Đang chạy' : 'Active') : (isVi ? 'Tạm dừng' : 'Paused')}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate mt-0.5">
              {mode === 'focus' 
                ? (isVi ? 'Tập trung sâu 25 phút không xao nhãng' : '25-minute deep focus session')
                : mode === 'shortBreak'
                ? (isVi ? 'Nghỉ ngơi 5 phút thư giãn mắt và vươn vai' : '5-minute short restorative break')
                : (isVi ? 'Nghỉ ngơi 15 phút sau 4 chu kỳ tập trung' : '15-minute long recharge break')}
            </p>
          </div>
        </div>

        {/* Action Controls & Minimize Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              soundEnabled
                ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60'
                : 'text-gray-400 hover:text-gray-600 bg-gray-100 dark:bg-gray-700'
            }`}
            title={soundEnabled ? (isVi ? 'Tắt âm báo' : 'Mute Sound') : (isVi ? 'Bật âm báo' : 'Enable Sound')}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Quick Time display if minimized */}
          {!isExpanded && (
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="font-mono text-sm font-black text-gray-900 dark:text-white">
                {formattedTime}
              </span>
              <button
                onClick={handleTogglePlay}
                className={`p-1 rounded-lg text-white font-bold cursor-pointer transition-transform active:scale-95 ${
                  isRunning ? 'bg-amber-500' : 'bg-teal-600'
                }`}
                title={isRunning ? (isVi ? 'Tạm dừng' : 'Pause') : (isVi ? 'Bắt đầu' : 'Start')}
              >
                {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            title={isExpanded ? (isVi ? 'Thu gọn' : 'Minimize') : (isVi ? 'Mở rộng' : 'Expand')}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Body Controls */}
      {isExpanded && (
        <div className="p-5 sm:p-6 space-y-5 animate-fade-in">
          {/* Mode Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-gray-50 dark:bg-gray-900/60 p-1.5 rounded-2xl border border-gray-100 dark:border-gray-700/60">
            <button
              onClick={() => handleSwitchMode('focus')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === 'focus'
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20 scale-102'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
              }`}
            >
              <span>🍅</span>
              <span>{isVi ? 'Tập trung (25p)' : 'Deep Focus (25m)'}</span>
            </button>

            <button
              onClick={() => handleSwitchMode('shortBreak')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === 'shortBreak'
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20 scale-102'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
              }`}
            >
              <span>☕</span>
              <span>{isVi ? 'Nghỉ ngắn (5p)' : 'Short Break (5m)'}</span>
            </button>

            <button
              onClick={() => handleSwitchMode('longBreak')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === 'longBreak'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-102'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
              }`}
            >
              <span>🌿</span>
              <span>{isVi ? 'Nghỉ dài (15p)' : 'Long Break (15m)'}</span>
            </button>
          </div>

          {/* Central Digital Countdown Clock */}
          <div className="flex flex-col items-center justify-center py-2 space-y-3">
            <div className="relative font-mono font-black text-5xl sm:text-6xl tracking-tight text-gray-900 dark:text-white select-none">
              {formattedTime}
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md bg-gray-100 dark:bg-gray-700/60 rounded-full h-3 overflow-hidden p-0.5 border border-gray-200 dark:border-gray-600">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${
                  mode === 'focus' 
                    ? 'bg-gradient-to-r from-rose-500 to-amber-500' 
                    : mode === 'shortBreak'
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-400'
                    : 'bg-gradient-to-r from-indigo-500 to-blue-400'
                }`}
                style={{ width: `${Math.max(3, progressPercent)}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-gray-400">
              {isVi ? `Đã hoàn thành ${progressPercent}% của chu kỳ này` : `${progressPercent}% of current cycle completed`}
            </span>
          </div>

          {/* Timer Action Buttons: Start/Pause & Reset */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={handleTogglePlay}
              className={`px-7 py-3 rounded-2xl font-black text-sm text-white shadow-md transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/25'
                  : mode === 'focus'
                  ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/25'
                  : 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/25'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>{isVi ? 'Tạm dừng' : 'Pause'}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{isVi ? 'Bắt đầu tập trung' : 'Start Focus'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="px-4 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isVi ? 'Đặt lại thời gian' : 'Reset timer'}
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isVi ? 'Đặt lại' : 'Reset'}</span>
            </button>
          </div>

          {/* Session Statistics Footer */}
          <div className="pt-3 border-t border-gray-100 dark:border-gray-700/80 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-bold">
              <span className="text-rose-500 text-sm">🍅</span>
              <span>{isVi ? `Hôm nay đã hoàn thành:` : `Today's completed focus cycles:`}</span>
              <span className="px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 font-black">
                {completedSessions} {isVi ? 'chu kỳ' : 'sessions'}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isVi ? 'Tự động đồng bộ trạng thái học tập' : 'Live status synchronized'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
