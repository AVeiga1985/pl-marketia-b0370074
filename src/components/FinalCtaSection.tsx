
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240?text=Olá! Gostaria de agendar uma consultoria gratuita sobre as soluções de IA da MarketIA.", "_blank");
  };

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-3xl p-16 border border-red-500/30 hover:border-red-500/50 transition-all duration-700 group">
            <h2 className="text-5xl lg:text-7xl font-thin text-white mb-8 tracking-tight">
              Transforme Seu Negócio
              <span className="block text-red-500 glow-red font-extralight">em 90 Dias</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Junte-se a mais de 500 empresas que já alcançaram resultados extraordinários com nossas soluções de IA. 
              <strong className="text-white"> ROI médio de 250% garantido.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-light">Consultoria gratuita</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="font-light">Implementação em 90 dias</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span className="font-light">Resultados garantidos</span>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-16 py-8 text-xl font-light rounded-3xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-red-500/40 flex items-center gap-6 mx-auto border border-red-400/20 group-hover:animate-pulse"
            >
              <MessageCircle className="w-8 h-8" />
              Agendar Consultoria Gratuita
              <ArrowRight className="w-7 h-7" />
            </Button>
            
            <p className="text-gray-500 text-sm mt-8 font-light">
              Resposta em menos de 2 horas • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
