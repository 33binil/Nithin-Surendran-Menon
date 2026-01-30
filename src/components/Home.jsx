import React from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  const { ref: homeRef, isVisible } = useScrollAnimation(0.1);
  return (
    <div className="relative h-screen md:h-[800px] m-0 p-0 overflow-hidden" id="home" ref={homeRef}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: 'url("/esg1.avif")'
        }}
      />
      
      {/* Fade Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 animate-fade-in-delayed" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-64 md:h-64 rounded-full mb-4 md:mb-6 border-4 border-white shadow-lg overflow-hidden animate-slide-down-scale">
          <img 
            src="/nithin.png" 
            alt="Nithin Surendran Menon" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name */}
        <h1 
          className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-8 text-center zalando-font animate-slide-up"
        >
          Nithin Surendran Menon
        </h1>
        
        {/* Professional Title */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-3 md:mb-4 text-center max-w-4xl zalando-font animate-slide-up-delayed">
          Sustainability & ESG Consultant | Circular Economy Specialist
        </h2>
        
        {/* Core Credentials */}
        <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 text-center max-w-2xl md:max-w-3xl animate-slide-up-more-delayed">
          M.Sc. Sustainability Management (RWTH Aachen) | B.Eng. Mechanical & Production
        </p>
        
        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 w-full max-w-md sm:max-w-none animate-fade-in-up">
          <a href="https://www.linkedin.com/in/nithin-surendran-menon/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3 hover:bg-white/20 transition-all w-full sm:w-auto justify-center hover:scale-105 transform">
            <FaLinkedin className="text-lg md:text-2xl text-blue-400" />
            <span className="text-white font-medium text-sm md:text-base">LinkedIn</span>
          </a>
          
          <a href="mailto:nithinsmenon1994@gmail.com" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3 hover:bg-white/20 transition-all w-full sm:w-auto justify-center hover:scale-105 transform">
            <FaEnvelope className="text-lg md:text-2xl text-red-400" />
            <span className="text-white font-medium text-sm md:text-base">Email</span>
          </a>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center hover:bg-white/20 transition-all hover:scale-105 transform">
            <FaMapMarkerAlt className="text-lg md:text-2xl text-green-400" />
            <span className="text-white font-medium text-sm md:text-base">Kaiserplatz 7, 52062, Aachen, Germany</span>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down-scale {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1.5s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-down-scale {
          animation: slide-down-scale 1.2s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-slide-up-delayed {
          animation: slide-up 1s ease-out 1s forwards;
          opacity: 0;
        }

        .animate-slide-up-more-delayed {
          animation: slide-up 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 1.4s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;