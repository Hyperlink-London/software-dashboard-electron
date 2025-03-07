import { useState } from 'react';
import axios from 'axios';

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const callApi = async () => {
        setLoading(true);
        setError(null); // Reset error before new request
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, callApi };
};

export default useApi;