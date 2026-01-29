import React from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative h-screen md:h-[800px] m-0 p-0 overflow-hidden" id="home">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/esg1.avif")'
        }}
      />
      
      {/* Fade Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-64 md:h-64 rounded-full mb-4 md:mb-6 border-4 border-white shadow-lg overflow-hidden">
          <img 
            src="/nithin.png" 
            alt="Nithin Surendran Menon" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name */}
        <h1 
          className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-8 text-center zalando-font"
        >
          Nithin Surendran Menon
        </h1>
        
        {/* Professional Title */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-3 md:mb-4 text-center max-w-4xl zalando-font">
          Sustainability & ESG Consultant | Circular Economy Specialist
        </h2>
        
        {/* Core Credentials */}
        <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 text-center max-w-2xl md:max-w-3xl">
          M.Sc. Sustainability Management (RWTH Aachen) | B.Eng. Mechanical Engineering
        </p>
        
        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 w-full max-w-md sm:max-w-none">
          <a href="https://www.linkedin.com/in/nithin-surendran-menon/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3 hover:bg-white/20 transition-all w-full sm:w-auto justify-center">
            <FaLinkedin className="text-lg md:text-2xl text-blue-400" />
            <span className="text-white font-medium text-sm md:text-base">LinkedIn</span>
          </a>
          
          <a href="mailto:nithinsmenon1994@gmail.com" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3 hover:bg-white/20 transition-all w-full sm:w-auto justify-center">
            <FaEnvelope className="text-lg md:text-2xl text-red-400" />
            <span className="text-white font-medium text-sm md:text-base">Email</span>
          </a>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center">
            <FaMapMarkerAlt className="text-lg md:text-2xl text-green-400" />
            <span className="text-white font-medium text-sm md:text-base">Kaiserplatz 7, 52062, Aachen, Germany</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;