
import { AlertTriangle, Clock, TrendingDown, Database, Users, Target } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: Clock,
      title: "Processos Manuais Demorados",
      description: "Sua equipe perde horas em tarefas repetitivas que poderiam ser automatizadas, reduzindo a produtividade e aumentando custos operacionais.",
      impact: "Até 40h/semana perdidas"
    },
    {
      icon: Database,
      title: "Dados Subutilizados",
      description: "Informações valiosas ficam dispersas em planilhas e sistemas isolados, impedindo insights estratégicos que poderiam acelerar o crescimento.",
      impact: "70% dos dados não utilizados"
    },
    {
      icon: TrendingDown,
      title: "Decisões Baseadas em Intuição",
      description: "Falta de análise preditiva e inteligência de mercado resulta em oportunidades perdidas e estratégias menos eficazes.",
      impact: "30% menos precisão"
    },
    {
      icon: Users,
      title: "Experiência do Cliente Fragmentada",
      description: "Sem personalização inteligente, seus clientes recebem comunicações genéricas que não convertem e reduzem o engajamento.",
      impact: "50% menor conversão"
    },
    {
      icon: Target,
      title: "Marketing Sem Precisão",
      description: "Campanhas disparadas sem segmentação inteligente desperdiçam orçamento e falham em atingir o público ideal no momento certo.",
      impact: "60% do budget desperdiçado"
    },
    {
      icon: AlertTriangle,
      title: "Competitividade em Risco",
      description: "Enquanto concorrentes adotam IA, sua empresa fica para trás em inovação, perdendo market share e relevância no mercado.",
      impact: "Perda de 25% do mercado"
    }
  ];

  return (
    <section className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
            Problemas Que <span className="text-red-500 glow-red font-extralight">Custam Caro</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Empresas que não adotam IA perdem competitividade e oportunidades diariamente. 
            Reconhece algum destes desafios na sua operação?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-red-500/50 transition-all duration-500 group hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gray-900/50 p-4 rounded-2xl group-hover:bg-red-500/20 transition-all duration-500 border border-gray-700 group-hover:border-red-500/50">
                  <challenge.icon className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-red-100 transition-colors duration-300">{challenge.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed font-light">{challenge.description}</p>
                  <div className="bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/30">
                    <span className="text-red-400 font-medium text-sm">{challenge.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-500/30 text-white p-8 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-light mb-4">⚠️ Quanto Isso Está Custando?</h3>
            <p className="text-lg font-light text-gray-300">
              Cada dia sem IA representa milhares em oportunidades perdidas. 
              <strong className="text-red-400"> Não deixe seus concorrentes saírem na frente!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
