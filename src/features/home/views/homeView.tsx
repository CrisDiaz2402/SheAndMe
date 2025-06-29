import HomeSection from '../components/homeSection';
import MessagesSection from '../components/messagesSection';
import GalerySection from '../components/galerySection';
import MemoriesSection from '../components/memoriesSection';
import MusicSection from '../components/musicSection';

interface Message {
  id: number;
  text: string;
  date: string;
}

interface Memory {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface HomeViewProps {
  activeSection: string;
  romanticImages: string[];
  currentImageIndex: number;
  loveMessages: Message[];
  specialMemories: Memory[];
  isPlaying: boolean;
  isMuted: boolean;
  setIsPlaying: (v: boolean) => void;
  setIsMuted: (v: boolean) => void;
}

const HomeView: React.FC<HomeViewProps> = ({
  activeSection,
  romanticImages,
  currentImageIndex,
  loveMessages,
  specialMemories,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <main className="w-full max-w-2xl mx-auto px-2 sm:px-4 py-4 sm:py-8 overflow-x-hidden">
      {activeSection === 'home' && (
        <HomeSection romanticImages={romanticImages} currentImageIndex={currentImageIndex} />
      )}
      {activeSection === 'messages' && (
        <MessagesSection loveMessages={loveMessages} />
      )}
      {activeSection === 'gallery' && (
        <GalerySection romanticImages={romanticImages} />
      )}
      {activeSection === 'memories' && (
        <MemoriesSection specialMemories={specialMemories} />
      )}
      {activeSection === 'music' && (
        <MusicSection isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      )}
    </main>
  );
};

export default HomeView;
