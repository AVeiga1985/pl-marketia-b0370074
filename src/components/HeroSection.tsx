
import { MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as soluções de IA da MarketIA.", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJtIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmMDUiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Content */}
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transforme Seus
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Dados </span>
              em Resultados
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-slate-300 leading-relaxed">
              Automatize processos, otimize decisões e acelere o crescimento do seu negócio com soluções de IA personalizadas que entregam ROI comprovado em 90 dias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Conversar no WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Video */}
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Dashboard de IA da MarketIA" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white animate-bounce">
            <div className="text-2xl font-bold text-green-400">+250%</div>
            <div className="text-sm">ROI Médio</div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white animate-pulse">
            <div className="text-2xl font-bold text-blue-400">90 dias</div>
            <div className="text-sm">Para Resultados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
