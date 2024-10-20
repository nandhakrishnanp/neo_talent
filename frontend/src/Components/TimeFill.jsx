import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const TimeToFillChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'bar',
        height: 350
      },
      series: [{
        data: [30, 25, 35, 40, 45, 50]
      }],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        categories: ['IT', 'HR', 'Sales', 'Marketing', 'Finance', 'Operations']
      },
      title: {
        text: 'Time to Fill Positions (Days)',
        align: 'left'
      }
    };

    const chart = new ApexCharts(document.querySelector("#timeToFillChart"), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div id="timeToFillChart"></div>;
};

export default TimeToFillChart;
