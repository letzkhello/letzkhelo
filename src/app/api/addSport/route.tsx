
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import AddSport from "@/models/sport";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { sportName, description, image, location  } =
      reqBody;

    // You can add any necessary validations here before proceeding with the Sport creation.

    const AllSport = new AddSport({
        sportName,
        description,
        image,
        location,
    });

    await AllSport.save();

    return NextResponse.json({
      message: "Sport added successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error adding in Sport" },
      { status: 400 }
    );
  }
}
