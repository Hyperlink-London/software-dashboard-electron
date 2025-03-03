import React, {useState} from 'react';
import PodProgressLogo from '@/assets/pod.svg';

function PodProgress() {
    // State to track progress (0 to 1)
    const [progress, setProgress] = useState(0);

    // Calculate the position based on the progress (0 - 1)
    const position = `${progress * 100}%`;

    return (
        <div className="bg-[#7d7d7d] items-start py-2 pt-10">
            {/* Container with padding instead of margin */}
            <div className="px-4">
                {/* Progress line contained within padded container */}
                <div className="border-b-2 border-[#ffffff] w-full relative bg-white">
                    {/* Pod SVG with dynamic position */}
                    <img
                        src={PodProgressLogo}
                        alt="Pod Progress"
                        className="absolute -mt-7"
                        style={{
                            left: position,
                            transition: 'left 0.3s ease', // Add smooth transition for movement
                            visibility: 'visible', // Ensure visibility
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default PodProgress;