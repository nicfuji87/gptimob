
import React from 'react';
import { INTEGRATION_LOGOS } from '../constants';
import LogoImage from './LogoImage';

const Integrations: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-24 bg-white overflow-hidden">
      <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 sm:px-10">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <span className="text-primary font-black text-[11px] uppercase tracking-[0.2em] px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            FUNCIONA PERFEITAMENTE COM SUAS FERRAMENTAS EXISTENTES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#111318] max-w-3xl">
            Integrado com os <span className="text-primary">Principais Sistemas</span> do Mercado Imobiliário
          </h2>
          <p className="text-lg text-gray-500 font-bold max-w-2xl">
            Nossos agentes de IA se conectam nativamente com seu CRM e ERP favorito, garantindo que os dados fluam sem interrupções.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center justify-items-center">
          {INTEGRATION_LOGOS.map((logo, idx) => (
            <div 
              key={idx} 
              className="group relative flex items-center justify-center p-8 bg-gray-50/50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300 w-full h-32"
            >
              <LogoImage 
                src={logo.filename} 
                alt={logo.name} 
                fallbackColor={logo.color}
                className="max-h-12 w-auto object-contain transition-all duration-500"
              />
              <div className="absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#111318] text-white text-[10px] font-black px-2 py-1 rounded-md pointer-events-none">
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-64 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Seu CRM não está na lista?</h3>
              <p className="text-gray-400 font-bold text-lg">
                Desenvolvemos integrações personalizadas para praticamente qualquer software que sua empresa já utiliza.
              </p>
            </div>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-white hover:bg-gray-100 text-primary text-base font-black transition-all hover:scale-105 shrink-0">
              Consultar Integração
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
