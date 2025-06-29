import React from 'react';

interface GalerySectionProps {
  romanticImages: string[];
}

const GalerySection: React.FC<GalerySectionProps> = ({ romanticImages }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-4">Nuestra Galería</h2>
        <p className="text-gray-600">Aquí iran las fotos que nos debemos tomar :3</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {romanticImages.map((image: string, index: number) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <img
              src={image}
              alt={`Romantic moment ${index + 1}`}
              className="w-full max-w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="font-semibold">Momento Especial</h4>
              <p className="text-sm text-white/80">Recuerdo #{index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalerySection;
