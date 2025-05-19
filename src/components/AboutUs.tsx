import React from 'react';
import { CheckCircle } from 'lucide-react';
const AboutUs = () => {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column - Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img alt="Andaimes em construção" className="rounded-md w-full object-cover" style={{
                maxHeight: '500px'
              }} src="https://lomaq.com.br/wp-content/uploads/2023/04/Diferencas-entre-andaimes-e-plataformas-1000x600.jpg" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-700 text-white py-2 px-4 rounded-lg shadow-md">
                <span className="font-bold">Desde 1992</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            <div className="inline-block bg-green-800/10 text-green-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
              Nossa História
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mais de 30 anos de experiência no mercado de andaimes
            </h2>
            
            <p className="text-gray-600 mb-6">
              A Andaimes Panorama foi fundada em 1992 durante uma vivência na área da construção civil,
              quando Carlos Magno percebeu que seria uma oportunidade de empreender nessa área com a 
              qual se identificou muito.
            </p>
            
            <p className="text-gray-600 mb-8">
              Desde então, nos dedicamos a fornecer soluções de qualidade em andaimes e equipamentos para 
              construção, sempre priorizando a segurança e satisfação dos nossos clientes.
            </p>
            
            {/* Key Features List */}
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-700 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Equipamentos de qualidade e em excelente estado de conservação</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-700 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Entrega e retirada dos equipamentos no local da obra</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-700 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Atendimento personalizado para cada tipo de necessidade</p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-700 mt-1 mr-3 flex-shrink-0" size={20} />
                <p>Compromisso com a segurança e qualidade das estruturas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;