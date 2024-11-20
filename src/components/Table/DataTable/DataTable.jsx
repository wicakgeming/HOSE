import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getDataResponse } from '@/libs/api-libs';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to control if all data is shown

  const fetchData = async () => {
    const response = await getDataResponse('v1', 'data');
    setData(response.data || []); // Set data from the response, or an empty array if undefined
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const refresh = setInterval(() => {
      fetchData(); // Fetch every 2 seconds
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(refresh);
  }, []);

  // Determine which data to display based on the showAll state
  const displayedData = showAll ? data : data.slice(0, 10);

  return (
    <div className="bg-gray-900 p-4 rounded-md relative">
      {/* Button positioned in the top-left corner */}

      <h2 className="text-white text-lg mb-4">Data Updated</h2>
      <div className="">
        {data.length > 10 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-500 hover:text-blue-700"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>
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
          {displayedData.map((item) => (
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
