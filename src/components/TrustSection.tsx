
import { Shield, Scale, TrendingUp } from "lucide-react";

const TrustSection = () => {
  const trustBlocks = [
    {
      icon: Shield,
      title: "Segurança de Dados",
      description: "Criptografia de ponta a ponta, conformidade LGPD/GDPR e infraestrutura com certificação SOC 2. Seus dados estão protegidos com os mais altos padrões de segurança.",
      features: ["Criptografia AES-256", "Compliance LGPD", "Certificação SOC 2", "Backup automático"]
    },
    {
      icon: Scale,
      title: "IA Ética",
      description: "Desenvolvimento responsável com transparência algorítmica, mitigação de vieses e supervisão humana contínua para decisões justas e explicáveis.",
      features: ["Algoritmos transparentes", "Auditoria de vieses", "Supervisão humana", "Decisões explicáveis"]
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Arquitetura cloud-native que cresce com seu negócio. Processamento de milhões de dados sem perda de performance e atualizações automáticas.",
      features: ["Cloud-native", "Auto-scaling", "99.9% uptime", "Atualizações contínuas"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-thin text-white mb-6">
            Confiança e <span className="text-red-500 glow-red">Transparência</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Princípios fundamentais que guiam todas as nossas soluções de IA
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {trustBlocks.map((block, index) => (
            <div 
              key={index}
              className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-red-500/30 transition-all duration-300 text-center group"
            >
              <div className="bg-gray-800/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                <block.icon className="w-10 h-10 text-red-500" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{block.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 font-light">{block.description}</p>
              
              <div className="space-y-3">
                {block.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-gray-800/30 rounded-xl p-3 border border-gray-700">
                    <span className="text-gray-300 font-medium">{feature}</span>
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
