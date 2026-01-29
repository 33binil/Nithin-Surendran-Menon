import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6">
          <div className="absolute inset-0 border-4 border-green-600/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-slate-800">
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 zalando-font"
          >
            Nithin Surendran Menon
          </h2>
          <p className="text-sm md:text-base text-slate-600 animate-pulse">
            Loading Portfolio...
          </p>
        </div>
        
        {/* Loading Progress Bar */}
        <div className="w-64 md:w-96 h-1 bg-slate-200 rounded-full mt-4 md:mt-6 overflow-hidden mx-auto">
          <div 
            className="h-full bg-green-600 rounded-full transition-all duration-2000 ease-out"
            style={{
              animation: 'progressBar 2s ease-out forwards',
              width: '0%'
            }}
          ></div>
        </div>
        
        <style jsx>{`
          @keyframes progressBar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LoadingOverlay;
