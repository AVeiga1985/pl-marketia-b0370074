import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983505240", "_blank");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="text-4xl font-light text-white mb-6 tracking-wider">
              Market<span className="text-red-500 glow-red font-thin">.</span>IA
            </div>
            <p className="text-gray-400 mb-8 font-light leading-relaxed max-w-md text-lg">
              Transformamos negócios com soluções de Inteligência Artificial personalizadas, 
              entregando ROI comprovado e resultados mensuráveis.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-4 rounded-2xl transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-green-500/30"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          
          {/* Contatos */}
          <div>
            <h3 className="text-white font-light mb-8 text-xl tracking-wide">Contatos</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Phone className="w-6 h-6 text-red-500" />
                <span className="font-light">+55 21 98350-5240</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Mail className="w-6 h-6 text-red-500" />
                <span className="font-light">contato@marketia.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-red-400 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-red-500" />
                <span className="font-light">Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>
          
          {/* Links Legais */}
          <div>
            <h3 className="text-white font-light mb-8 text-xl tracking-wide">Legal</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light text-lg">
                Política de Privacidade
              </a>
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light text-lg">
                Termos de Uso
              </a>
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light text-lg">
                LGPD
              </a>
              <a href="#" className="block text-gray-400 hover:text-red-500 transition-colors duration-300 font-light text-lg">
                Cookies
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 font-light text-lg">
              © {currentYear} MarketIA. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 font-light mt-6 md:mt-0 text-lg">
              Desenvolvido por Marketi9
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
