import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Tv, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Volume2, 
  FastForward, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { VietJackVideoItem } from './HistoryStudyHub';

interface EmbeddedYoutubePlayerProps {
  video: VietJackVideoItem;
}

export const EmbeddedYoutubePlayer: React.FC<EmbeddedYoutubePlayerProps> = ({ video }) => {
  const [playMode, setPlayMode] = useState<'youtube' | 'interactive'>('youtube');
  const [isPlayingInteractive, setIsPlayingInteractive] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  return (
    <div className="space-y-4">
      
      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-red-50/80 dark:bg-gray-900 p-2 rounded-2xl border border-red-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPlayMode('youtube')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              playMode === 'youtube'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-800'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Trình phát YouTube trực tiếp</span>
          </button>

          <button
            onClick={() => setPlayMode('interactive')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              playMode === 'interactive'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chế độ Giảng bài Tương tác (In-App)</span>
          </button>
        </div>

        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 px-2"
        >
          <span>Mở trên YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Main Video Viewport */}
      {playMode === 'youtube' ? (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-red-200 dark:border-gray-700 bg-black">
          <iframe 
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1&enablejsapi=1`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        /* In-App Interactive Slide Video Player */
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-red-300 dark:border-gray-700 bg-gradient-to-br from-gray-900 via-red-950 to-black p-6 text-white flex flex-col justify-between">
          
          {/* Top Player Status */}
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full bg-red-600 text-white font-black text-[10px] uppercase tracking-wider">
              {video.chapterTag} • VIETJACK INTERACTIVE LECTURE
            </span>

            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{video.duration}</span>
            </div>
          </div>

          {/* Center Slide Narrative Content */}
          <div className="my-auto max-w-xl mx-auto text-center space-y-3 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
            <span className="text-3xl block">👨‍🏫</span>
            <h4 className="text-lg sm:text-xl font-black text-amber-300">
              {video.title}
            </h4>
            <p className="text-xs text-gray-200 leading-relaxed font-medium">
              {video.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
              {video.keyTopics.map((kt, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-bold">
                  ✓ {kt}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Interactive Player Controls */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlayingInteractive(!isPlayingInteractive)}
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                {isPlayingInteractive ? '⏸' : '▶'}
              </button>
              
              <div className="text-xs">
                <span className="font-bold block">{video.teacher}</span>
                <span className="text-[10px] text-gray-400">
                  {isPlayingInteractive ? 'Đang phát bài giảng...' : 'Sẵn sàng giảng bài'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-400 font-bold">Tốc độ:</span>
              {[1, 1.25, 1.5].map(spd => (
                <button
                  key={spd}
                  onClick={() => setPlaybackSpeed(spd)}
                  className={`px-2 py-1 rounded-md text-[10px] font-bold cursor-pointer ${
                    playbackSpeed === spd ? 'bg-red-600 text-white' : 'bg-white/10 hover:bg-white/20 text-gray-300'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
