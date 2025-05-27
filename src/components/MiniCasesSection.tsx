
import { Building2, ShoppingCart, Factory, TrendingUp } from "lucide-react";

const MiniCasesSection = () => {
  const cases = [
    {
      icon: Building2,
      company: "TechCorp",
      segment: "Tecnologia B2B",
      challenge: "Processo de qualificação de leads completamente manual, resultando em 60% dos leads sendo descartados sem análise adequada e vendedores gastando 4h/dia em tarefas administrativas.",
      solution: "Implementamos IA de scoring preditivo com processamento de linguagem natural para análise automática de perfil, comportamento e intenção de compra em tempo real.",
      results: [
        "+87% leads qualificados",
        "70% redução no tempo de qualificação",
        "+45% conversão vendas"
      ],
      highlight: "+87%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingCart,
      company: "RetailMax",
      segment: "E-commerce",
      challenge: "Taxa de abandono de carrinho de 73% e personalização limitada resultando em baixa conversão e experiência genérica para diferentes segmentos de clientes.",
      solution: "Desenvolvemos sistema de recomendação inteligente com análise comportamental em tempo real e automação de recuperação de carrinho personalizada.",
      results: [
        "+62% conversão do carrinho",
        "35% aumento no ticket médio",
        "+128% engagement personalizado"
      ],
      highlight: "+62%",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Factory,
      company: "IndustryPro",
      segment: "Manufatura",
      challenge: "Manutenção reativa custando R$ 2.3M/ano em paradas não programadas e dificuldade para prever falhas em equipamentos críticos da linha de produção.",
      solution: "Implantamos IA preditiva com sensores IoT e machine learning para monitoramento contínuo e predição de falhas com 95% de precisão.",
      results: [
        "89% redução paradas não programadas",
        "R$ 1.8M economia anual",
        "+40% eficiência operacional"
      ],
      highlight: "R$ 1.8M",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      company: "FinanceNext",
      segment: "Serviços Financeiros",
      challenge: "Análise de risco de crédito manual demorava 5 dias, resultando em perda de clientes para concorrentes mais ágeis e decisões imprecisas.",
      solution: "Criamos modelo de IA para análise de risco em tempo real, processando 200+ variáveis e histórico comportamental para decisões instantâneas.",
      results: [
        "Análise de 5 dias para 30 segundos",
        "+23% precisão na análise de risco",
        "92% satisfação do cliente"
      ],
      highlight: "30 seg",
      color: "from-orange-500 to-red-500"
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
        
        <div className="grid lg:grid-cols-2 gap-8">
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
                <h4 className="text-blue-400 font-medium mb-3 text-lg">Solução Aplicada:</h4>
                <p className="text-gray-300 leading-relaxed font-light">{case_.solution}</p>
              </div>
              
              {/* Results */}
              <div className="mb-6">
                <h4 className="text-green-400 font-medium mb-4 text-lg">Resultados:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {case_.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                      <span className="text-white font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Highlight */}
              <div className={`bg-gradient-to-r ${case_.color} p-6 rounded-2xl text-center`}>
                <div className="text-3xl font-bold text-white mb-2">{case_.highlight}</div>
                <div className="text-white/80 font-light">Resultado Principal</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCasesSection;
