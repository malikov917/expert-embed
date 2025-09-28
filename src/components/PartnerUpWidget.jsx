import React from 'react';
import { Users } from 'lucide-react';

const PartnerUpWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-gray-500" />
            Partner Up!
        </h3>
        <p className="text-sm text-gray-600 mb-4">Let's partner each other and add each other as partners on websites.</p>
        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Learn More
        </button>
    </div>
  );
};

export default PartnerUpWidget;
