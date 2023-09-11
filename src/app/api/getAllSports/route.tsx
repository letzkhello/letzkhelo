
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import AddSport from "@/models/sport";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const allSports = await AddSport.find();
    return NextResponse.json(allSports);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching in All Sports" },
      { status: 500 }
    );
  }
}
