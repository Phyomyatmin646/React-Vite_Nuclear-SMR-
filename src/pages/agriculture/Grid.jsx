import React from 'react';

const Grid = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Electricity Grid</h1>
        <p className="text-gray-600 mb-6">Information about the electricity grid infrastructure and distribution systems.</p>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Grid Infrastructure</h2>
          <p className="text-gray-700 leading-relaxed">
            This page contains information about the electricity grid systems and distribution networks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
