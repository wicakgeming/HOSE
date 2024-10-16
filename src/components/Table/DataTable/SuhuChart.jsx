import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getDataResponse } from '@/libs/api-libs';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SuhuChart = () => {
  // Dummy data including createdAt timestamps
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getDataResponse('v1', 'data');
    setData(response.data || []); // Set data from the response, or fallback to an empty array
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: data.map((item) => dayjs(item.createdAt).format('HH:mm:ss')),
    datasets: [
      {
        label: 'Suhu',
        data: data.map((item) => item.suhu),
        borderColor: '#F59E0B',
        backgroundColor: 'rgba(245, 158, 11, 0.5)',
        tension: 0.4,
        pointBackgroundColor: '#F59E0B',
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: '#FFFFFF' } },
      y: { ticks: { color: '#FFFFFF' }, beginAtZero: true },
    },
  };

  return (
    <div className="bg-gray-900 p-4 rounded-md">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SuhuChart;
