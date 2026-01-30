import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AcademicFoundation = () => {
  const { ref: academicRef, isVisible } = useScrollAnimation(0.2);
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-8 md:py-12 px-4" id="academic-foundation" ref={academicRef}>
      <div className="max-w-screen-2xl mx-auto mb-4 md:mb-6">
        {/* Section Title */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-4xl zalando-font lg:text-5xl font-bold text-slate-800 mb-4">
            ACADEMIC FOUNDATION
          </h2>
          <div className={`w-16 md:w-20 h-1 bg-green-600 mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}></div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* M.Sc. Sustainability Management */}
          <div className={`bg-white p-6 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
            <div className="flex items-center mb-4 md:mb-6">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '900ms' }}>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 className={`text-lg md:text-xl font-bold text-slate-800 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`} style={{ transitionDelay: '1100ms' }}>M.Sc. Sustainability Management (Water & Energy)</h3>
                <p className={`text-green-600 font-medium text-sm md:text-base transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1300ms' }}>RWTH Aachen University | Aachen, Germany</p>
              </div>
            </div>
            
            <div className={`space-y-3 md:space-y-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1500ms' }}>
              <div className={`flex items-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '1700ms' }}>
                <div className={`w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1900ms' }}></div>
                <span className="text-slate-600 text-sm md:text-base">Specialization: Life Cycle Assessment (LCA), Social LCA (SLCA), GRI, Circular Economy Strategies, Life Cycle Costing (LCCA), Life Cycle Management (LCM), ISO, Recycling & Waste Management</span>
              </div>
            </div>
            
            <div className={`mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '2100ms' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className={`text-xs md:text-sm text-slate-500 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2300ms' }}>Premier Technical University</span>
                <div className={`flex items-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '2500ms' }}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-xs md:text-sm text-slate-600">Top Ranked</span>
                </div>
              </div>
            </div>
          </div>

          {/* M.Sc. Energy & Management Engineering */}
          <div className={`bg-white p-6 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
            <div className="flex items-center mb-4 md:mb-6">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1100ms' }}>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className={`text-lg md:text-xl font-bold text-slate-800 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`} style={{ transitionDelay: '1300ms' }}>M.Sc. Energy & Management Engineering (Erasmus)</h3>
                <p className={`text-green-600 font-medium text-sm md:text-base transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1500ms' }}>Politecnico Di Milano | Milan, Italy</p>
                <p className={`text-slate-500 text-xs md:text-sm mt-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: '1700ms' }}>09/2020 – 02/2021</p>
              </div>
            </div>
            
            <div className={`space-y-3 md:space-y-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1900ms' }}>
              <div className={`flex items-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '2100ms' }}>
                <div className={`w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '2300ms' }}></div>
                <span className="text-slate-600 text-sm md:text-base">Specialization: Renewable Energy, Energy Efficiency, Resource Management, Energy Optimization, Project Management</span>
              </div>
            </div>
            
            <div className={`mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '2500ms' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className={`text-xs md:text-sm text-slate-500 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2700ms' }}>International Exchange</span>
                <div className={`flex items-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '2900ms' }}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                  <span className="text-xs md:text-sm text-slate-600">EU Program</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bachelor of Engineering */}
          <div className={`bg-white p-6 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
            <div className="flex items-center mb-4 md:mb-6">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-3 md:mr-4 transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1300ms' }}>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <div>
                <h3 className={`text-lg md:text-xl font-bold text-slate-800 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`} style={{ transitionDelay: '1500ms' }}>Bachelor of Engineering (Mechanical & Production)</h3>
                <p className={`text-green-600 font-medium text-sm md:text-base transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1700ms' }}>Sathyabama Institute of Science and Technology | Chennai, India</p>
                <p className={`text-slate-500 text-xs md:text-sm mt-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: '1900ms' }}>08/2013 – 05/2017</p>
              </div>
            </div>
            
            <div className={`space-y-3 md:space-y-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2100ms' }}>
              <div className={`flex items-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '2300ms' }}>
                <div className={`w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '2500ms' }}></div>
                <span className="text-slate-600 text-sm md:text-base">Specialization: Thermodynamics, Project Engineering, Materials Technology, Environmental Engineering, Machine Design</span>
              </div>
            </div>
            
            <div className={`mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-100 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '2700ms' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className={`text-xs md:text-sm text-slate-500 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2900ms' }}>Engineering Foundation</span>
                <div className={`flex items-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '3100ms' }}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                  <span className="text-xs md:text-sm text-slate-600">ABET Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFoundation;
