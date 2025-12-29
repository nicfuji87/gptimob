
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white py-20 border-t border-gray-800">
      <div className="layout-container flex justify-center w-full">
        <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">smart_toy</span>
                <span className="text-2xl font-black">gptimob</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed font-medium mb-8">
                Empoderando negócios imobiliários e de construção com forças de trabalho digitais inteligentes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="material-symbols-outlined text-xl">share</i>
                </a>
                <a href="#" className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="material-symbols-outlined text-xl">language</i>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="font-black text-xl mb-2">Soluções</h4>
                <a className="text-gray-400 hover:text-white transition-colors font-bold" href="#solutions">Agentes Virtuais</a>
                <a className="text-gray-400 hover:text-white transition-colors font-bold" href="#">Integrações</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-black text-xl mb-2">Empresa</h4>
                <a className="text-gray-400 hover:text-white transition-colors font-bold" href="#">Sobre Nós</a>
                <a className="text-gray-400 hover:text-white transition-colors font-bold" href="#">Carreiras</a>
                <a className="text-gray-400 hover:text-white transition-colors font-bold" href="#">Contato</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-black text-xl mb-2">Legal</h4>
                <a className="text-gray-400 hover:text-white transition-colors font-bold" href="#">Privacidade</a>
                <a className="text-gray-400 hover:text-white transition-colors font-bold" href="#">Termos</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p className="font-bold">© 2026 gptimob. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a className="hover:text-white transition-colors font-bold" href="#">Twitter</a>
              <a className="hover:text-white transition-colors font-bold" href="#">LinkedIn</a>
              <a className="hover:text-white transition-colors font-bold" href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
