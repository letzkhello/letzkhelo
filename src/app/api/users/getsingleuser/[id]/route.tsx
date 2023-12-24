// pages/api/updateLabTest.js

import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const url = request.url;
    const index = url.lastIndexOf("/");
    const Id = url.slice(index + 1);
    console.log(Id);
    const data = await User.findOne({_id:Id});
    console.log(data);
    return NextResponse.json({
      message: "Data fetch sucessfully",
      data: data,
      success: true,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
