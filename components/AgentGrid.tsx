
import React from 'react';
import { AGENTS } from '../constants';
import AgentCard from './AgentCard';

const AgentGrid: React.FC = () => {
  const customRequestWhatsappUrl = "https://wa.me/5554999166672?text=Descreva%20todas%20as%20fun%C3%A7%C3%B5es%20e%20tarefas%20que%20voc%C3%AA%20gostaria%20que%20seu%20funcion%C3%A1rio%20fizesse.";

  return (
    <div className="w-full flex justify-center bg-white py-16" id="solutions">
      <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">Nossa Força de Trabalho</span>
            <h2 className="text-[#111318] text-3xl md:text-4xl font-bold leading-tight">Conheça Seus Novos Funcionários</h2>
            <p className="text-gray-500 mt-2 text-lg font-medium">Agentes de IA especializados prontos para integrar sua empresa instantaneamente.</p>
          </div>
          <div className="flex gap-2">
            <button className="size-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark shadow-md transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
          
          {/* Custom Agent Card - Updated to match the requested image */}
          <div className="group flex flex-col justify-center items-center gap-6 rounded-[2.5rem] border-2 border-dashed border-blue-200 bg-white p-10 text-center transition-all hover:border-primary/50 h-full min-h-[350px]">
            <div className="size-20 rounded-full bg-primary flex items-center justify-center text-white mb-2 shadow-xl shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl font-black">add</span>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-3xl font-black text-primary">Criar Agente Personalizado</h3>
              <p className="text-lg text-gray-500 max-w-sm mx-auto font-bold leading-relaxed">
                Não encontrou quem precisa? Vamos projetar um funcionário de IA personalizado.
              </p>
            </div>

            <a 
              href={customRequestWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-10 h-14 rounded-full bg-white text-primary font-black text-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:scale-105 transition-all flex items-center gap-2 border border-gray-100"
            >
              Iniciar Solicitação <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentGrid;
