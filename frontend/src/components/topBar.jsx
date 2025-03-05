import React from 'react';
import PropTypes from 'prop-types';
import logo from '@/assets/hyperlink_logo.png';

function TopBar({activeTab, onTabChange}) { //added props
    return (
        <nav className="bg-gray-900 py-2 sticky top-0 z-50">
            <div className="mx-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center mr-8">
                            <div className="flex-shrink-0 mr-2">
                                <img src={logo} alt="Hyperlink Logo" style={{width: '100px', height: '100%'}}/>
                            </div>
                            <span className="text-gray-300 font-bold text-lg">Telemetry Dashboard</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <a
                                href="#"
                                onClick={() => onTabChange('Home')} //changed handleTabClick
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
                                onClick={() => onTabChange('Past Runs')} //changed handleTabClick
                                className={`px-2 py-1 rounded-md text-sm font-medium ${
                                    activeTab === 'Past Runs'
                                        ? 'bg-gray-700 text-white'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                                }`}
                            >
                                Past Runs
                            </a>
                            <a
                                href="#"
                                onClick={() => onTabChange('Debug')} //changed handleTabClick
                                className={`px-2 py-1 rounded-md text-sm font-medium ${
                                    activeTab === 'Debug'
                                        ? 'bg-gray-700 text-white'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                                }`}
                            >
                                Debug
                            </a>
                        </div>
                    </div>
                    {process.env.NODE_ENV === 'development' && (
                        <div className="text-red-500 font-bold">
                            DEVELOPMENT DEMO
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

TopBar.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
}

export default TopBar;