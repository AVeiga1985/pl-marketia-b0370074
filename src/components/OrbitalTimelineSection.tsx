
import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Análise",
    date: "Fase 1",
    content: "Análise detalhada dos processos atuais e identificação de oportunidades de automação com IA.",
    category: "Análise",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design IA",
    date: "Fase 2",
    content: "Arquitetura de soluções inteligentes personalizadas para suas necessidades específicas.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Implementação",
    date: "Fase 3",
    content: "Desenvolvimento e integração das soluções de IA aos seus sistemas existentes.",
    category: "Desenvolvimento",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Validação",
    date: "Fase 4",
    content: "Testes rigorosos e validação da performance das soluções implementadas.",
    category: "Testes",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 50,
  },
  {
    id: 5,
    title: "Otimização",
    date: "Fase 5",
    content: "Monitoramento contínuo e otimização baseada em dados reais de performance.",
    category: "Otimização",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 30,
  },
];

const OrbitalTimelineSection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center">
          <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
            Nossa <span className="text-purple-500 glow-purple font-extralight">Metodologia</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Um processo estruturado e interativo para transformar sua empresa com IA
          </p>
        </div>
      </div>
      
      <div className="h-screen relative">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
      
      <div className="container mx-auto px-6 mt-20">
        <div className="text-center">
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Clique nos pontos orbitais para explorar cada fase do nosso processo de implementação de IA
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrbitalTimelineSection;
