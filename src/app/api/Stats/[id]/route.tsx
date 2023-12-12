import { connect } from "@/dbConfig/dbConfig";
import { UserStats } from "@/models/stats";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const url = request.url;
    const index = url.lastIndexOf("/");
    const id = url.slice(index + 1);
    console.log(id);
    const data = await UserStats.findOne({userId:id});
    console.log(data);
    return NextResponse.json({
      message: "Data fetch sucessfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: "Error Fetching in stats" },
      { status: 400 }
    );
  }
}
