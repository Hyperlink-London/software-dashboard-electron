import { useState, useEffect } from 'react';



export const useSpeedometerAnimation = () => {
    const [speed, setSpeed] = useState(0);
    const [isIncreasing, setIsIncreasing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setSpeed(currentSpeed => {
                if (isIncreasing) {
                    if (currentSpeed >= 100) {
                        setIsIncreasing(false);
                        return 100;
                    }
                    return currentSpeed + 1;
                } else {
                    if (currentSpeed <= 0) {
                        setIsIncreasing(true);
                        return 0;
                    }
                    return currentSpeed - 1;
                }
            });
        }, 50); // Updates every 50ms

        return () => clearInterval(interval);
    }, [isIncreasing]);

    return speed;
};

export default useSpeedometerAnimation;

