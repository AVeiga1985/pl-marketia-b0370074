
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
      color: "from-blue-500 to-cyan-500"
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
      color: "from-green-500 to-emerald-500"
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
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      name: "Chatbots e Atendimento IA",
      painSolved: "Experiência do cliente fragmentada",
      technologies: ["GPT-4", "Conversational AI", "Sentiment Analysis"],
      benefits: [
        "24/7 atendimento automatizado",
        "90% satisfação do cliente",
        "70% redução em tickets de suporte",
        "Resposta em menos de 5 segundos"
      ],
      highlight: "90% satisfação",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      name: "Marketing Personalizado com IA",
      painSolved: "Marketing sem precisão",
      technologies: ["Recommendation Engine", "Behavioral Analytics", "A/B Testing IA"],
      benefits: [
        "85% aumento na segmentação",
        "3x mais conversões",
        "Personalização em escala",
        "ROI de campanhas 250% maior"
      ],
      highlight: "3x mais conversões",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      name: "Análise Competitiva Inteligente",
      painSolved: "Competitividade em risco",
      technologies: ["Web Scraping IA", "Market Intelligence", "Competitive Analysis"],
      benefits: [
        "Monitoramento 24/7 dos concorrentes",
        "Alertas de oportunidades em tempo real",
        "Análise de preços dinâmica",
        "Vantagem competitiva sustentável"
      ],
      highlight: "Vantagem competitiva",
      color: "from-teal-500 to-green-500"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções de IA da MarketIA.", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Soluções de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IA Sob Medida</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transformamos seus desafios em oportunidades com tecnologias de IA de ponta, 
            entregando resultados mensuráveis e ROI comprovado.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`bg-gradient-to-r ${solution.color} p-3 rounded-xl`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{solution.name}</h3>
                  <div className="bg-red-500/20 px-3 py-1 rounded-lg border border-red-500/30">
                    <span className="text-red-300 text-sm font-medium">Resolve: {solution.painSolved}</span>
                  </div>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-blue-300 font-semibold mb-3">Tecnologias Aplicadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-green-300 font-semibold mb-3">Benefícios Quantificáveis:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Highlight */}
              <div className={`bg-gradient-to-r ${solution.color} p-4 rounded-xl mb-6`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{solution.highlight}</div>
                  <div className="text-white/80 text-sm">Resultado Garantido</div>
                </div>
              </div>
              
              {/* CTA */}
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Implementar Agora
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              🚀 Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Agende uma consultoria gratuita e descubra como a IA pode 
              gerar resultados extraordinários para sua empresa em apenas 90 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                <MessageSquare className="w-6 h-6" />
                Consultoria Gratuita via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
