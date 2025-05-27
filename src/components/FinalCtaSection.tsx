
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240?text=Olá! Gostaria de agendar uma consultoria gratuita sobre as soluções de IA da MarketIA.", "_blank");
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-3xl p-12 border border-red-500/20">
            <h2 className="text-5xl lg:text-6xl font-thin text-white mb-6">
              Transforme Seu Negócio
              <span className="block text-red-500 glow-red font-light">em 90 Dias</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
              Junte-se a mais de 500 empresas que já alcançaram resultados extraordinários com nossas soluções de IA. 
              <strong className="text-white"> ROI médio de 250% garantido.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Consultoria gratuita</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Implementação em 90 dias</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Resultados garantidos</span>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center gap-4 mx-auto"
            >
              <MessageCircle className="w-7 h-7" />
              Agendar Consultoria Gratuita
              <ArrowRight className="w-6 h-6" />
            </Button>
            
            <p className="text-gray-500 text-sm mt-6 font-light">
              Resposta em menos de 2 horas • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
