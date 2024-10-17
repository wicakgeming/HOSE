// components/SensorTable.js
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getDataResponse, postDataResponse } from '@/libs/api-libs';
import Modal from './Modal';

const SensorTable = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchData = async () => {
        const response = await getDataResponse('v2', 'dataesp');
        setData(response.data || []);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleModalSubmit = async (formData) => {     
    try {
        await postDataResponse('v2', 'kirimesp', formData);
        await fetchData(); // Refresh data after successful submission
        setIsModalOpen(false); // Close the modal after submission
    } catch (error) {
        console.error("Error submitting data:", error);
    }
};
        
    return (
        <div className="bg-gray-900 p-4 rounded-md">
            <h2 className="text-white text-lg mb-4">Data Updated</h2>
            <table className="min-w-full bg-gray-800">
                <thead>
                    <tr className="text-gray-200">
                        <th className="px-4 py-2">Sensor</th>
                        <th className="px-4 py-2">Kondisi</th>
                        <th className="px-4 py-2">Delay</th>
                        <th className="px-4 py-2">Last Updated</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && (
                        <tr key={data.id} className="text-gray-300 border-b border-gray-700">
                            <td className="px-4 py-2 text-center">esp1</td>
                            <td className="px-4 py-2 text-center">{data.currentstate}</td>
                            <td className="px-4 py-2 text-center">{data.delay}</td>
                            <td className="px-4 py-2 text-center">
                                {dayjs(data.createdAt).format('HH:mm:ss')}
                            </td>
                            <td className="px-4 py-2 text-center">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className='p-2 bg-gray-700 rounded'
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleModalSubmit}
            />
        </div>
    );
};

export default SensorTable
