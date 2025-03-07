import React from 'react';
import useApi from '@/hooks/useApi';

function APITest() {
    const { data: apiResult, loading, error, callApi } = useApi('http://0.0.0.0:8000/random_data');

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                onClick={callApi}
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