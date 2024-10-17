import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { currentstate, delay } = body;
        
        if (currentstate === undefined || delay === undefined) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }
        if (currentstate !== 0 && currentstate !== 1) {
            return NextResponse.json({ message: 'Invalid value for currentstate. Must be 0 or 1.' }, { status: 400 });
        }
        if (delay < 500) {
            return NextResponse.json({ message: 'Invalid value for delay. Must be at least 500.' }, { status: 400 });
        }

        // Save data to the database using Prisma
        const newRecord = await prisma.kirimEsp.create({
            data: {
                currentstate: parseInt(currentstate),
                delay: parseInt(delay),
            },
        });

        return NextResponse.json({ message: 'Data saved successfully', data: newRecord }, { status: 200 });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({ message: 'Error processing data' }, { status: 500 });
    }
}
