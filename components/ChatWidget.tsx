
import React from 'react';

const ChatWidget: React.FC = () => {
  const whatsappUrl = "https://wa.me/5554999166672?text=Estou%20no%20site%20do%20gptimob%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center size-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all cursor-pointer animate-bounce hover:animate-none group"
        title="Fale conosco no WhatsApp"
      >
        <span className="material-symbols-outlined text-4xl font-black">chat</span>
        
        {/* Tooltip */}
        <span className="absolute right-20 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
          Fale conosco agora!
        </span>
      </a>
    </div>
  );
};

export default ChatWidget;
