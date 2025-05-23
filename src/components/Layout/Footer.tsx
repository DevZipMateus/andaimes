
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(71) 99730-6777</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>carlosmagnops@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Rua Ramo Um do Canal, nº 522 Gleba A, CEP 42803-794</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-500 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-500 transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Company Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Andaimes Panorama</h3>
            <p className="mb-4 text-gray-300">
              Desde 1992, oferecendo soluções em andaimes e equipamentos para construção civil com qualidade e compromisso.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white/10 hover:bg-green-500/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-green-500/80 hover:text-black transition-colors duration-300 p-2 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Andaimes Panorama Ltda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
