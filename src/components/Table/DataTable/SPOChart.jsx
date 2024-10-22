import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import dayjs from 'dayjs';
import { getDataResponse } from '@/libs/api-libs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SPOChart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getDataResponse('v1', 'data');
    setData(response.data || []); // Set data from the response, or fallback to an empty array
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const refresh = setInterval(() => {
      fetchData(); // Fetch every 2 seconds
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(refresh);
  }, []);

  const chartData = {
    labels: data.map((item) => dayjs(item.createdAt).format('HH:mm:ss')),
    datasets: [
      {
        label: 'SPo',
        data: data.map((item) => item.spo),
        borderColor: '#22D3EE',
        backgroundColor: 'rgba(34, 211, 238, 0.5)',
        tension: 0.4,
        pointBackgroundColor: '#22D3EE',
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: '#FFFFFF' } , reverse: true },
      y: { ticks: { color: '#FFFFFF' }, beginAtZero: true },
    },
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SPOChart;
