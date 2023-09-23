
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import Teams from "@/models/Team";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const allTeams = await Teams.find();
    return NextResponse.json(allTeams);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching in All Teams" },
      { status: 500 }
    );
  }
}
