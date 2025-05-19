
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-800/10 text-green-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Como podemos ajudar sua obra?
          </h2>
          <p className="text-gray-600 text-lg">
            Entre em contato conosco para solicitar um orçamento ou esclarecer qualquer dúvida sobre nossos serviços e equipamentos.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Informações de Contato</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-green-800/10 p-3 rounded-lg mr-4">
                <Phone className="text-green-800" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Telefone</h4>
                <a href="tel:+5571997306777" className="hover:text-green-700 transition-colors duration-300">
                  (71) 99730-6777
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-800/10 p-3 rounded-lg mr-4">
                <Mail className="text-green-800" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">E-mail</h4>
                <a href="mailto:carlosmagnops@hotmail.com" className="hover:text-green-700 transition-colors duration-300">
                  carlosmagnops@hotmail.com
                </a>
                <br/>
                <a href="mailto:carlosmagnoloc@gmail.com" className="hover:text-green-700 transition-colors duration-300">
                  carlosmagnoloc@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-800/10 p-3 rounded-lg mr-4">
                <MapPin className="text-green-800" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Endereço</h4>
                <p>Rua Ramo Um do Canal, nº 522 Gleba A<br/>CEP 42803-794</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-lg mb-3">Redes Sociais</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-green-800/10 text-gray-600 hover:text-green-800 p-3 rounded-full transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-green-800/10 text-gray-600 hover:text-green-800 p-3 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
