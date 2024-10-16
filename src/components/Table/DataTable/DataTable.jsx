import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getDataResponse } from '@/libs/api-libs';

const DataTable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getDataResponse('v1', 'data');
    setData(response.data || []); // Set data from the response, or an empty array if undefined
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-md">
      <h2 className="text-white text-lg mb-4">Data Updated</h2>
      <table className="min-w-full bg-gray-800">
        <thead>
          <tr className="text-gray-200">
            <th className="px-4 py-2">BPM</th>
            <th className="px-4 py-2">SPo</th>
            <th className="px-4 py-2">Suhu</th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-gray-300 border-b border-gray-700">
              <td className="px-4 py-2 text-center">{item.bpm}</td>
              <td className="px-4 py-2 text-center">{item.spo}</td>
              <td className="px-4 py-2 text-center">{item.suhu}°C</td>
              <td className="px-4 py-2 text-center">
                {dayjs(item.createdAt).format('HH:mm:ss')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
