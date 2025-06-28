
import { Scissors } from "lucide-react";
import ExpandableSuccessCases from "@/components/ui/expandable-success-cases";

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
        
        <ExpandableSuccessCases cases={cases} />
      </div>
    </section>
  );
};

export default MiniCasesSection;
