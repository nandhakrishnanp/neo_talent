import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const CandidateQualityChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'pie',
        height: 350
      },
      series: [44, 55, 13, 43, 22],
      labels: ['LinkedIn', 'Indeed', 'Company Website', 'Referral', 'Job Fair'],
      title: {
        text: 'Candidate Quality by Source',
        align: 'left'
      }
    };

    const chart = new ApexCharts(document.querySelector("#candidateQualityChart"), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div id="candidateQualityChart"></div>;
};

export default CandidateQualityChart;
