import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Toolbox = () => {
  const { ref: toolboxRef, isVisible } = useScrollAnimation(0.2);
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-8 md:py-20 px-4" id="toolbox" ref={toolboxRef}>
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl zalando-font font-bold text-slate-800 mb-4">
            THE TOOLBOX
          </h2>
          <p className={`text-lg md:text-xl text-slate-600 mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Technical Skills</p>
          <div className={`w-16 md:w-20 h-1 bg-green-600 mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}></div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Regulatory Mastery */}
          <div className={`bg-white p-4 md:p-5 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
            <div className="flex items-center mb-4 md:mb-6">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '900ms' }}>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">Regulatory Mastery</h3>
            </div>
            <div className={`flex flex-wrap gap-2 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
              {['KrWG', 'PPWR', 'EU-MDR', 'WEEE', 'ESPR', 'REACH', 'LkSG', 'CSDDD', 'Circular Economy Action Plan (CEAP)'].map((framework, index) => (
                <span 
                  key={framework} 
                  className={`bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {framework}
                </span>
              ))}
            </div>
            <div className={`mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '1300ms' }}>
              <p className="text-slate-600 text-xs md:text-sm">9+ major frameworks mastered</p>
            </div>
          </div>

          {/* Sustainability Tools */}
          <div className={`bg-white p-4 md:p-5 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
            <div className="flex items-center mb-4 md:mb-6">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1100ms' }}>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">Sustainability Tools</h3>
            </div>
            <div className={`space-y-3 md:space-y-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1300ms' }}>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: '1500ms' }}>
                <div className="font-semibold text-slate-800 text-sm md:text-base">LCA Software</div>
                <div className="text-slate-600 text-xs md:text-sm">SimaPro, Ecochain</div>
              </div>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: '1700ms' }}>
                <div className="font-semibold text-slate-800 text-sm md:text-base">GHG Protocol</div>
                <div className="text-slate-600 text-xs md:text-sm">Carbon Footprint Analysis</div>
              </div>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: '1900ms' }}>
                <div className="font-semibold text-slate-800 text-sm md:text-base">DMA Methodology</div>
                <div className="text-slate-600 text-xs md:text-sm">Double Materiality Assessment</div>
              </div>
            </div>
            <div className={`mt-3 md:mt-3 pt-4 md:pt-6 border-t border-green-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '2100ms' }}>
              <p className="text-slate-600 text-xs md:text-sm">Industry-standard assessment tools</p>
            </div>
          </div>

          {/* Engineering & Data */}
          <div className={`bg-white p-4 md:p-5 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
            <div className="flex items-center mb-4 md:mb-6">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1300ms' }}>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">Engineering & Data</h3>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1500ms' }}>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '1700ms' }}>
                <div className="font-semibold text-slate-800 text-xs md:text-sm">Power BI</div>
                <div className="text-slate-600 text-xs">Data Viz</div>
              </div>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '1900ms' }}>
                <div className="font-semibold text-slate-800 text-xs md:text-sm">AutoCAD</div>
                <div className="text-slate-600 text-xs">Design</div>
              </div>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '2100ms' }}>
                <div className="font-semibold text-slate-800 text-xs md:text-sm">SolidWorks</div>
                <div className="text-slate-600 text-xs">3D Modeling</div>
              </div>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '2300ms' }}>
                <div className="font-semibold text-slate-800 text-xs md:text-sm">Caesar II</div>
                <div className="text-slate-600 text-xs">Pipe Analysis</div>
              </div>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '2500ms' }}>
                <div className="font-semibold text-slate-800 text-xs md:text-sm">Primavera</div>
                <div className="text-slate-600 text-xs">Project Mgmt</div>
              </div>
              <div className={`bg-slate-50 p-2 md:p-3 rounded-lg text-center hover:shadow-md transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '2700ms' }}>
                <div className="font-semibold text-slate-800 text-xs md:text-sm">MS Office</div>
                <div className="text-slate-600 text-xs">Expert</div>
              </div>
            </div>
            <div className={`mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '2900ms' }}>
              <p className="text-slate-600 text-xs md:text-sm">6+ technical tools mastered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
