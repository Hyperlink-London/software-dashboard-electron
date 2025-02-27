import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';

function Speedometer() {
    const plotRef = useRef(null); // Reference to the div for Plotly

    useEffect(() => {
        const data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: 450,
                title: { text: "Speed" },
                type: "indicator",
                mode: "gauge+number",
                delta: { reference: 400 },
                gauge: { axis: { range: [null, 500] } }
            }
        ];

        const layout = { width: 500, height: 400 };
        Plotly.newPlot(plotRef.current, data, layout); // Use the reference here
    }, []);

    return (
        <div className="bg-gray-800 rounded-lg shadow p-4 h-full flex-grow">
            <div ref={plotRef} id="myDiv" /> {/* This is where Plotly will render the chart */}
        </div>
    );
}

export default Speedometer;