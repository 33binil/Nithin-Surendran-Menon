import React from 'react';

const Toolbox = () => {
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-8 md:py-20 px-4" id="toolbox">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl zalando-font font-bold text-slate-800 mb-4">
            THE TOOLBOX
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-6">Technical Skills</p>
          <div className="w-16 md:w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Regulatory Mastery */}
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">Regulatory Mastery</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['CSRD', 'ESRS', 'EU Taxonomy', 'KrWG', 'PPWR', 'EUDR', 'LkSG', 'REACH'].map((framework) => (
                <span key={framework} className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-green-200 transition-colors">
                  {framework}
                </span>
              ))}
            </div>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-100">
              <p className="text-slate-600 text-xs md:text-sm">8+ major frameworks mastered</p>
            </div>
          </div>

          {/* Sustainability Tools */}
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">Sustainability Tools</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg">
                <div className="font-semibold text-slate-800 text-sm md:text-base">LCA Software</div>
                <div className="text-slate-600 text-xs md:text-sm">SimaPro, Ecochain</div>
              </div>
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg">
                <div className="font-semibold text-slate-800 text-sm md:text-base">GHG Protocol</div>
                <div className="text-slate-600 text-xs md:text-sm">Carbon Footprint Analysis</div>
              </div>
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg">
                <div className="font-semibold text-slate-800 text-sm md:text-base">DMA Methodology</div>
                <div className="text-slate-600 text-xs md:text-sm">Double Materiality Assessment</div>
              </div>
            </div>
            <div className="mt-3 md:mt-3 pt-4 md:pt-6 border-t border-green-100">
              <p className="text-slate-600 text-xs md:text-sm">Industry-standard assessment tools</p>
            </div>
          </div>

          {/* Engineering & Data */}
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">Engineering & Data</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg text-center">
                <div className="font-semibold text-slate-800 text-xs md:text-sm">Power BI</div>
                <div className="text-slate-600 text-xs">Data Viz</div>
              </div>
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg text-center">
                <div className="font-semibold text-slate-800 text-xs md:text-sm">AutoCAD</div>
                <div className="text-slate-600 text-xs">Design</div>
              </div>
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg text-center">
                <div className="font-semibold text-slate-800 text-xs md:text-sm">SolidWorks</div>
                <div className="text-slate-600 text-xs">3D Modeling</div>
              </div>
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg text-center">
                <div className="font-semibold text-slate-800 text-xs md:text-sm">Caesar II</div>
                <div className="text-slate-600 text-xs">Pipe Analysis</div>
              </div>
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg text-center">
                <div className="font-semibold text-slate-800 text-xs md:text-sm">Primavera</div>
                <div className="text-slate-600 text-xs">Project Mgmt</div>
              </div>
              <div className="bg-slate-50 p-2 md:p-3 rounded-lg text-center">
                <div className="font-semibold text-slate-800 text-xs md:text-sm">MS Office</div>
                <div className="text-slate-600 text-xs">Expert</div>
              </div>
            </div>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-green-100">
              <p className="text-slate-600 text-xs md:text-sm">6+ technical tools mastered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
