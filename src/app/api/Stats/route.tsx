import { connect } from "@/dbConfig/dbConfig";
import { UserStats } from "@/models/stats";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { userId, totalWins, totalCocWins, sportsName } = reqBody;

    const stats = new UserStats({
      userId,
      totalWins,
      totalCocWins,
      sportsName,
    });

    await stats.save();

    return NextResponse.json({
      message: "stats added successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: "Error adding in Stats" },
      { status: 400 }
    );
  }
}
