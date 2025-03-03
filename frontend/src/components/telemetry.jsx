import React from 'react';
import APITest from "@/components/apiTest.jsx";

function Telemetry() {
    return (
        <div className="bg-gray-800 rounded-lg shadow p-4 h-full flex flex-col">
            {/* Top Panel - Stats */}
            <div className="flex-none mb-4 p-3 bg-gray-700 rounded-lg">
                <div className="grid grid-cols-3 gap-3">
                    {/* Temperature Section */}
                    <div className="p-2 bg-gray-600 rounded-lg">
                        <h3 className="text-gray-300 text-xs font-semibold mb-2">Temperatures</h3>
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">CPU:</span>
                                <span className="text-white">45.2°C</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Motor:</span>
                                <span className="text-white">38.7°C</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Ambient:</span>
                                <span className="text-white">22.1°C</span>
                            </div>
                        </div>
                    </div>

                    {/* Battery Section */}
                    <div className="p-2 bg-gray-600 rounded-lg">
                        <h3 className="text-gray-300 text-xs font-semibold mb-2">Power</h3>
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Main Battery:</span>
                                <span className="text-white">12.6V</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Backup:</span>
                                <span className="text-white">5.2V</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Current Draw:</span>
                                <span className="text-white">2.1A</span>
                            </div>
                        </div>
                    </div>

                    {/* Structure Section */}
                    <div className="p-2 bg-gray-600 rounded-lg">
                        <h3 className="text-gray-300 text-xs font-semibold mb-2">Structures</h3>
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Vibration:</span>
                                <span className="text-white">0.02g</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Pressure:</span>
                                <span className="text-white">101.3 kPa</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Humidity:</span>
                                <span className="text-white">45%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Panel - Combined Controls and Log */}
            <div className="flex-1 bg-gray-700 rounded-lg p-4">
                <div className="mb-4 flex justify-start pl-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm mr-4">
                        Abort
                    </button>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded text-sm mr-4">
                        Safety Checks
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm">
                        Restart
                    </button>
                </div>
                
                <div className="overflow-y-auto h-[calc(100%-3rem)] bg-gray-800 rounded p-2">
                    <div className="space-y-1 text-left">
                        <p className="text-gray-300 text-xs text-left">Initializing Run</p>
                        <p className="text-gray-300 text-xs text-left">Run UUID: xxxx-xxxx-xxxx-xxxx</p>
                        <p className="text-gray-300 text-xs text-left">Safety Checks Passed!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Telemetry;