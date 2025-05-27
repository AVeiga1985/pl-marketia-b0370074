
import { MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240?text=Olá! Gostaria de saber mais sobre as soluções de IA da MarketIA.", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/10"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Header with Logo */}
        <div className="absolute top-8 left-6">
          <div className="text-3xl font-bold text-white">
            Market<span className="text-red-500 glow-red">.</span>IA
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0 mt-20">
          <div className="animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-thin mb-6 leading-tight tracking-tight">
              Transforme
              <span className="block text-red-500 glow-red font-light"> Dados </span>
              em Resultados
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed font-light max-w-2xl">
              Soluções de IA personalizadas que entregam ROI comprovado em 90 dias. 
              Automatize processos e acelere o crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center gap-3 border border-red-400/20"
              >
                <MessageCircle className="w-6 h-6" />
                Conversar no WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-600 bg-gray-900/50 backdrop-blur-sm text-white hover:bg-gray-800/50 px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border border-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Dashboard de IA da MarketIA" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-red-500/10"></div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -top-8 -right-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 text-white border border-red-500/20">
            <div className="text-3xl font-bold text-red-500">+250%</div>
            <div className="text-sm text-gray-300">ROI Médio</div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 text-white border border-red-500/20">
            <div className="text-3xl font-bold text-red-500">90 dias</div>
            <div className="text-sm text-gray-300">Para Resultados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
