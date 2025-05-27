
import { MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240?text=Olá! Gostaria de saber mais sobre as soluções de IA da MarketIA.", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/20"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-red-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-60 right-40 w-6 h-6 border border-red-500/40 rotate-45 animate-spin"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-red-500/50 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Header with Logo */}
        <div className="absolute top-8 left-6 z-10">
          <div className="text-3xl font-light text-white tracking-wider">
            Market<span className="text-red-500 glow-red font-thin">.</span>IA
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0 mt-20">
          <div className="animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-thin mb-6 leading-[0.9] tracking-tight">
              <span className="block opacity-90">Transforme</span>
              <span className="block text-red-500 glow-red font-extralight animate-pulse"> Dados </span>
              <span className="block opacity-90">em Resultados</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-gray-300 leading-relaxed font-extralight max-w-2xl opacity-80">
              Soluções de IA personalizadas que entregam ROI comprovado em 90 dias. 
              Automatize processos e acelere o crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-6 text-lg font-light rounded-2xl transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-red-500/30 flex items-center gap-4 border border-red-400/20 backdrop-blur-sm group"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                Conversar no WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-700 bg-black/30 backdrop-blur-md text-white hover:bg-gray-900/50 px-10 py-6 text-lg font-light rounded-2xl transition-all duration-500 flex items-center gap-4 hover:border-red-500/50"
              >
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 border border-red-500/20 group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Dashboard de IA da MarketIA" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-red-500/20 group-hover:from-black/70 transition-all duration-500"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-3xl group-hover:border-red-500/60 transition-all duration-500"></div>
          </div>
          
          {/* Floating Stats with enhanced animations */}
          <div className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-xl rounded-3xl p-8 text-white border border-red-500/30 animate-float">
            <div className="text-4xl font-thin text-red-500 glow-red">+250%</div>
            <div className="text-sm text-gray-400 font-light">ROI Médio</div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-xl rounded-3xl p-8 text-white border border-red-500/30 animate-float" style={{animationDelay: '1s'}}>
            <div className="text-4xl font-thin text-red-500 glow-red">90 dias</div>
            <div className="text-sm text-gray-400 font-light">Para Resultados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
