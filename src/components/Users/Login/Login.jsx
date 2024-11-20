import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, password }),
        });

        if (response.ok) {
            // Redirect to homepage if login is successful
            router.push('/');
        } else {
            const data = await response.json();
            setError(data.message || 'Login failed');
        }
        } catch (err) {
        setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-lg shadow-md w-80">
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                type="submit"
                className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
                >
                Login
                </button>
            </form>
            </div>
        </div>
    )
}

export default Login