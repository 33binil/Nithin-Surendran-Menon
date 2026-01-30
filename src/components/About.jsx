import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation(0.2);
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-8 md:py-12 px-4" id="about" ref={aboutRef}>
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl zalando-font font-bold text-slate-800 mb-3">
            ABOUT ME
          </h2>
          <div className={`w-16 md:w-20 h-1 bg-green-600 mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}></div>
        </div>

        {/* Executive Summary */}
        <div className={`bg-white rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
          <div className={`text-center mt-4 md:mt-5 mb-4 md:mb-6 px-4 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '900ms' }}>
            <p className="text-lg md:text-xl font-semibold text-green-600 italic hover:scale-105 transition-transform duration-300">
              "Engineering Logic meets ESG Compliance."
            </p>
          </div>
          
          <p className={`text-slate-700 leading-relaxed mb-4 text-center px-4 md:px-6 max-w-4xl md:max-w-7xl mx-auto text-sm md:text-base transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
            A Sustainability Management Expert with a proven track record in developing data-driven R-strategies and circular business models. 
            Specialized in bridging technical industrial operations with global reporting frameworks (CSRD/ESRS). 
            Proven ability to deliver measurable waste reduction and ensure regulatory alignment in complex medical technology environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;