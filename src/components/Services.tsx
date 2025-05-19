
import React from 'react';
import { Building2, Construction, Tool, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Andaimes e Escoras',
    description: 'Locação de andaimes, escoras metálicas, pisos metálicos e travas diagonais para sua obra.',
    icon: Building2,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Equipamentos de Madeira',
    description: 'Pranchões de madeira e barrotes para diversas aplicações na construção civil.',
    icon: Construction,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Máquinas e Equipamentos',
    description: 'Betoneiras, marteletes, placas vibratórias, geradores e outros equipamentos para sua obra.',
    icon: Tool,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Acessórios',
    description: 'Roldanas, sapatas reguláveis e outros acessórios para montagem e segurança dos seus andaimes.',
    icon: Construction,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-800/10 text-green-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para sua construção
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados de locação de andaimes e equipamentos para atender às necessidades específicas da sua obra.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-green-800/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-green-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
