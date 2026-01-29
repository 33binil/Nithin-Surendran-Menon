import React from 'react';

const GlobalProfile = () => {
  return (
    <div className="bg-gradient-to-l from-[#19a249]/10 to-[#eff4f8] py-8 md:py-12 px-4" id="global-profile">
      <div className="max-w-screen-2xl mx-auto mb-4 md:mb-6">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl zalando-font md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            GLOBAL PROFILE
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-6">Languages & Certifications</p>
          <div className="w-16 md:w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Languages Section */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800">Languages</h3>
                <p className="text-green-600 font-medium text-sm md:text-base">Multilingual Communication</p>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {/* English */}
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base">English</h4>
                    <p className="text-slate-600 text-xs md:text-sm">Business Fluent</p>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">C1</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm mt-2">Professional business communication and technical documentation</p>
              </div>

              {/* German */}
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base">German</h4>
                    <p className="text-slate-600 text-xs md:text-sm">Upper Intermediate</p>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">B2</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm mt-2">Professional working proficiency in German business environment</p>
              </div>

              {/* Malayalam */}
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base">Malayalam</h4>
                    <p className="text-slate-600 text-xs md:text-sm">Native Language</p>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-purple-100 text-purple-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">Native</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm mt-2">Native fluency with cultural understanding</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800">Certifications</h3>
                <p className="text-green-600 font-medium text-sm md:text-base">Professional Credentials</p>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {/* Ecochain Academy */}
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base">Ecochain Academy</h4>
                    <p className="text-green-600 font-medium text-xs md:text-sm">Life Cycle Assessment (LCA)</p>
                    <p className="text-slate-600 text-xs md:text-sm mt-1">
                      Professional certification in LCA methodology and environmental impact assessment using industry-standard software tools.
                    </p>
                    <div className="flex items-center mt-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                      </svg>
                      <span className="text-slate-600 text-xs md:text-sm">2023</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* B. Braun Business School */}
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base">B. Braun Business School</h4>
                    <p className="text-green-600 font-medium text-xs md:text-sm">Project Excellence Management (PEM)</p>
                    <p className="text-slate-600 text-xs md:text-sm mt-1">
                      Advanced project management certification focusing on medical technology projects and cross-functional team leadership.
                    </p>
                    <div className="flex items-center mt-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                      </svg>
                      <span className="text-slate-600 text-xs md:text-sm">2022</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deloitte CSRD Training */}
              <div className="bg-slate-50 p-3 md:p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base">Deloitte CSRD Training</h4>
                    <p className="text-green-600 font-medium text-xs md:text-sm">Corporate Sustainability Reporting Directive</p>
                    <p className="text-slate-600 text-xs md:text-sm mt-1">
                      Specialized training on CSRD implementation, ESRS standards, and sustainability reporting compliance from leading consulting firm.
                    </p>
                    <div className="flex items-center mt-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                      </svg>
                      <span className="text-slate-600 text-xs md:text-sm">2023</span>
                    </div>
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

export default GlobalProfile;
