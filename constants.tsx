
import { Agent } from './types';

export const AGENTS: Agent[] = [
  {
    id: 'liza',
    name: 'Liza',
    role: 'PRÉ-ATENDIMENTO (PRÉ-VENDAS)',
    description: 'A Liza recebe, qualifica e direciona os leads para as próximas etapas da jornada de vendas ou locação, garantindo que os corretores ou consultores recebam leads bem preparados e com maior potencial de conversão, otimizando o processo comercial, melhorando a experiência do cliente e aumentando as chances de fechamento de negócios.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4p7YIKiVDRt8zls3alRiufoVmQrtJr9L21ovvvcr9EzRraEpqQv9hWfnJzgduyD9ReNG9QRvWCTyajmiUnyKIxpW_e9YGTUghvBksWd_9sxU6fgzhbbVUkk1uzkbyeAtet7Pgz0KhicXltbDLOk-hZBsBMDLYlkjTcpvLUHxFR2y_5VUw3cq3wVAuoPQRGRcuqen7Pey-DSvLmzBE1OJA4lz9Tos-BGfn4P9bU6J23JwoKSfjbm4O2ddjXuSM2-_4BXLQ_9AHo53j',
    icon: 'support_agent',
    status: 'Ativo',
    tasks: [
      'Receber e cadastrar leads',
      'Fornecer informações iniciais',
      'Filtrar informações',
      'Realizar a qualificação do lead',
      'Agendar visitas',
      'Encaminhar leads qualificados',
      'Manter o CRM 100% atualizado'
    ],
    detailedTasks: [
      {
        title: 'Receber e cadastrar leads',
        description: 'Captar e registrar no CRM (Vista, Imoview, CV CRM, SIGA, JetImob ou qualquer outro) informações de potenciais clientes que chegam à imobiliária ou construtora através do site, whatsapp, redes sociais e portais de anúncios.'
      },
      {
        title: 'Fornecer informações iniciais',
        description: 'Esclarecer qualquer tipo de dúvidas sobre imóveis, além de todas as informações da cidade e características dos bairros, além de outros aspectos relevantes de forma precisa e imediata, preparando o cliente para a próxima etapa.'
      },
      {
        title: 'Filtrar informações',
        description: 'Verificar se o lead se encaixa no perfil da imobiliária/construtora e dos imóveis disponíveis, evitando perda de tempo com contatos não relevantes.'
      },
      {
        title: 'Realizar a qualificação do lead',
        description: 'Entender as necessidades, desejos, orçamento e urgência do cliente, a fim de identificar se é um lead qualificado (quente, morno ou frio).'
      },
      {
        title: 'Agendar visitas',
        description: 'Com leads qualificados, a Liza agenda visitas aos imóveis que correspondam às suas expectativas, otimizando o tempo dos corretores.'
      },
      {
        title: 'Encaminhar leads qualificados',
        description: 'Direcionar os contatos com maior potencial de fechamento para os corretores ou consultores, além de elaborar um resumo do atendimento e enviar para o WhatsApp (e e-Mail) do corretor, deixando-o 100% preparado e seguro para a venda ou a locação do imóvel.'
      },
      {
        title: 'Manter o CRM 100% atualizado',
        description: 'A Liza centraliza e organiza TODAS as informações dos leads no CRM, facilitando o acompanhamento do processo comercial e garantindo que nenhuma oportunidade seja perdida.'
      }
    ]
  },
  {
    id: 'tom',
    name: 'Tom',
    role: 'ASSISTENTE DO CORRETOR',
    description: 'O Tom auxilia o corretor no atendimento ao cliente, nas tarefas administrativas e de suporte, como preenchimento do CRM, organização da agenda, agendamento de visitas e preparação da abordagem de vendas e locação de imóveis.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    icon: 'assignment_ind',
    status: 'Ativo',
    tasks: [
      'Notificação automática',
      'Conversa direto pelo WhatsApp',
      'Acompanha o pipeline de vendas',
      'Agenda visitas e reuniões',
      'Registra atualizações no CRM',
      'Gerencia materiais e documentos',
      'Responde dúvidas técnicas'
    ],
    detailedTasks: [
      {
        title: 'Notificação automática',
        description: 'Sobre novos leads e atualizações de imóveis e empreendimentos: seu time recebe tudo na palma da mão, no momento certo, sem precisar correr atrás da informação.'
      },
      {
        title: 'Conversa direto pelo WhatsApp',
        description: 'Onde o corretor está, o Tom está junto, com suporte constante e interface amigável via chat.'
      },
      {
        title: 'Acompanha o pipeline de vendas e o status dos leads',
        description: 'Mantém a visão clara de quem avançou, quem precisa de follow-up e onde agir para não perder oportunidades.'
      },
      {
        title: 'Agenda visitas e reuniões',
        description: 'Facilita a rotina e reduz as trocas manuais sem deixar passar nenhum compromisso importante na agenda do corretor.'
      },
      {
        title: 'Registra atualizações no CRM',
        description: 'A partir de mensagens de texto ou áudios do WhatsApp: o corretor envia, o Tom organiza. Sem retrabalho, sem burocracia.'
      },
      {
        title: 'Gerencia materiais e documentos',
        description: 'Todos os materiais de apoio disponíveis sob demanda. Mais agilidade, menos fricção no envio de apresentações.'
      },
      {
        title: 'Responde dúvidas sobre produtos e financiamento',
        description: 'Entrega suporte técnico imediato sobre imóveis, empreendimentos, contratos e condições comerciais.'
      }
    ]
  },
  {
    id: 'luck',
    name: 'Luck',
    role: 'RECUPERADOR DE LEADS ANTIGOS',
    description: 'O Luck tem a função de ajudar o corretor na ativação da sua base de clientes. Ele envia novas ofertas de imóveis, além de avisar o cliente quando o imóvel de seu interesse foi cadastrado no site da imobiliária.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    icon: 'restore',
    status: 'Ativo',
    tasks: [
      'Reativa leads antigos via WhatsApp',
      'Follow-up inteligente'
    ],
    detailedTasks: [
      {
        title: 'Reativa leads antigos',
        description: 'Envia novas ofertas de imóveis semanalmente através do WHATSAPP para TODOS os leads que estão na base de clientes do CRM (RD, Imoview, Vista/Loft, Apresenta.me, etc…).'
      },
      {
        title: 'Follow-up inteligente',
        description: 'Mantém o contato através do WHATSAPP (e e-Mail) com leads que não estão prontos para compra, buscando nutri-los com informações sobre a cidade, bairro, novas oportunidades.'
      }
    ]
  },
  {
    id: 'ana',
    name: 'Ana',
    role: 'ATENDENTE DE MANUTENÇÃO E REPARO',
    description: 'A Ana recebe e acompanha as solicitações de reparos e manutenção de imóveis. Essa função envolve o contato com proprietários, locatários e prestadores de serviço, além de tarefas administrativas e de suporte.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    icon: 'build',
    status: 'Ativo',
    tasks: [
      'Atender o cliente',
      'Receber solicitações via WhatsApp/Vídeo'
    ],
    detailedTasks: [
      {
        title: 'Atender o cliente',
        description: 'Prestar um bom atendimento aos clientes, esclarecendo dúvidas, fornecendo informações e buscando soluções para seus problemas e necessidades.'
      },
      {
        title: 'Receber e dar andamento das solicitações',
        description: 'Receber por TEXTO, ÁUDIO e VÍDEO as solicitações de reparo e manutenção feitas por proprietários, locatários ou outros envolvidos, através do e-Mail ou WhatsApp.'
      },
      {
        title: 'Abrir chamado de reparo e manutenção',
        description: 'Registrar e organizar informações sobre as solicitações no sistema utilizado pela imobiliária ou construtora (Fast Built, SAMI, Superlógica ou outro).'
      },
      {
        title: 'Identificar e priorizar as solicitações',
        description: 'Identificar o tipo de manutenção (elétrica, hidráulica, pintura, etc.) e sinalizar a devida urgência e prioridade conforme a gravidade.'
      },
      {
        title: 'Contato com proprietários e locatários',
        description: 'Notificar o proprietário sobre a solicitação de manutenção no seu imóvel, mantendo todos informados sobre o progresso.'
      }
    ]
  },
  {
    id: 'eva',
    name: 'Eva',
    role: 'ANALISTA DE SUCESSO DO CLIENTE',
    description: 'A Eva mantém o relacionamento com o cliente ativo, garantindo satisfação desde a assinatura do contrato. Ela acompanha o cliente no pós-venda, responde dúvidas sobre obras e contratos, cuidando de cada interação com eficiência.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    icon: 'verified_user',
    status: 'Ativo',
    tasks: [
      'Suporte contínuo pós-compra',
      'Acompanha contratos e obras'
    ],
    detailedTasks: [
      {
        title: 'Atende clientes após a compra',
        description: 'Com suporte contínuo: o ponto de contato ideal para manter o cliente bem informado, com agilidade e satisfação durante toda a jornada.'
      },
      {
        title: 'Acompanha contratos e informações da obra',
        description: 'Responde dúvidas e fornece atualizações com precisão e linguagem acessível.'
      },
      {
        title: 'Envia atualizações sobre o andamento da obra',
        description: 'Reduz dúvidas recorrentes e melhora a experiência no pós-compra através de comunicações proativas.'
      },
      {
        title: 'Integração com ERP',
        description: 'Informações sempre atualizadas, seguras e em sincronia com o que acontece internamente na imobiliária ou construtora.'
      }
    ]
  },
  {
    id: 'ivi',
    name: 'Ivi',
    role: 'ASSISTENTE FINANCEIRO (COBRANÇA)',
    description: 'A Ivi é responsável pelas contas a receber e ajuda o departamento financeiro no setor de cobrança, gestão de inadimplência e conciliação bancária.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    icon: 'payments',
    status: 'Ativo',
    tasks: [
      'Envio de boletos e documentos',
      'Gestão de inadimplência'
    ],
    detailedTasks: [
      {
        title: 'Envia boletos e disponibiliza documentos',
        description: 'Enviar boletos, lembretes e realizar contato com os clientes para garantir o recebimento dos valores devidos.'
      },
      {
        title: 'Gestão de inadimplência',
        description: 'Acompanhar casos de atraso, entrar em contato para negociação, emissão de notificações e encaminhamento para cobrança judicial se necessário.'
      },
      {
        title: 'Conciliação bancária',
        description: 'Conferir os recebimentos efetuados e garantir que todos os valores foram corretamente registrados no sistema ERP.'
      },
      {
        title: 'Atendimento ao Cliente',
        description: 'Responder a dúvidas e solicitações dos clientes relacionadas à cobrança e pagamentos.'
      }
    ]
  },
  {
    id: 'joao',
    name: 'João',
    role: 'DESOCUPAÇÃO DE IMÓVEIS',
    description: 'O João garante que o imóvel seja devolvido de acordo com as condições contratuais, gerenciando notificações, reparos, vistorias de saída e entrega formal de chaves.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    icon: 'meeting_room',
    status: 'Ativo',
    tasks: [
      'Gestão de notificações de saída',
      'Coordenação de reparos e vistoria'
    ],
    detailedTasks: [
      {
        title: 'Notificação',
        description: 'Gerencia o processo de notificação antecedente de 30 dias sobre a intenção de desocupar o imóvel conforme a Lei do Inquilinato.'
      },
      {
        title: 'Reparos e Vistoria',
        description: 'Coordena a realização de reparos necessários e a vistoria de saída para avaliar as condições do imóvel em conjunto com o inquilino.'
      },
      {
        title: 'Entrega e Finalização',
        description: 'Garante a entrega das chaves dentro do prazo e a conclusão formal de todas as responsabilidades financeiras e contratuais.'
      },
      {
        title: 'Ações Legais',
        description: 'Monitora o cumprimento contratual e sinaliza a necessidade de ações judiciais em casos de descumprimento por parte do inquilino.'
      }
    ]
  }
];

