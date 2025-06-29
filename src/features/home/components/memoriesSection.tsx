import React from 'react';
import { Heart } from 'lucide-react';

interface Memory {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

interface MemoriesSectionProps {
  specialMemories: Memory[];
}

const MemoriesSection: React.FC<MemoriesSectionProps> = ({ specialMemories }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-4">Nuestra Historia</h2>
        <p className="text-gray-600">El timeline de nuestro amor</p>
      </div>
      <div className="max-w-4xl mx-auto">
        {specialMemories.map((memory: Memory) => (
          <div key={memory.id} className="flex items-center mb-12 last:mb-0">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="text-white" size={20} />
            </div>
            <div className="ml-6 flex-grow">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full max-w-full md:w-32 h-32 object-cover rounded-xl shadow-md"
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-serif text-gray-800 mb-2">{memory.title}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{memory.description}</p>
                    <span className="text-pink-600 font-semibold text-sm">{memory.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoriesSection;
