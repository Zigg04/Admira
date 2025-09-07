import React from 'react';

const Visual = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      
      <div className="absolute inset-0">
        {/* Large Stars */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-64 left-1/3 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-80 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-96 left-1/2 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-80"></div>
        
       
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-72 left-2/3 w-1 h-1 bg-yellow-100 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-88 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
        
        <div className="absolute top-24 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-48 right-1/5 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-56 left-3/4 w-0.5 h-0.5 bg-yellow-50 rounded-full animate-pulse opacity-35"></div>
        <div className="absolute top-72 right-1/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-25"></div>
        <div className="absolute top-84 left-1/6 w-0.5 h-0.5 bg-purple-200 rounded-full animate-pulse opacity-45"></div>
      </div>

      
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-radial from-pink-500/25 to-transparent rounded-full blur-3xl"></div>
      </div>

     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full animate-ping opacity-80">
          <div className="absolute -top-1 -left-1 w-3 h-0.5 bg-gradient-to-r from-transparent to-white opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-0 w-0.5 h-0.5 bg-blue-300 rounded-full animate-ping opacity-70" style={{animationDelay: '2s'}}>
          <div className="absolute -top-0.5 -right-1 w-2 h-0.5 bg-gradient-to-l from-transparent to-blue-300 opacity-50"></div>
        </div>
      </div>

      
      <div className="absolute top-1/6 right-1/6 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60 blur-sm">
        <div className="absolute top-2 left-2 w-2 h-2 bg-orange-300 rounded-full opacity-80"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/5 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-50 blur-sm">
        <div className="absolute top-1 right-1 w-1 h-1 bg-blue-200 rounded-full opacity-70"></div>
      </div>

      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Visual;
