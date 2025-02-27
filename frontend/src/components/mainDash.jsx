import React from 'react';
import FSMProgress from "@/components/fsmProgess.jsx";
import Speedometer from "@/components/speedometer.jsx";
import Telemetry from "@/components/telemetry.jsx";

function MainDash() {

    const steps = ['Idle', 'Safety Check', 'Safe to Arm', 'Arm', 'Acceleration', 'Cruise', 'Primary Brake', 'Secondary Brake', 'Full Stop'];
    return (
        <div className="flex flex-col flex-grow w-full bg-gray-900 text-gray-300">
            <div className="p-4 bg-gray-800">
                <FSMProgress steps={steps} currentStep={5}/>
            </div>

            <div className="flex flex-grow h-full">
                <div className="w-1/2 p-1 flex flex-grow border border-red-500">
                    <Speedometer/>
                </div>
                <div className="w-0.5 bg-gray-700"></div>
                <div className="w-1/2 p-1 flex flex-col border border-red-500">
                    <Telemetry/>
                </div>
            </div>
        </div>
    );
}

export default MainDash;