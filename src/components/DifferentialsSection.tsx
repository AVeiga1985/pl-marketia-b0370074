
import { Brain, Users, Zap, Lightbulb } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Brain,
      title: "Expertise Técnica",
      description: "Time especializado com PhDs em IA e 10+ anos desenvolvendo soluções enterprise para Fortune 500."
    },
    {
      icon: Users,
      title: "Personalização Total",
      description: "Cada solução é desenvolvida sob medida para seus processos específicos, garantindo máxima eficiência."
    },
    {
      icon: Zap,
      title: "Colaboração Ágil",
      description: "Metodologia de implementação em sprints com entregas semanais e feedback contínuo da sua equipe."
    },
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description: "Atualizações mensais com novos recursos e melhorias baseadas em pesquisas de ponta em IA."
    }
  ];

  return (
    <section className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
            Nossos <span className="text-red-500 glow-red font-extralight">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            O que nos torna únicos no mercado de soluções de IA
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-900/30 w-32 h-32 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-gray-800 group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-700 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20">
                <differential.icon className="w-16 h-16 text-red-500 group-hover:animate-pulse" />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-6 group-hover:text-red-100 transition-colors duration-300">{differential.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-lg">{differential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
