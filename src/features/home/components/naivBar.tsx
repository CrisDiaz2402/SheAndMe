import { Heart, Music, Image, MessageCircle } from 'lucide-react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection, onLogout }) => (
  <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <Heart className="text-pink-500" size={24} />
          <span className="font-serif text-xl text-gray-800">Para Ti</span>
        </div>
        <div className="flex items-center space-x-6">
          {[
            { id: 'home', icon: Heart, label: 'Inicio' },
            { id: 'messages', icon: MessageCircle, label: 'Mensajes' },
            { id: 'gallery', icon: Image, label: 'Galería' },
            // { id: 'memories', icon: Calendar, label: 'Recuerdos' }, // Oculto temporalmente
            { id: 'music', icon: Music, label: 'Música' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeSection === id
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
              }`}
            >
              <Icon size={18} />
              <span className="hidden sm:inline text-sm">{label}</span>
            </button>
          ))}
          {/* Botón cerrar sesión en la barra de navegación */}
          <button
            onClick={() => {
              if (onLogout) onLogout();
            }}
            className="ml-4 px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
