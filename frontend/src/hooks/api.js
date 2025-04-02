import apiClient from '@/hooks/apiClient';

export const getBrakingData = async () => {
    const response = await apiClient.get('/braking_data');
    return response.data;
};

export const getSpeed = async () => {
    const response = await apiClient.get('/speed');
    return response.data;
};

export const getPodData = async () => {
    const response = await apiClient.get('v1/pod_data/read_pod_data?n=300');
    return response.data;
};