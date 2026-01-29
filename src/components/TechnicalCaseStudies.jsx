import React from 'react';

const TechnicalCaseStudies = () => {
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-6 md:py-10 px-4" id="technical-case-studies">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl zalando-font font-bold text-slate-800 mb-4">
            TECHNICAL CASE STUDIES
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-2">The Proof</p>
          <div className="w-16 md:w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Case Studies Container */}
        <div className="space-y-8 md:space-y-10">
          {/* Case Study A: Master's Thesis */}
          <div className="bg-white rounded-lg shadow-lg border border-green-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold">Master's Thesis: Circular Economy for Medical Plastics</h3>
                  <p className="text-green-100 text-sm md:text-base">Academic Research & Practical Implementation</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Project Details */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Partner
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">B. Braun SE (Melsungen, Germany)</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Objective
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Analyze circularity for single-use syringes in hospital settings, 
                      developing sustainable alternatives while maintaining regulatory compliance.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Execution
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Conducted comprehensive regulatory assessments (KrWG, PPWR, EUDR) 
                      and led interviews with 6 international customers to integrate market insights.
                    </p>
                  </div>
                </div>

                {/* Right Column - Outcome & Impact */}
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-green-50 p-4 md:p-6 rounded-lg border border-green-200">
                    <h4 className="text-base md:text-lg font-semibold text-green-800 mb-3">Key Outcome</h4>
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">30%</div>
                    <p className="text-slate-600 text-sm md:text-base">Waste Reduction Potential</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 text-sm md:text-base">Scalable R-strategies for medical device circularity</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 text-sm md:text-base">Regulatory compliance framework for European markets</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 text-sm md:text-base">Market integration roadmap with customer insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study B: Internship */}
          <div className="bg-white rounded-lg shadow-lg border border-green-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold">Internship: CSRD & ESRS Implementation</h3>
                  <p className="text-green-100 text-sm md:text-base">Corporate Sustainability & Regulatory Excellence</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Project Details */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Partner
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">B. Braun SE (Group Sustainability)</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Objective
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Implement corporate-level sustainability reporting and governance 
                      in alignment with CSRD and ESRS requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Execution
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Supported Double Materiality Assessments (DMA), ESG KPI tracking, 
                      and decarbonization initiatives including Product Carbon Footprint (PCF) analysis.
                    </p>
                  </div>
                </div>

                {/* Right Column - Outcome & Impact */}
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-green-50 p-4 md:p-6 rounded-lg border border-green-200">
                    <h4 className="text-base md:text-lg font-semibold text-green-800 mb-3">Key Achievement</h4>
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">E5</div>
                    <p className="text-slate-600 text-sm md:text-base">Resource Use Standards Delivered Ahead of Schedule</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-3">Impact</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 text-sm md:text-base">Improved data quality for Annual Sustainability Report</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 text-sm md:text-base">Enhanced ESG KPI tracking and governance frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-slate-600 text-sm md:text-base">Comprehensive PCF analysis for decarbonization strategy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCaseStudies;
