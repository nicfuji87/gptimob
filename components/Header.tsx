
import React from 'react';

const Header: React.FC = () => {
  const whatsappUrl = "https://wa.me/5554999166672?text=Estou%20no%20site%20do%20gptimob%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f0f2f4]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <header className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4 text-[#111318]">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-3xl">smart_toy</span>
            </div>
            <h2 className="text-xl font-black tracking-tighter">gptimob</h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-9">
              <a className="text-sm font-bold hover:text-primary transition-colors" href="#solutions">Soluções</a>
              <a className="text-sm font-bold hover:text-primary transition-colors" href="#benefits">Benefícios</a>
              <a className="text-sm font-bold hover:text-primary transition-colors" href="#testimonials">Depoimentos</a>
            </div>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-sm"
            >
              <span className="truncate">Fale Conosco</span>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
