import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { bpm, spo, suhu } = body;

        // Lakukan validasi data jika diperlukan
        if (!bpm || !spo || !suhu) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Simpan data ke database menggunakan Prisma
        const newData = await prisma.dataCollection.create({
        data: {
            bpm: parseFloat(bpm),
            spo: parseFloat(spo),
            suhu: parseFloat(suhu),
        },
        });

        return NextResponse.json({ message: 'Data saved successfully', data: newData }, { status: 200 });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({ message: 'Error processing data' }, { status: 500 });
    }
    }
