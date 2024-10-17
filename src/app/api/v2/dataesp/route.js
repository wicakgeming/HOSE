import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await prisma.kirimEsp.findFirst({  // Use 'kirimEsp' instead of 'KirimESP'
            orderBy: {
                createdAt: 'desc',
            },
        });

        if (!data) {
            console.log('No data found in KirimEsp');
            return NextResponse.json({ message: 'No data found' }, { status: 404 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data', details: error.message }, { status: 500 });
    }
}
