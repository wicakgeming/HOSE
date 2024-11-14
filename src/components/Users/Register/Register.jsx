"use client";

import { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch('/api/createusers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
        });

        if (!res.ok) {
        const errorText = await res.text(); // Mendapatkan respons dalam bentuk teks
        throw new Error(errorText || 'Failed to create user');
        }

        const data = await res.json();
        setMessage(data.message);
    } catch (error) {
        setMessage(`Error: ${error.message}`);
    }
    };


    return (
        <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-white">Register New User</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="user">User</option>
                {/* <option value="admin">Admin</option> */}
            </select>
            <button
                type="submit"
                className="w-full p-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Register
            </button>
            </form>
            {message && <p className="text-center text-white">{message}</p>}
        </div>
        </div>
    );
    }

    export default Register;
