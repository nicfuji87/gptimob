
import React from 'react';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5554999166672?text=Estou%20no%20site%20do%20gptimob%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <div className="w-full flex justify-center overflow-hidden bg-white">
      <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 sm:px-10 py-12 lg:py-24">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-black text-primary uppercase tracking-[0.1em]">Nova Geração de IA</span>
            </div>
            
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl text-[#111318]">
              Soluções em Inteligência Artificial para <span className="text-primary">Construtoras e Imobiliárias</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl text-gray-600 leading-relaxed font-bold max-w-2xl">
              Fabricamos Funcionários Virtuais Personalizados que trabalham 24 horas por dia e melhoram a eficiência operacional da sua empresa.
            </h2>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[280px] cursor-pointer items-center justify-center gap-3 rounded-full h-16 px-10 bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-black transition-all hover:scale-105 shadow-xl shadow-green-500/20 active:scale-95"
              >
                <span className="material-symbols-outlined font-black">chat</span>
                <span className="truncate">Falar com Especialista</span>
              </a>
            </div>
            
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1 font-bold italic">
              <span className="material-symbols-outlined text-sm">verified</span> Sem compromisso e focado em resultados reais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
