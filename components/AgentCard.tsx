
import React, { useState, useEffect } from 'react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [showModal, setShowModal] = useState(false);
  const whatsappUrl = "https://wa.me/5554999166672?text=Estou%20no%20site%20do%20gptimob%20e%20quero%20mais%20informa%C3%A7%C3%B5es.";

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <>
      <div className="group bg-white rounded-[2rem] border border-gray-100 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Side: Image */}
          <div className="w-full md:w-[42%] flex-shrink-0">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full min-h-[300px] overflow-hidden rounded-[1.5rem] bg-gray-50 border border-gray-100">
              <img 
                src={agent.image} 
                alt={agent.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Status Pill Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 bg-white/90 backdrop-blur rounded-xl shadow-sm border border-white/50">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[13px] font-black text-green-600 uppercase tracking-tight">{agent.status}</span>
                </div>
                <span className="material-symbols-outlined text-primary text-lg">face</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 flex flex-col pt-2">
            <div className="mb-6">
              <h3 className="text-4xl font-black text-[#111318] mb-1">{agent.name}</h3>
              <p className="text-primary font-black text-sm uppercase tracking-wider">{agent.role}</p>
            </div>

            <div className="space-y-6">
              {/* Function Section */}
              <div>
                <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-2">
                  QUAL A FUNÇÃO DA {agent.name.toUpperCase()}?
                </h4>
                <p className="text-[15px] text-gray-700 leading-relaxed font-bold">
                  {agent.description}
                </p>
              </div>

              {/* Tasks Section (Summary - Only first 2 tasks) */}
              <div>
                <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3">
                  PRINCIPAIS TAREFAS QUE A {agent.name.toUpperCase()} EXECUTA
                </h4>
                <ul className="grid grid-cols-1 gap-y-2.5">
                  {agent.tasks.slice(0, 2).map((task, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600 font-bold group/item">
                      <span className="material-symbols-outlined text-green-500 text-[18px] select-none font-black">check</span>
                      <span className="pt-0.5">{task}</span>
                    </li>
                  ))}
                </ul>
                {agent.tasks.length > 2 && (
                  <div 
                    className="mt-3 inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-wider px-3 py-1.5 bg-blue-50 rounded-full cursor-pointer hover:bg-blue-100 transition-colors"
                    onClick={() => setShowModal(true)}
                  >
                    <span className="material-symbols-outlined text-[14px]">add</span>
                    {agent.tasks.length - 2} outras tarefas especializadas
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons (Ver Tarefas on Left, Contrate on Right) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowModal(true)}
                className="flex-1 cursor-pointer items-center justify-center rounded-2xl h-14 px-8 bg-[#22c55e] hover:bg-green-600 transition-all text-white text-lg font-black shadow-lg shadow-green-500/20 active:scale-95 flex gap-2"
              >
                <span className="material-symbols-outlined">visibility</span>
                Ver Tarefas Executadas
              </button>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex cursor-pointer items-center justify-center rounded-2xl h-14 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-lg font-black shadow-lg shadow-primary/20 active:scale-95"
              >
                Contrate Agora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specification Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-[#111318]/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowModal(false)}>
          <div 
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-8 pt-8 pb-4 flex justify-between items-start border-b border-gray-100">
              <div>
                <h2 className="text-3xl font-black text-[#111318]">Ficha Técnica: {agent.name}</h2>
                <p className="text-primary font-black text-sm uppercase tracking-widest">{agent.role}</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="size-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="space-y-10">
                {/* Description */}
                <div>
                  <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    QUAL A FUNÇÃO DA {agent.name.toUpperCase()}?
                  </h4>
                  <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                    <p className="text-lg text-gray-800 leading-relaxed font-bold">
                      {agent.description}
                    </p>
                  </div>
                </div>

                {/* Detailed Tasks */}
                <div>
                  <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                    PRINCIPAIS TAREFAS QUE A {agent.name.toUpperCase()} EXECUTA:
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    {(agent.detailedTasks || agent.tasks.map(t => ({ title: t, description: '' }))).map((task, idx) => (
                      <div key={idx} className="flex gap-5 group">
                        <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-black text-lg">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xl font-black text-[#111318] mb-2 group-hover:text-primary transition-colors">
                            {typeof task === 'string' ? task : task.title}
                          </h5>
                          {typeof task !== 'string' && task.description && (
                            <p className="text-gray-600 font-bold leading-relaxed">
                              {task.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-gray-500 font-bold italic text-sm">
                <span className="material-symbols-outlined text-primary">info</span>
                Este agente de IA está pronto para ser implementado em sua empresa.
              </div>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex cursor-pointer items-center justify-center rounded-2xl h-14 px-12 bg-primary hover:bg-primary-dark transition-all text-white text-lg font-black shadow-lg shadow-primary/20 active:scale-95"
              >
                Contratar {agent.name} Agora
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgentCard;
