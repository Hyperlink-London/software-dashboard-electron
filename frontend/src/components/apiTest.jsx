import React, { useState } from 'react';
import { getBrakingData, getSpeed, getPodData } from '@/hooks/api';

function APITest() {
    const [apiResult, setApiResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            <button
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={() => callApi(getBrakingData)}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Call Braking Data API'}
            </button>
            <button
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={() => callApi(getSpeed)}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Call Speed API'}
            </button>
            <button
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={() => callApi(getPodData)}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Call Pod Data API'}
            </button>

            {error && <p className="text-red-500 mt-4">Error: {error}</p>}

            {apiResult && (
                <div className=" background-green-700 mt-4 p-4 border rounded overflow-y-auto max-h-64 w-full">
                    <pre>{JSON.stringify(apiResult, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default APITest;