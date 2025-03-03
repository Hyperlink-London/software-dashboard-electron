import React from 'react';
import PropTypes from 'prop-types';

const FSMProgress = ({steps, currentStep}) => {
    // Calculate dynamic widths based on viewport and number of steps
    const containerWidth = Math.min(100, Math.floor(90 / steps.length)); // percentage width per item
    const lineWidth = Math.min(80, Math.floor(70 / steps.length)); // percentage width for lines

    return (
        <div className="flex items-center justify-center">
            {steps.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-30 mx-4">
                    {/* Circle */}
                    <div
                        className={`relative rounded-full w-8 h-8 flex items-center justify-center text-white ${
                            index + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-400'
                        }`}
                    >
                        {index + 1}
                    </div>
                    
                    {/* State Text */}
                    <span className={`mt-2 text-sm text-center break-words ${
                        index + 1 <= currentStep ? 'text-white-600' : 'text-gray-400'
                    }`}>
                        {item}
                    </span>
                </div>
            ))}
        </div>
    );
};

FSMProgress.propTypes = {
    steps: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired,
}

export default FSMProgress;