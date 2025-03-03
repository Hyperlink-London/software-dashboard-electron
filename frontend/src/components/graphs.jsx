import React, { useState, useEffect } from 'react';
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

const LineGraph = () => {
    // Add state for the random data
    const [randomData, setRandomData] = useState([]);

    // Generate data only once when component mounts
    useEffect(() => {
        const newData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
        setRandomData(newData);
    }, []); // Empty dependency array means this runs once on mount

    // Chart options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
            
                text: 'Random Data Line Graph',
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
                    color: 'white'
                }
            }
        }
    };

    // Chart data
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [
            {
                label: 'Random Values',
                data: randomData,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.4
            }
        ]
    };

    return (
        <div className="h-full w-full">
            <Line options={options} data={data} />
        </div>
    );
};

export default LineGraph;
