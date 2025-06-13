import React from 'react';

const AlgerianFlag: React.FC = () => {
  return (
    <div className="w-24 h-16 mx-auto mb-8 shadow-lg rounded-md overflow-hidden border-2 border-white/20">
      <div className="w-full h-full flex">
        {/* Green section */}
        <div className="w-1/2 h-full bg-green-600 relative flex items-center justify-center">
          <div className="relative">
            {/* Crescent */}
            <div className="w-6 h-6 bg-red-600 rounded-full relative">
              <div className="absolute w-4 h-4 bg-green-600 rounded-full top-1 left-1"></div>
            </div>
            {/* Star */}
            <div className="absolute -top-1 -right-2">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#dc2626"/>
              </svg>
            </div>
          </div>
        </div>
        {/* White section */}
        <div className="w-1/2 h-full bg-white relative flex items-center justify-center">
          <div className="relative">
            {/* Crescent */}
            <div className="w-6 h-6 bg-red-600 rounded-full relative">
              <div className="absolute w-4 h-4 bg-white rounded-full top-1 left-1"></div>
            </div>
            {/* Star */}
            <div className="absolute -top-1 -right-2">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#dc2626"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgerianFlag;