import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = ({ podData }) => {
    const validDataPoints = podData.filter(item => item.demo !== null && item.time !== null).length;
    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0 // Disable animation
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: `Pod Demo Values Over Time (${validDataPoints} data points)`,
                color: 'white',
            }
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'white'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'white',
                    maxRotation: 45,
                    minRotation: 45
                },
                display: true
            }
        },
        elements: {
            point: {
                radius: 2,
                hoverRadius: 4,
                hitRadius: 4
            },
            line: {
                tension: 0.4
            }
        }
    };

    // Process the pod data
    //Todo: Change to Sliding Window?
    const validData = podData
        .filter(item => item.demo !== null && item.time !== null)
        .sort((a, b) => new Date(a.time) - new Date(b.time));
    const labels = validData.map(item => new Date(item.time).toLocaleTimeString());
    const demoValues = validData.map(item => item.demo);

    // Validate data
    console.log('Data points:', {
        total: podData.length,
        valid: validData.length,
        labels: labels.length,
        values: demoValues.length
    });

    // Chart data
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Demo Values',
                data: demoValues,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.4,
                pointRadius: 2,
                pointHoverRadius: 4,
                spanGaps: false
            }
        ]
    };

    return (
        <div className="h-full w-full">
            <div className="text-white mb-2">Total data points: {podData.length} (Valid: {validDataPoints})</div>
            <Line options={options} data={data} />
        </div>
    );
};

export default LineGraph;
