
import { Scissors } from "lucide-react";

const MiniCasesSection = () => {
  const cases = [
    {
      icon: Scissors,
      company: "Studio de Beleza",
      segment: "Serviços de Estética",
      challenge: "Atendente não dava conta de atender vários clientes que chegavam ao mesmo tempo por vários canais de redes sociais como WhatsApp e Instagram. O que ocasionava demora no atendimento dos leads. Além de ter que fazer os agendamentos manualmente. E os clientes que chegavam após o expediente tinham que esperar até o outro dia para serem atendidos.",
      solution: "Nos proporcionou atendimento imediato, qualificação eficiente, disponibilidade 24/7 e otimização de agendamentos. Tudo isso sem aumentar despesas fixas.",
      results: [
        "95% redução no tempo de espera",
        "75% aumento na qualificação de leads",
        "100% mais leads fora do horário comercial",
        "Economia de várias horas manuais/semana"
      ],
      testimonial: "Desde que a MarketIA implementou o agente de IA, nosso atendimento se transformou! Conseguimos atender a todos os clientes rapidamente, em qualquer horário, e os agendamentos são feitos de forma automática. Nossos leads estão mais satisfeitos e nossa equipe mais produtiva.",
      author: "Rosana Ribeiro, dona, Studio Rosana Ribeiro",
      highlight: "95%",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-thin text-white mb-6">
            Casos de <span className="text-red-500 glow-red">Sucesso</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Resultados reais de empresas que transformaram seus negócios com nossas soluções de IA
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-red-500/30 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className={`bg-gradient-to-r ${case_.color} p-4 rounded-2xl`}>
                  <case_.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{case_.company}</h3>
                  <span className="text-gray-400 font-light">{case_.segment}</span>
                </div>
              </div>
              
              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-red-400 font-medium mb-3 text-lg">Desafio:</h4>
                <p className="text-gray-300 leading-relaxed font-light">{case_.challenge}</p>
              </div>
              
              {/* Solution */}
              <div className="mb-8">
                <h4 className="text-blue-400 font-medium mb-3 text-lg">Solução MarketIA:</h4>
                <p className="text-gray-300 leading-relaxed font-light">{case_.solution}</p>
              </div>
              
              {/* Results */}
              <div className="mb-8">
                <h4 className="text-green-400 font-medium mb-4 text-lg">Resultados:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {case_.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <span className="text-white font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial */}
              {case_.testimonial && (
                <div className="mb-6">
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-300 italic leading-relaxed mb-4">"{case_.testimonial}"</p>
                    <p className="text-gray-400 text-sm font-medium">— {case_.author}</p>
                  </div>
                </div>
              )}
              
              {/* Highlight */}
              <div className={`bg-gradient-to-r ${case_.color} p-6 rounded-2xl text-center`}>
                <div className="text-3xl font-bold text-white mb-2">{case_.highlight}</div>
                <div className="text-white/80 font-light">Redução no Tempo de Espera</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCasesSection;
