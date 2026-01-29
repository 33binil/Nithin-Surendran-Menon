import React from 'react';

const CoreCompetencies = () => {
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-8 md:py-12 px-4" id="core-competencies">
      <div className="max-w-screen-2xl mx-auto mb-4 md:mb-6">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl zalando-font font-bold text-slate-800 mb-4">
            CORE COMPETENCIES
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-6">The Value Pillars</p>
          <div className="w-16 md:w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Circular Economy Strategy */}
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  Circular Economy Strategy
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Designing Refuse-to-Recycle frameworks and business models that eliminate waste and create sustainable value chains.
                </p>
              </div>
            </div>
          </div>

          {/* ESG & Regulatory Compliance */}
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  ESG & Regulatory Compliance
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Navigating CSRD, ESRS, EU Taxonomy, LkSG, and CSDDD frameworks to ensure full regulatory alignment and reporting excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Life Cycle Assessment (LCA) */}
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  Life Cycle Assessment (LCA)
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Quantifying environmental impact via Product Carbon Footprints (PCF) and comprehensive life cycle analysis methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  Project Management
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Coordinating multidisciplinary stakeholders across international markets to deliver complex sustainability initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        

        {/* Call to Action */}
        <div className="mt-8 md:mt-16 text-center px-4">
          <p className="text-slate-600 text-sm md:text-base mb-6">
            Ready to transform your sustainability strategy with proven expertise?
          </p>
          <a href="mailto:nithinsmenon1994@gmail.com" className="bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-green-700 transition-colors shadow-lg text-sm md:text-base inline-flex items-center">
            Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
