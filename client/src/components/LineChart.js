import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getGraphData');
        const apiData = response.data;

        const labels = apiData.map(item => {
          const date = new Date(item.timestamp);
          return date.getFullYear();
      });
        const data = apiData.map(item => item.value);
        setChartData({
          labels,
          datasets: [
            {
              label: 'Growth',
              data,
              fill: 'start',
              backgroundColor: 'rgba(37, 205, 37, 0.1)',
              borderColor: '#25CD25',
              borderWidth: 2,
              tension: 0.4,
              pointRadius: 0,
              pointHitRadius: 10,
              borderDash: [5, 5]
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: true,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          borderDash: [5, 5],
        },
        ticks: {
          callback: function(value, index, values) {
            return value.toLocaleString();
          }
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    animation: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.5,
        to: 0,
        loop: false
      }
    },
  };

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      {chartData.labels && chartData.datasets ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default LineChart;
