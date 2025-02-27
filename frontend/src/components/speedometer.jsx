import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

function Speedometer() {
    return (
        <div className="rounded-lg shadow-lg p-6 h-full flex-grow">
            <ReactSpeedometer
                minValue={0}
                maxValue={100}
                value={70}
                segments={10}  // Adding segments for better visual granularity
                needleColor="white"
                startColor="#000000"  // Starting color of the speedometer
                endColor="#000000"    // Ending color of the speedometer
                width={400}           // Custom width
                height={300}          // Custom height
                ringWidth={20}        // Customize the thickness of the ring
                needleTransitionDuration={4000}  // Animation duration for the needle
                needleTransition="easeElastic"  // Needle transition style
                textColor="#FFFFFF"  // Text color for the labels and values
                fontSize={24}         // Adjust the font size for better visibility
            />
        </div>
    );
}

export default Speedometer;