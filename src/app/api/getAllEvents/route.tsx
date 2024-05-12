
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import AddEvent from "@/models/events";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    console.log("Hello")
    const allEvents = await AddEvent.find();
    return NextResponse.json(allEvents);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching in All Events" },
      { status: 500 }
    );
  }
}
