import React from 'react';
import FSMProgress from "@/components/fsmProgess.jsx";

function MainDash() {

    const steps = ['Idle', 'Safety Check', 'Safe to Arm', 'Arm', 'Acceleration', 'Cruise', 'Primary Brake', 'Secondary Brake', 'Full Stop'];
    return (
        <div className="flex flex-col h-full w-full bg-gray-900 text-gray-300"> {/* Changed h-screen to h-full */}

            <div className="p-4 bg-gray-800">
                <FSMProgress steps={steps} currentStep={5} />
            </div>

            <div className="flex flex-grow">
                <div className="w-1/2 p-4">
                    <div className="bg-gray-800 rounded-lg shadow p-4 h-full">Left Content</div>
                </div>
                <div className="w-0.5 bg-gray-700"></div>
                <div className="w-1/2 p-4">
                    <div className="bg-gray-800 rounded-lg shadow p-4 h-full">Right Content</div>
                </div>
            </div>
        </div>
    );
}

export default MainDash;