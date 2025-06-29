import React from 'react';

interface Message {
  id: number;
  text: string;
  date: string;
}

interface MessagesSectionProps {
  loveMessages: Message[];
}

const MessagesSection: React.FC<MessagesSectionProps> = ({ loveMessages }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-4">Mensajes de Amor</h2>
        <p className="text-gray-600">Palabras que salen desde lo más profundo de mi corazón</p>
      </div>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {loveMessages.map((message, index) => (
          <div
            key={message.id}
            className={`p-8 rounded-3xl shadow-xl border border-white/50 transition-all duration-500 hover:scale-105 ${
              index % 2 === 0
                ? 'bg-gradient-to-r from-pink-50 to-rose-50 ml-0 mr-8'
                : 'bg-gradient-to-l from-purple-50 to-pink-50 ml-8 mr-0'
            }`}
          >
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
              "{message.text}"
            </blockquote>
            <div className="text-right text-pink-600 font-semibold">
              — {message.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesSection;
