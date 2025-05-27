
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
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
            Casos de <span className="text-red-500 glow-red font-extralight">Sucesso</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Resultados reais de empresas que transformaram seus negócios com nossas soluções de IA
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-3xl p-10 border border-gray-800 hover:border-red-500/50 transition-all duration-700 group hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Header */}
              <div className="flex items-start gap-8 mb-10">
                <div className={`bg-gradient-to-r ${case_.color} p-5 rounded-3xl group-hover:scale-110 transition-transform duration-500`}>
                  <case_.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-3">{case_.company}</h3>
                  <span className="text-gray-400 font-light text-lg">{case_.segment}</span>
                </div>
              </div>
              
              {/* Challenge */}
              <div className="mb-8">
                <h4 className="text-red-400 font-light mb-4 text-xl">Desafio:</h4>
                <p className="text-gray-300 leading-relaxed font-light text-lg">{case_.challenge}</p>
              </div>
              
              {/* Solution */}
              <div className="mb-10">
                <h4 className="text-blue-400 font-light mb-4 text-xl">Solução MarketIA:</h4>
                <p className="text-gray-300 leading-relaxed font-light text-lg">{case_.solution}</p>
              </div>
              
              {/* Results */}
              <div className="mb-10">
                <h4 className="text-green-400 font-light mb-6 text-xl">Resultados:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {case_.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-gray-800/30 rounded-2xl p-5 border border-gray-700 hover:border-red-500/30 transition-colors duration-300">
                      <span className="text-white font-light text-lg">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial */}
              {case_.testimonial && (
                <div className="mb-8">
                  <div className="bg-gray-800/20 rounded-2xl p-8 border border-gray-700">
                    <p className="text-gray-300 italic leading-relaxed mb-6 text-lg font-light">"{case_.testimonial}"</p>
                    <p className="text-gray-400 font-light">— {case_.author}</p>
                  </div>
                </div>
              )}
              
              {/* Highlight */}
              <div className={`bg-gradient-to-r ${case_.color} p-8 rounded-3xl text-center group-hover:shadow-lg transition-all duration-500`}>
                <div className="text-4xl font-thin text-white mb-3">{case_.highlight}</div>
                <div className="text-white/80 font-light text-lg">Redução no Tempo de Espera</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCasesSection;
