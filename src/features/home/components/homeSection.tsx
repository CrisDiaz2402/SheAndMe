import React from 'react';

interface HomeSectionProps {
  romanticImages: string[];
  currentImageIndex: number;
}

const HomeSection: React.FC<HomeSectionProps> = ({ romanticImages, currentImageIndex }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif text-gray-800 mb-4">
          Bienvenida a Nuestro Mundo de Amor
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Un lugar especial creado con todo mi amor, donde cada detalle es pensado para ti.
          Aquí vivirán nuestros recuerdos más preciados y el amor que nos une cada día más.
        </p>
      </div>

      {/* Featured Image Carousel */}
      <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={romanticImages[currentImageIndex]}
          alt="Romantic moment"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-serif">Momentos Especiales</h3>
          <p className="text-white/80">Cada instante contigo es único</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: '∞', label: 'Días de Amor', color: 'from-pink-400 to-rose-400' },
          { number: '24/7', label: 'Pensando en Ti', color: 'from-purple-400 to-pink-400' },
          { number: '1', label: 'Mi Única', color: 'from-rose-400 to-red-400' },
          { number: '100%', label: 'Para Siempre', color: 'from-red-400 to-pink-400' }
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
            <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
