import React, { useState, useEffect } from 'react';
import { getBrakingData, getSpeed, getPodData } from '@/hooks/api';
import LineGraph from './graphs';

function APITest() {
    const [apiResult, setApiResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isAutoRefreshing, setIsAutoRefreshing] = useState(false);

    const callApi = async (apiFunction) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiFunction();
            setApiResult(response);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let intervalId;
        if (isAutoRefreshing) {
            // Initial call
            callApi(getPodData);
            
            // Set up interval for subsequent calls
            intervalId = setInterval(() => {
                callApi(getPodData);
            }, 100);
        }

        // Cleanup function to clear interval when component unmounts or auto-refresh is stopped
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoRefreshing]);

    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            <div className="flex gap-2 mb-4">
                <button
                    className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                    onClick={() => callApi(getBrakingData)}
                    disabled={loading || isAutoRefreshing}
                >
                    Call Braking Data API
                </button>
                <button
                    className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                    onClick={() => callApi(getSpeed)}
                    disabled={loading || isAutoRefreshing}
                >
                    Call Speed API
                </button>
                <button
                    className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                    onClick={() => callApi(getPodData)}
                    disabled={loading || isAutoRefreshing}
                >
                    Call Pod Data API
                </button>
                <button
                    className={`font-bold py-2 px-4 rounded ${
                        isAutoRefreshing 
                            ? 'bg-red-900 hover:bg-red-800' 
                            : 'bg-green-900 hover:bg-green-800'
                    } text-white`}
                    onClick={() => setIsAutoRefreshing(!isAutoRefreshing)}
                    disabled={loading}
                >
                    {isAutoRefreshing ? 'Stop Auto-Refresh' : 'Start Auto-Refresh'}
                </button>
            </div>

            {error && <p className="text-red-500 mt-4">Error: {error}</p>}

            {apiResult && (
                <div className="flex flex-col gap-4 mt-4 w-full">
                    <div className="w-full h-[400px]">
                        <LineGraph podData={apiResult} />
                    </div>
                    {/* <div className="w-full bg-green-700 p-4 border rounded overflow-y-auto max-h-[150px]">
                        <pre className="text-white">{JSON.stringify(apiResult, null, 2)}</pre>
                    </div> */}
                </div>
            )}
        </div>
    );
}

export default APITest;