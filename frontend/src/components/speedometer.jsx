import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { useSpeedometerAnimation } from '@/hooks/useSpeedometer.js';
import DemoLineGraph from './demoDashGraph';

const Speedometer = () => {
    const speed = useSpeedometerAnimation();

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center h-full">
            <div className="flex flex-row w-full mb-2">
                {/* Left side container for speed text and speedometer */}
                <div className="flex flex-col items-center">
                    {/* Speed text on top */}
                    <div className="text-white text-2xl mb-5">
                        Speed: {speed} mph
                    </div>
                    
                    {/* Speedometer */}
                    <div className="m-0">
                        <ReactSpeedometer
                            minValue={0}
                            maxValue={100}
                            value={speed}
                            segments={10}
                            needleColor="white"
                            startColor="#000000"
                            endColor="#000000"
                            width={300}
                            height={200}
                            ringWidth={10}
                            paddingVertical={0}
                            needleTransitionDuration={4000}
                            needleTransition="easeElastic"
                            textColor="#FFFFFF"
                            fontSize={24}
                        />
                    </div>
                </div>

                {/* Flight Data Section */}
                <div className="bg-gray-700 rounded-lg p-6 text-white ml-8 w-full flex flex-col justify-between">
                    {/* Speed and Distance in larger text */}
                    <div className="space-y-6 mb-8">
                        <p className="text-3xl ">Speed: {(speed * 0.44704).toFixed(2)} m/s</p>
                        <p className="text-3xl ">Distance: 0 km</p>
                    </div>
                    {/* Pitch, Roll, Yaw in horizontal boxes */}
                    <div className="flex flex-row space-x-6">
                        <div className="flex-2 bg-gray-800 rounded-lg p-1.5 text-center">
                            <p className="text-lg mb-1 font-light">Pitch</p>
                            <p className="text-2xl font-semibold">0°</p>
                        </div>
                        <div className="flex-2 bg-gray-800 rounded-lg p-1.5 text-center">
                            <p className="text-lg mb-1 font-light">Roll</p>
                            <p className="text-2xl font-semibold">0°</p>
                        </div>
                        <div className="flex-2 bg-gray-800 rounded-lg p-1.5 text-center">
                            <p className="text-lg mb-1 font-light">Yaw</p>
                            <p className="text-2xl font-semibold">0°</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two graphs container */}
            <div className="flex flex-row gap-4 w-full h-full justify-center">
                <div className="w-1/2 bg-gray-700 rounded-lg p-4 h-full">
                    <DemoLineGraph />
                </div>
                <div className="w-1/2 bg-gray-700 rounded-lg p-4 h-full">
                    <DemoLineGraph />
                </div>
            </div>
        </div>
    );
};

export default Speedometer;