import { useState, useEffect } from 'react';
import NavBar from './features/home/components/naivBar';
import HomeView from './features/home/views/homeView';
import { getInfoData, InfoData } from './services/infoService';

function App({ onLogout }: { onLogout?: () => void }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [info, setInfo] = useState<InfoData | null>(null);

  useEffect(() => {
    getInfoData().then(setInfo).catch(console.error);
  }, []);

  useEffect(() => {
    if (!info) return;
    if (currentImageIndex < info.romanticImages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentImageIndex(0);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, info]);

  if (!info) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 w-full max-w-full">
      {/* Navigation */}
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={onLogout} />
      {/* Main Content */}
      <HomeView
        activeSection={activeSection}
        romanticImages={info.romanticImages}
        currentImageIndex={currentImageIndex}
        loveMessages={info.loveMessages}
        specialMemories={info.specialMemories}
        isPlaying={isPlaying}
        isMuted={isMuted}
        setIsPlaying={setIsPlaying}
        setIsMuted={setIsMuted}
      />
    </div>
  );
}

export default App;