export interface ClientLogo {
  name: string;
  filename: string;
  color: string;
  scale?: number;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Arnel Imóveis', filename: '/logos/arnel.jpeg', color: '#e31e24' },
  { name: 'Ricardo Imóveis', filename: '/logos/ricardoimoveis.jpeg', color: '#b5a287' },
  { name: 'KR Empreendimentos', filename: '/logos/krcon.jpeg', color: '#a6824c' },
  { name: 'Progetti', filename: '/logos/progetti.jpeg', color: '#1a3c5e' },
  { name: 'Procave', filename: '/logos/procave.jpeg', color: '#007a33' },
  { name: 'Hub Nogueira', filename: '/logos/hubnogueira.jpeg', color: '#1c244b' },
  { name: 'Due Incorporadora', filename: '/logos/due.jpeg', color: '#000000' },
  { name: 'JBem Imóveis', filename: '/logos/jbem.jpeg', color: '#d4af37' },
  { name: 'Ijuí Imóveis', filename: '/logos/ijui.jpeg', color: '#daa520' },
  { name: 'Balen Imóveis', filename: '/logos/balen.jpeg', color: '#ff4500' },
  { name: 'Qualitá Imóveis', filename: '/logos/qualita.jpeg', color: '#5dade2' },
  { name: 'Eco Construtora', filename: '/logos/eco.jpeg', color: '#f39c12' },
  { name: 'Realiza Negócios', filename: '/logos/realiza.jpeg', color: '#003399' }
];

export const INTEGRATION_LOGOS: ClientLogo[] = [
  { name: 'Imoview', filename: '/logos/imoview.jpeg', color: '#00537a' },
  { name: 'Vista', filename: '/logos/vista.jpeg', color: '#5d6d7e' },
  { name: 'SIGA CRM', filename: '/logos/siga.jpeg', color: '#0083ca' },
  { name: 'Loft CRM', filename: '/logos/loft.jpeg', color: '#ff6c37' },
  { name: 'Kurole', filename: '/logos/kurole.jpeg', color: '#8db600' },
  { name: 'CV CRM', filename: '/logos/cv.jpeg', color: '#0f172a' },
  { name: 'RD Station', filename: '/logos/rdstation.jpeg', color: '#000000', scale: 1.5 },
  { name: 'Bitrix24', filename: '/logos/bitrix.jpeg', color: '#2fc6f6', scale: 1.5 }
];
