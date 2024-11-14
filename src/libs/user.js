import bcrypt from 'bcrypt';
import prisma from '@/libs/prisma';

export async function createUser(name, email, plainPassword, role) {
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });
}


export async function verifyUser(email, password) {
  try {
      // Mencari pengguna berdasarkan email
      const user = await prisma.user.findFirst({
          where: { email },
      });

      // Jika user tidak ditemukan, return null
      if (!user) return null;

      // Cek password dengan bcrypt
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return null;

      // Return data user yang diperlukan untuk session
      return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
      };
  } catch (error) {
      console.error('Error in verifyUser:', error); // Logging error
      throw error;
  }
}

// export async function verifyUser(name, password) {
//   try {
//     // Menggunakan findFirst untuk mencari user berdasarkan nama
//     const user = await prisma.user.findFirst({
//       where: { name },
//     });

//     // Jika user tidak ditemukan, return null
//     if (!user) return null;

//     // Cek password dengan bcrypt
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) return null;

//     // Return user jika password valid
//     return user;
//   } catch (error) {
//     console.error('Error in verifyUser:', error); // Logging error
//     throw error;
//   }
// }