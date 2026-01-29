import React from 'react';

const PerformanceReel = () => {
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-6 md:py-10 px-4" id="performance-reel">
      <div className="max-w-screen-2xl mx-auto mb-4 md:mb-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl zalando-font font-bold text-slate-800 mb-4">
            THE PERFORMANCE REEL
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-6">Key Achievements</p>
          <div className="w-16 md:w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* 30% Plastic Reduction */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">30%</div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
                Plastic Reduction
              </h3>
            </div>
            <p className="text-slate-600 text-center text-sm md:text-base">
              Engineered circular strategies for medical syringes at B. Braun SE, achieving significant material reduction while maintaining product integrity and regulatory compliance.
            </p>
          </div>

          {/* International Scope */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">6</div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
                European Countries
              </h3>
            </div>
            <p className="text-slate-600 text-center text-sm md:text-base">
              Managed comprehensive recycling gap analysis across 6 European countries, identifying opportunities for circular economy implementation and cross-border collaboration.
            </p>
          </div>

          {/* Audit Readiness */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">15</div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
                IRO Standards
              </h3>
            </div>
            <p className="text-slate-600 text-center text-sm md:text-base">
              Evaluated 15 IRO standards (E5 Resource Use) for corporate sustainability reporting, ensuring full audit readiness and compliance with international reporting frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReel;
