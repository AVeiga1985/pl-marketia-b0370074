
import { Brain, Zap, BarChart3, MessageSquare, Target, TrendingUp, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Brain,
      name: "IA Predictiva para Vendas",
      painSolved: "Decisões baseadas em intuição",
      technologies: ["Machine Learning", "Análise Preditiva", "Big Data Analytics"],
      benefits: [
        "95% de precisão nas previsões",
        "40% aumento na taxa de conversão",
        "Redução de 60% no ciclo de vendas",
        "ROI de 300% em 6 meses"
      ],
      highlight: "300% ROI",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      name: "Automação Inteligente de Processos",
      painSolved: "Processos manuais demorados",
      technologies: ["RPA", "Process Mining", "Natural Language Processing"],
      benefits: [
        "80% redução no tempo de execução",
        "99.9% precisão nas tarefas",
        "Economia de 200h/mês por equipe",
        "Payback em 90 dias"
      ],
      highlight: "200h/mês economizadas",
      color: "from-red-400 to-red-600"
    },
    {
      icon: BarChart3,
      name: "Business Intelligence com IA",
      painSolved: "Dados subutilizados",
      technologies: ["Data Mining", "Deep Learning", "Real-time Analytics"],
      benefits: [
        "Insights em tempo real",
        "50% melhoria na tomada de decisões",
        "Dashboards inteligentes personalizados",
        "Alertas preditivos automáticos"
      ],
      highlight: "Insights em tempo real",
      color: "from-red-600 to-orange-500"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240?text=Olá! Gostaria de saber mais sobre as soluções de IA da MarketIA.", "_blank");
  };

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
            Soluções de <span className="text-red-500 glow-red font-extralight">IA Sob Medida</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Transformamos seus desafios em oportunidades com tecnologias de IA de ponta, 
            entregando resultados mensuráveis e ROI comprovado.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-red-500/50 transition-all duration-700 group hover:transform hover:-translate-y-6 hover:shadow-2xl hover:shadow-red-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className={`bg-gradient-to-r ${solution.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-white mb-3">{solution.name}</h3>
                  <div className="bg-red-500/10 px-4 py-2 rounded-xl border border-red-500/30">
                    <span className="text-red-400 text-sm font-light">Resolve: {solution.painSolved}</span>
                  </div>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-red-400 font-light mb-4 text-lg">Tecnologias Aplicadas:</h4>
                <div className="flex flex-wrap gap-3">
                  {solution.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-red-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-green-400 font-light mb-4 text-lg">Benefícios Quantificáveis:</h4>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Highlight */}
              <div className={`bg-gradient-to-r ${solution.color} p-6 rounded-2xl mb-8 group-hover:shadow-lg transition-all duration-500`}>
                <div className="text-center">
                  <div className="text-3xl font-light text-white mb-2">{solution.highlight}</div>
                  <div className="text-white/80 font-light">Resultado Garantido</div>
                </div>
              </div>
              
              {/* CTA */}
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-light py-4 rounded-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 border border-red-400/20"
              >
                Implementar Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
