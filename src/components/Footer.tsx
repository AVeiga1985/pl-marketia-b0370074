
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240", "_blank");
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">
              Market<span className="text-red-500 glow-red">.</span>IA
            </div>
            <p className="text-gray-400 mb-6 font-light leading-relaxed max-w-md">
              Transformamos negócios com soluções de Inteligência Artificial personalizadas, 
              entregando ROI comprovado e resultados mensuráveis.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 p-3 rounded-xl transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          
          {/* Contatos */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contatos</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+55 21 98350-5240</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-500" />
                <span>contato@marketia.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>
          
          {/* Links Legais */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light">
                Política de Privacidade
              </a>
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light">
                Termos de Uso
              </a>
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light">
                LGPD
              </a>
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light">
                Cookies
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-light">
              © 2024 MarketIA. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm font-light mt-4 md:mt-0">
              Desenvolvido com IA e inovação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
