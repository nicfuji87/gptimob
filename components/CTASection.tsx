
import React from 'react';

const CTASection: React.FC = () => {
  const whatsappUrl = "https://wa.me/5554999166672?text=Estou%20no%20site%20do%20gptimob%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <div className="w-full flex justify-center py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-96 rounded-full bg-black/10 blur-3xl"></div>
      
      <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4 sm:px-10 text-center text-white relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8">Pronto para automatizar seu fluxo de trabalho?</h2>
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">Junte-se a empresas imobiliárias e de construção inovadoras usando a gptimob para crescer mais rápido.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary hover:bg-gray-100 font-black py-5 px-10 rounded-full shadow-2xl transition-all hover:-translate-y-2 flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined font-bold">chat</span>
            Conversar no WhatsApp
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark/40 hover:bg-primary-dark/60 border border-white/30 text-white font-black py-5 px-10 rounded-full transition-all hover:border-white/60 flex items-center justify-center"
          >
            Solicitar Demo Personalizada
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
