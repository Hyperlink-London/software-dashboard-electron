import React from 'react';
import PropTypes from 'prop-types';

const FSMProgress = ({steps, step}) => {
    return (
        <div className="flex items-center justify-center">
            {steps.map((item, index) => (
                <div key={index} className="flex items-center">
                    {/* Circle */}
                    <div
                        className={`relative rounded-full w-8 h-8 flex items-center justify-center text-white ${
                            index + 1 <= step ? 'bg-blue-500' : 'bg-gray-400'
                        }`}
                    >
                        {index + 1}
                    </div>

                    {/* Line */}
                    {index < steps.length - 1 && (
                        <div
                            className={`h-0.5 w-16 ${
                                index + 1 < step ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                        ></div>
                    )}


                    {/*<span className={`ml-2 ${index + 1 <= step ? 'text-blue-500' : 'text-gray-400'}`}>*/}
                    {/*    {item}*/}
                    {/*</span>*/}
                </div>
            ))}
        </div>
    );
};

FSMProgress.propTypes = {
    steps: PropTypes.array.isRequired,
    step: PropTypes.number.isRequired,
}

export default FSMProgress;