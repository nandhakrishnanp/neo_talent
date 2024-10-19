import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AgCharts } from 'ag-charts-react'; // Ensure you have ag-charts-react installed

 export const ChartExample = () => {
    // Chart Options: Control & configure the chart
    const [chartOptions, setChartOptions] = useState({
        // Data: Data to be displayed in the chart
        data: [
            { day: 'Monday', workingHours: 8 },
            { day: 'Tuesday', workingHours: 7 },
            { day: 'Wednesday', workingHours: 6 },
            { day: 'Thursday', workingHours: 8 },
            { day: 'Friday', workingHours: 5 },
        ],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'day', yKey: 'workingHours' }],
    });

    // Return the AgCharts component with options passed as prop
    return (
        
        <AgCharts className=' w-[500px]' options={chartOptions} />
    );
};

// Render component inside root element

