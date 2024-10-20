import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ApplicationRateChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'line',
        height: 350
      },
      series: [{
        name: "Applications",
        data: [20, 40, 35, 50, 49, 60, 70, 91, 120]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      title: {
        text: 'Application Rate Over Time',
        align: 'left'
      }
    };

    const chart = new ApexCharts(document.querySelector("#applicationRateChart"), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div id="applicationRateChart"></div>;
};

export default ApplicationRateChart;
