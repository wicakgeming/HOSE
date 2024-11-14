import { createUser } from '@/libs/user';

// Fungsi untuk menangani request POST
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    // Panggil fungsi createUser untuk menambahkan user ke database
    const newUser = await createUser(name, email, password, role);

    return new Response(JSON.stringify({ message: 'User created successfully', user: newUser }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating user', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
