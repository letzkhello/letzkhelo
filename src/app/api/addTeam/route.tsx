
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import AddTeam from "@/models/Team";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { teamName, captainName, noOfPlayers, location, instagramId,phoneNumber  } =
      reqBody;

    // You can add any necessary validations here before proceeding with the Sport creation.

    const AllTeam = new AddTeam({
        teamName,
        captainName,
        noOfPlayers,
        location,
        instagramId,
        phoneNumber,
    });

    await AllTeam.save();

    return NextResponse.json({
      message: "Team added successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      { error: "Error adding in Team" },
      { status: 400 }
    );
  }
}
