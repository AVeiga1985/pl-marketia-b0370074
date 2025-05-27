
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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Problemas Que <span className="text-red-600">Custam Caro</span> Para Seu Negócio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empresas que não adotam IA perdem competitividade e oportunidades diariamente. 
            Reconhece algum destes desafios na sua operação?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 group hover:transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors duration-300">
                  <challenge.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{challenge.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{challenge.description}</p>
                  <div className="bg-red-50 px-3 py-2 rounded-lg">
                    <span className="text-red-700 font-semibold text-sm">{challenge.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">⚠️ Quanto Isso Está Custando?</h3>
            <p className="text-lg">
              Cada dia sem IA representa milhares em oportunidades perdidas. 
              <strong> Não deixe seus concorrentes saírem na frente!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
