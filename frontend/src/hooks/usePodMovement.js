import { useState, useEffect } from 'react';

const usePodMovement = () => {
    const [progress, setProgress] = useState(0);
    const [goingForward, setGoingForward] = useState(true);

    useEffect(() => {
        // console.log('Current progress:', progress); // Add logging to debug

        const moveStep = () => {
            const baseStepSize = 0.003; // Base step size
            // Add padding to keep pod within viewport
            const maxProgress = 0.96;  // Instead of 1
            const minProgress = 0.04;  // Instead of 0
            
            if (goingForward) {
                if (progress >= maxProgress) {
                    setGoingForward(false);
                } else {
                    // Ease out as we approach 1, ease in from 0
                    const easeInOut = 1 - Math.pow(Math.abs(0.5 - progress) * 2, 2);
                    const adjustedStep = baseStepSize * (0.7 + easeInOut * 0.3);
                    setProgress(prev => Math.min(maxProgress, prev + adjustedStep));
                }
            } else {
                if (progress <= minProgress) {
                    setGoingForward(true);
                } else {
                    // Ease out as we approach 0, ease in from 1
                    const easeInOut = 1 - Math.pow(Math.abs(0.5 - progress) * 2, 2);
                    const adjustedStep = baseStepSize * (0.7 + easeInOut * 0.3);
                    setProgress(prev => Math.max(minProgress, prev - adjustedStep));
                }
            }
        };

        const interval = setInterval(moveStep, 16); // Keep the 60fps timing
        return () => clearInterval(interval);
    }, [progress, goingForward]);

    return progress;
};

export default usePodMovement;