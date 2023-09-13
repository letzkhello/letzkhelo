

export const revalidate = 0;

import AddSport from "@/models/sport";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request: NextRequest) {
  if (request.method !== 'PUT') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  const { id, isFeatured } = await request.json();

  try {
    const sport = await AddSport.findById(id);

    if (!sport) {
      return NextResponse.json({ message: 'Lab test not found' }, { status: 404 });
    }

    sport.isFeatured = isFeatured;
    await sport.save();

    return NextResponse.json({ message: 'Lab test updated successfully' }, { status: 200 });
  } catch (error: any) {
    console.log(error,'error')
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}