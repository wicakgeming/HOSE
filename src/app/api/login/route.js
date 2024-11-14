import { verifyUser } from '@/libs/user';

export const POST = async (req) => {
  try {
    const { name, password } = await req.json();

    const user = await verifyUser(name, password);
    if (user) {
      // Login berhasil
      return new Response(JSON.stringify({ message: 'Login successful', user }), { status: 200 });
    } else {
      // Jika nama atau password salah
      return new Response(JSON.stringify({ message: 'Invalid name or password' }), { status: 401 });
    }
  } catch (error) {
    console.error('Error in login handler:', error); // Tambahkan logging di sini
    return new Response(JSON.stringify({ message: 'Server error', error: error.message }), { status: 500 });
  }
};
