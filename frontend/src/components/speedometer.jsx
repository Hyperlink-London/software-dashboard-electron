import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { useSpeedometerAnimation } from '@/hooks/speedometer_demo.js';
import LineGraph from '@/components/graphs.jsx';

const Speedometer = () => {
    const speed = useSpeedometerAnimation();

    return (
        <div className="rounded-lg shadow-lg p-6 flex flex-col items-center">
            {/* Speed text on top */}
            <div className="text-white text-2xl mb-5">
                Speed: {speed} mph
            </div>
            
            {/* Speedometer */}
            <div className="mb-6">
                <ReactSpeedometer
                    minValue={0}
                    maxValue={100}
                    value={speed}
                    segments={10}  // Adding segments for better visual granularity
                    needleColor="white"
                    startColor="#000000"  // Starting color of the speedometer
                    endColor="#000000"    // Ending color of the speedometer
                    width={300}           // Custom width
                    height={300}          // Custom height
                    ringWidth={20}        // Customize the thickness of the ring
                    needleTransitionDuration={4000}  // Animation duration for the needle
                    needleTransition="easeElastic"  // Needle transition style
                    textColor="#FFFFFF"  // Text color for the labels and values
                    fontSize={24}         // Adjust the font size for better visibility
                />
            </div>

            {/* Two graphs container */}
            <div className="flex flex-row gap-4 w-full h-full justify-center">
                <div className="w-1/2 bg-gray-800 rounded-lg p-4 h-full">
                    {/* First graph */}
                    <LineGraph />
                </div>
                <div className="w-1/2 bg-gray-800 rounded-lg p-4 h-full">
                    {/* Second graph */}
                    <LineGraph />
                </div>
            </div>
        </div>
    );
};

export default Speedometer;