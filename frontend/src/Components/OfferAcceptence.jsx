import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const OfferAcceptanceRateChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'radialBar',
        height: 350
      },
      series: [85],
      plotOptions: {
        radialBar: {
          dataLabels: {
            value: {
              fontSize: '22px',
            }
          }
        }
      },
      title: {
        text: 'Offer Acceptance Rate',
        align: 'left'
      }
    };

    const chart = new ApexCharts(document.querySelector("#offerAcceptanceRateChart"), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div id="offerAcceptanceRateChart"></div>;
};

export default OfferAcceptanceRateChart;
