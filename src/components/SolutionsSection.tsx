import { Clock, Users, Settings, Heart, Calendar, Cpu, Wrench, User, FileText, BarChart3 } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const SolutionsSection = () => {
  const timelineData = [
    {
      id: 1,
      title: "Disponibilidade 24/7",
      date: "Fase 1",
      content: "Sempre online, sempre pronto para atender suas necessidades a qualquer momento. Eficiente e pronto para resolver as dúvidas dos clientes sem deixar eles esperando.",
      category: "Atendimento",
      icon: Clock,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Qualificação Inteligente",
      date: "Fase 2",
      content: "Triagem sofisticada e personalizada, qualificando leads com precisão cirúrgica e indicando produtos e serviços que se alinham perfeitamente ao perfil de cada cliente. E quando necessário encaminha o lead para o atendimento humano.",
      category: "IA",
      icon: BarChart3,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "Integração Multi-Canais",
      date: "Fase 3",
      content: "Integre agendas, CRM, sistemas de multi-atendimento. Gerencie as conversas com seus leads em um só lugar, mesmo vindo canais diferentes como: whatsapp, instagram, facebook, site, e-mail, entre outros.",
      category: "Integração",
      icon: Settings,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "Atendimento Humanizado",
      date: "Fase 4",
      content: "Seu cliente vai se sentir acolhido e bem atendido, assim como se estivesse falando diretamente com você.",
      category: "Humanização",
      icon: Heart,
      relatedIds: [3, 5],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "Agendamento Automatizado",
      date: "Fase 5",
      content: "O sistema marca a data e o horário automaticamente, conforme a sua agenda disponível. Capacidade de gerenciar múltiplas agendas simultaneamente.",
      category: "Automação",
      icon: Calendar,
      relatedIds: [4, 6],
      status: "in-progress" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Multi-atendimento Simultâneo",
      date: "Fase 6",
      content: "Diferente de uma recepcionista que atende um cliente por vez, o nosso agente atende vários clientes ao mesmo tempo. Isso significa que nenhum cliente vai ficar esperando e você nunca mais vai perder vendas por demora no atendimento.",
      category: "Eficiência",
      icon: Users,
      relatedIds: [5, 7],
      status: "in-progress" as const,
      energy: 75,
    },
    {
      id: 7,
      title: "Versatilidade Total",
      date: "Fase 7",
      content: "Atendimento, suporte ou operacional - configure conforme sua necessidade.",
      category: "Personalização",
      icon: Wrench,
      relatedIds: [6, 8],
      status: "pending" as const,
      energy: 70,
    },
    {
      id: 8,
      title: "Clone Pessoal",
      date: "Fase 8",
      content: "Aqui é onde acontece a mágica. Eu vou criar uma versão de 'você' para atender seus clientes. Ele vê, sente e percebe como se estivesse falando com você diretamente. O cliente vai sair encantado e com a certeza de que foi ouvido por uma pessoa real. Isso cria mais proximidade e aumenta as chances de conversão.",
      category: "IA Avançada",
      icon: User,
      relatedIds: [7, 9],
      status: "pending" as const,
      energy: 65,
    },
    {
      id: 9,
      title: "Automação de Documentos",
      date: "Fase 9",
      content: "Geração automática de contratos, propostas e relatórios em PDF.",
      category: "Documentação",
      icon: FileText,
      relatedIds: [8, 10],
      status: "pending" as const,
      energy: 60,
    },
    {
      id: 10,
      title: "Análise de Dados",
      date: "Fase 10",
      content: "Análise e cruzamento de dados de múltiplas planilhas em segundos. Agilizamos processos burocráticos com verificação inteligente de documentos, aumentando produtividade e reduzindo erros.",
      category: "Analytics",
      icon: BarChart3,
      relatedIds: [9],
      status: "pending" as const,
      energy: 55,
    },
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center">
          <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
            Soluções de <span className="text-red-500 glow-red font-extralight">IA Sob Medida</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Transformamos seus desafios em oportunidades com tecnologias de IA de ponta, 
            entregando resultados mensuráveis e ROI comprovado.
          </p>
        </div>
      </div>
      
      <RadialOrbitalTimeline timelineData={timelineData} />
      
      <div className="container mx-auto px-6 mt-16">
        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            ✨ <span className="text-red-400 font-medium">Explore nossa timeline interativa</span> clicando nos pontos ao redor do centro para descobrir cada fase da nossa solução de IA
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
