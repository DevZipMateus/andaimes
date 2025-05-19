
import React from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
            
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
          
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma mensagem</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                    placeholder="Seu e-mail"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" 
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2"
              >
                <span>Enviar Mensagem</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
