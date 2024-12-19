import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [currentstate, setCurrentState] = useState(0);
    const [delay, setDelay] = useState(500);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (delay < 500) {
            alert('Delay must be at least 500');
            return;
        }

        await onSubmit({ currentstate, delay });
        onClose(); // Close the modal after submitting
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 p-6 rounded shadow-md">
                <h2 className="text-lg font-bold mb-4">Edit Sensor State</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Current State:</label>
                        <select
                            value={currentstate}
                            onChange={(e) => setCurrentState(parseInt(e.target.value))}
                            className="border p-2 w-full text-black"
                        >
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Delay (ms):</label>
                        <input
                            type="number"
                            value={delay}
                            onChange={(e) => setDelay(e.target.value)}
                            className="border p-2 w-full text-black"
                            min="500"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-red-500 px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
