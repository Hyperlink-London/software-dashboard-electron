import React, { useState } from 'react';
import logo from '../assets/hyperlink_logo.png';

function TopBar() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="bg-gray-900 py-2 sticky top-0 z-50"> {/* Reduced padding */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center"> {/* Removed justify-between */}
          <div className="flex items-center mr-8"> {/* Added margin to separate */}
            <div className="flex-shrink-0 mr-2">
              <img src={logo} alt="Hyperlink Logo" style={{ width: '100px', height: '100%' }} /> {/* Added image */}
            </div>
            <span className="text-gray-300 font-bold text-lg">Telemetry Dashboard</span>
          </div>
          <div className="flex items-center space-x-2"> {/* Reduced spacing */}
            <a
              href="#"
              onClick={() => handleTabClick('Home')}
              className={`px-2 py-1 rounded-md text-sm font-medium ${
                activeTab === 'Home'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => handleTabClick('Past Runs')}
              className={`px-2 py-1 rounded-md text-sm font-medium ${
                activeTab === 'Past Runs'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
              }`}
            >
              Past Runs
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;