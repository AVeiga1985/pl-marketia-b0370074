
import { Shield, Scale, TrendingUp } from "lucide-react";

const TrustSection = () => {
  const trustBlocks = [
    {
      icon: Shield,
      title: "Segurança de Dados Robusta",
      description: "Utilizamos as mais recentes tecnologias de encriptação e medidas de segurança para proteger suas informações.",
      features: ["Criptografia AES-256", "Compliance LGPD", "Certificação SOC 2", "Backup automático"]
    },
    {
      icon: Scale,
      title: "IA Ética e Responsável",
      description: "Nosso compromisso é com a justiça, transparência e responsabilidade em todas as nossas soluções de IA.",
      features: ["Algoritmos transparentes", "Auditoria de vieses", "Supervisão humana", "Decisões explicáveis"]
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade e Futuro Garantido",
      description: "Nossas soluções são projetadas para crescer com seu negócio e se adaptar às futuras demandas do mercado.",
      features: ["Cloud-native", "Auto-scaling", "99.9% uptime", "Atualizações contínuas"]
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
            Confiança e <span className="text-purple-500 glow-purple font-extralight">Transparência</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            Princípios fundamentais que guiam todas as nossas soluções de IA
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {trustBlocks.map((block, index) => (
            <div 
              key={index}
              className="bg-gray-900/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-700 text-center group hover:transform hover:-translate-y-6 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-800/30 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-500/20 transition-all duration-500 border border-gray-700 group-hover:border-purple-500/50 group-hover:scale-110">
                <block.icon className="w-12 h-12 text-purple-500 group-hover:animate-pulse" />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-6">{block.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-10 font-light text-lg">{block.description}</p>
              
              <div className="space-y-4">
                {block.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-gray-800/20 rounded-2xl p-4 border border-gray-700 hover:border-purple-500/30 transition-colors duration-300">
                    <span className="text-gray-300 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
