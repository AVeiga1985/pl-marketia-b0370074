
import { Brain, Zap, BarChart3 } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const SolutionsSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240?text=Olá! Gostaria de saber mais sobre as soluções de IA da MarketIA.", "_blank");
  };

  const solutionsTimelineData = [
    {
      id: 1,
      title: "IA Predictiva",
      date: "Solução 1",
      content: "IA Predictiva para Vendas com 95% de precisão nas previsões, 40% aumento na taxa de conversão e ROI de 300% em 6 meses. Resolve: Decisões baseadas em intuição. Tecnologias: Machine Learning, Análise Preditiva, Big Data Analytics.",
      category: "Vendas",
      icon: Brain,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Automação Inteligente",
      date: "Solução 2", 
      content: "Automação Inteligente de Processos com 80% redução no tempo de execução, 99.9% precisão nas tarefas e economia de 200h/mês por equipe. Resolve: Processos manuais demorados. Tecnologias: RPA, Process Mining, NLP.",
      category: "Processos",
      icon: Zap,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "Business Intelligence",
      date: "Solução 3",
      content: "Business Intelligence com IA oferecendo insights em tempo real, 50% melhoria na tomada de decisões e dashboards inteligentes personalizados. Resolve: Dados subutilizados. Tecnologias: Data Mining, Deep Learning, Analytics.",
      category: "Inteligência",
      icon: BarChart3,
      relatedIds: [2],
      status: "in-progress" as const,
      energy: 85,
    }
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
      
      <div className="h-screen relative">
        <RadialOrbitalTimeline timelineData={solutionsTimelineData} />
      </div>
      
      <div className="container mx-auto px-6 mt-20">
        <div className="text-center">
          <p className="text-gray-400 max-w-2xl mx-auto font-light mb-8">
            Clique nos pontos orbitais para explorar nossas soluções de IA personalizadas
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-light py-4 px-8 rounded-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 border border-red-400/20 mx-auto"
          >
            Implementar Agora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
