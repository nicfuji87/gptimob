
import React from 'react';

const Benefits: React.FC = () => {
  const mainPillars = [
    {
      label: "DISPONIBILIDADE",
      title: "Sempre Ativo, 24/7",
      desc: "Nunca perca um lead ou atrase um relatório. Sua equipe de IA trabalha o tempo todo, atendendo centenas de clientes simultaneamente com a mesma rapidez.",
      icon: "schedule",
      color: "blue",
      bgColor: "bg-white",
      textColor: "text-[#111318]",
      labelColor: "text-gray-400",
      btnColor: "bg-primary",
      iconBg: "bg-blue-50"
    },
    {
      label: "ECONOMIA",
      title: "Reduza Custos Drasticamente",
      desc: "Economize até 70% em custos administrativos e operacionais. Sem encargos trabalhistas, aumentos de salário ou custos de treinamento.",
      icon: "trending_down",
      color: "green",
      bgColor: "bg-[#0b101b]",
      textColor: "text-white",
      labelColor: "text-gray-500",
      btnColor: "bg-white text-black",
      iconBg: "bg-gray-800/50"
    },
    {
      label: "AGILIDADE",
      title: "Escala Instantânea",
      desc: "Ative novos agentes de IA instantaneamente. Otimize seu investimento em tráfego e garanta que cada lead seja respondido na hora.",
      icon: "rocket_launch",
      color: "purple",
      bgColor: "bg-white",
      textColor: "text-[#111318]",
      labelColor: "text-gray-400",
      btnColor: "bg-[#8b5cf6]",
      iconBg: "bg-purple-50"
    }
  ];

  const allBenefits = [
    {
      category: "Atendimento e Performance",
      items: [
        "Atendimento 24 horas por dia, 7 dias por semana",
        "Atende 5, 10 ou 100 clientes ao mesmo tempo com mesma eficiência",
        "Não se cansa, não descansa e está sempre motivado",
        "Atendimento padronizado, sempre no tom da sua marca",
        "Resolução de problemas no primeiro contato",
        "Velocidade máxima: corretor notificado na hora com dados em mãos"
      ]
    },
    {
      category: "Economia e Gestão",
      items: [
        "Sem risco de processo trabalhista ou pedidos de aumento",
        "Redução drástica de custos com suporte e áreas administrativas",
        "Economia total em treinamento de equipe de atendimento",
        "Corretores mais produtivos: menos tarefas repetitivas, mais vendas",
        "Menos solicitações repetidas: filtra demandas que sobrecarregam a equipe",
        "Não pede folga, não fica doente e trabalha fins de semana sem reclamar"
      ]
    },
    {
      category: "Resultados e Vendas",
      items: [
        "Aumento significativo na conversão de leads e satisfação do cliente",
        "Otimização real do investimento em tráfego pago",
        "Entrega de leads qualificados de forma instantânea para o time",
        "Organização total: histórico e materiais centralizados e acessíveis",
        "Autonomia para o cliente: acesso a boletos e atualizações sem espera",
        "Proporciona uma experiência premium e diferenciada ao seu cliente"
      ]
    }
  ];

  return (
    <div className="w-full flex justify-center py-24 bg-[#f6f8fb]" id="benefits">
      <div className="layout-content-container flex flex-col max-w-[1280px] w-full px-4 sm:px-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#111318] mb-6 leading-tight">
            Quais as vantagens de ter um funcionário virtual aí na sua imobiliária ou Construtora?
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Transforme sua operação com tecnologia de ponta, eliminando gargalos humanos e escalando seus resultados com eficiência máxima.
          </p>
        </div>

        {/* Top 3 Featured Cards - Removed the "Saiba Mais" buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {mainPillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`${pillar.bgColor} ${pillar.textColor} rounded-[3rem] shadow-xl overflow-hidden relative flex flex-col items-center text-center p-10 pt-14 h-[550px] border border-gray-100/50`}
            >
              <span className={`${pillar.labelColor} text-[11px] font-black tracking-[0.2em] mb-6 uppercase`}>
                {pillar.label}
              </span>
              <h3 className="text-4xl font-black mb-8 leading-[1.1]">
                {pillar.title}
              </h3>
              <p className={`text-lg font-medium leading-relaxed opacity-80 mb-10`}>
                {pillar.desc}
              </p>
              
              <div className="mt-auto mb-10">
                <div className={`size-44 rounded-full ${pillar.iconBg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-8xl ${pillar.color === 'blue' ? 'text-primary' : pillar.color === 'green' ? 'text-[#22c55e]' : 'text-[#8b5cf6]'}`}>
                    {pillar.icon}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Benefits Categorization */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {allBenefits.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-black text-[#111318]">{cat.category}</h4>
                </div>
                <ul className="flex flex-col gap-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5 group-hover:scale-110 transition-transform">check_circle</span>
                      <span className="text-gray-600 font-bold text-[15px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <p className="text-gray-400 font-bold italic">
              "A gptimob não é apenas um chatbot, é uma revolução completa na produtividade do mercado imobiliário."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
