
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
const Hero = () => {
  const isMobile = useIsMobile();
  return <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-green-800 to-green-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580894896813-652ff5aa8146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src="/lovable-uploads/43258b19-11fb-4d9c-8410-b6a90bb8ea8c.png"
            alt="Andaimes Panorama Logo"
            className="h-24 mx-auto mb-6 animate-fade-in"
          />
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
          animationDelay: '0.1s'
        }}>
            Soluções em andaimes e equipamentos para sua obra
          </h1>
          
          <p className="text-lg text-green-100 mb-10 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Desde 1992 atendendo com qualidade e eficiência o mercado da construção civil
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <a href="https://wa.me/5571997306777" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2">
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="bg-white hover:bg-gray-50 text-green-800 border border-green-600/20 px-6 py-3 rounded-md transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-600/50 shadow-sm">
              Nossos serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>;
};
export default Hero;
