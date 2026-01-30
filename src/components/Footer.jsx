import React from 'react';
import { FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref: footerRef, isVisible } = useScrollAnimation(0.2);
  return (
    <div className="relative" id="footer" ref={footerRef}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dice2v2zo/image/upload/v1769795678/footer_kian8e.jpg")'
        }}
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Content Container */}
      <div className="relative z-10 flex-1 py-6 md:py-8 px-4">
        <div className="max-w-screen-2xl mx-auto">
          {/* Main CTA Section */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-4xl zalando-font lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to implement scalable sustainability strategies?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl md:max-w-4xl mx-auto mb-6 md:mb-8">
              Technical expertise meets regulatory compliance. Let's transform your sustainability challenges into measurable business value.
            </p>
            
            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <a
                href="/portfolio.pdf"
                download
                className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-lg text-sm md:text-base"
              >
                <FaDownload className="mr-2" />
                Download Technical Resume
              </a>
              
              <a
                href="https://www.linkedin.com/in/nithin-surendran-menon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white text-green-600 font-medium rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors shadow-lg text-sm md:text-base"
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </a>
              
              <a
                href="mailto:nithinsmenon1994@gmail.com"
                className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white text-slate-700 font-medium rounded-lg border-2 border-slate-300 hover:bg-slate-50 transition-colors shadow-lg text-sm md:text-base"
              >
                <FaEnvelope className="mr-2" />
                Email Me
              </a>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
            <div className={`bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600/20 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white">Technical First</h3>
              </div>
              <p className="text-white/80 text-sm md:text-base">
                Engineering background that speaks directly to fellow engineers and compliance officers, 
                delivering solutions that work in real-world industrial environments.
              </p>
            </div>

            <div className={`bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600/20 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white">Regulatory-Heavy</h3>
              </div>
              <p className="text-white/80 text-sm md:text-base">
                Mastery of PPWR, EUDR, ESRS, and other frameworks ensures Day 1 readiness 
                without additional training, saving time and implementation costs.
              </p>
            </div>

            <div className={`bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1300ms' }}>
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600/20 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white">Measurable Impact</h3>
              </div>
              <p className="text-white/80 text-sm md:text-base">
                Proven track record with 30% waste reduction and 6-country analysis 
                provides the closing arguments that justify investment and deliver ROI.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className={`mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1500ms' }}>
            <p className="text-white text-sm md:text-base">
              © 2024 Nithin Surendran Menon | Sustainability & ESG Consultant | Aachen, Germany
            </p>
            <p className="text-white/80 text-xs md:text-sm mt-2">
              Engineering Logic meets ESG Compliance
            </p>
          </div>
        </div>
      </div>
      
      {/* Created By - Fixed at Bottom */}
      <div className={`relative z-10 pt-0 border-t border-white/10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1700ms' }}>
        <p className="text-white/60 text-xs md:text-sm">
          Created by 
          <a 
            href="https://pixeltech.example.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors ml-1"
          >
            pixeltech
          </a>
          <span className="text-white/60 mx-1 md:mx-2">|</span>
          <a 
            href="https://pixeljunkie.example.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            Pixel Junkie Creative Studio
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
