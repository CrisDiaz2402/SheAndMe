import React from 'react';
import { Music } from 'lucide-react';
import chachacha from '../../../assets/music/chachacha.mp3';

interface MusicSectionProps {
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
}

const MusicSection: React.FC<MusicSectionProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-4">Nuestra Música</h2>
        <p className="text-gray-600">Las canciones que cuentan nuestra historia</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Music className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">Nuestra Canción</h3>
            <p className="text-gray-600">La melodía de nuestro amor</p>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
          <div className="text-center space-y-2">
            <audio ref={audioRef} src={chachacha} preload="auto" />
            <p className="text-lg text-gray-700 italic">
              "Esta es la canción que sonaba cuando nos estabamos conocimos..."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
