
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import AddEvent from "@/models/events";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { eventName, description, image, location, date, entryFees, locationLink, contactInfo  } =
      reqBody;


    const AllEvent = new AddEvent({
        eventName,
        description,
        image,
        location,
        date,
        entryFees,
        locationLink,
        contactInfo
    });

    await AllEvent.save();

    return NextResponse.json({
      message: "Event added successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      { error: "Error adding in Event" },
      { status: 400 }
    );
  }
}
