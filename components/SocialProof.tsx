
import React from 'react';
import { CLIENT_LOGOS } from '../constants';
import LogoImage from './LogoImage';

const SocialProof: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-24 bg-white" id="testimonials">
      <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 sm:px-10">
        <div className="flex flex-col items-center gap-2 mb-16 text-center">
          <span className="text-primary font-black text-xs uppercase tracking-[0.2em] px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">Presença Nacional</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#111318]">Clientes em Todo o Brasil</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 md:gap-10 items-center justify-items-center opacity-80 transition-all duration-700 hover:opacity-100">
          {CLIENT_LOGOS.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center p-6 bg-gray-50/40 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300 w-full h-24 group">
              <LogoImage 
                src={logo.filename} 
                alt={logo.name} 
                fallbackColor={logo.color}
                className="max-h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                textClassName="text-sm uppercase font-black tracking-tighter text-center leading-none"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 text-gray-400 font-black text-xs uppercase tracking-[0.3em]">
          <span>Santa Catarina</span>
          <span className="text-primary/30">•</span>
          <span>Paraná</span>
          <span className="text-primary/30">•</span>
          <span>Rio de Janeiro</span>
          <span className="text-primary/30">•</span>
          <span>São Paulo</span>
          <span className="text-primary/30">•</span>
          <span>Pernambuco</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
