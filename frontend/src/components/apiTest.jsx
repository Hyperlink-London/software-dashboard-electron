import React, { useState } from 'react';
import axios from 'axios';

function APITest() {
    const [apiResult, setApiResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const callExampleApi = async () => {
        setLoading(true);
        setError(null); // Reset error before new request
        try {
            const response = await axios.get('http://0.0.0.0:8000/random_data');
            console.log(response);
            setApiResult(response.data);
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                onClick={callExampleApi}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Call Example API'}
            </button>

            {error && <p className="text-red-500 mt-4">Error: {error}</p>}

            {apiResult && (
                <div className="mt-4 p-4 border rounded">
                    <pre>{JSON.stringify(apiResult, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default APITest;