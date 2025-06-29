import { useState } from 'react';
import { Heart, Music, Image, MessageCircle, Menu, X } from 'lucide-react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navOptions = [
    { id: 'home', icon: Heart, label: 'Inicio' },
    { id: 'messages', icon: MessageCircle, label: 'Mensajes' },
    { id: 'gallery', icon: Image, label: 'Galería' },
    { id: 'music', icon: Music, label: 'Música' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="text-pink-500" size={24} />
            <span className="font-serif text-xl text-gray-800">Para Ti</span>
          </div>
          {/* Menú hamburguesa para móviles */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 rounded-lg text-pink-500 hover:bg-pink-100 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {/* Opciones de navegación para escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            {navOptions.map(({ id, icon: Icon, label }) => (
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
      {/* Menú lateral para móviles */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden flex min-h-screen" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-64 min-h-screen bg-white shadow-lg p-6 flex flex-col space-y-4 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif text-xl text-gray-800">Menú</span>
              <button
                className="p-2 rounded-lg text-pink-500 hover:bg-pink-100 focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
            </div>
            {navOptions.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-2 px-3 py-3 rounded-lg text-lg transition-all duration-200 w-full justify-start ${
                  activeSection === id
                    ? 'bg-white text-pink-600 font-semibold shadow'
                    : 'bg-pink-50 text-gray-600 hover:text-pink-500 hover:bg-pink-100'
                }`}
              >
                <Icon size={22} />
                <span>{label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                if (onLogout) onLogout();
                setMenuOpen(false);
              }}
              className="mt-6 px-4 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-semibold w-full"
            >
              Salir
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
