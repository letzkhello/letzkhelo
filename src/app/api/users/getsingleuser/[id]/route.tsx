// pages/api/updateLabTest.js

import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const url = request.url;
    const index = url.lastIndexOf("/");
    const Id = url.slice(index + 1);
    console.log(Id);

    // if (!Id || Id === 'undefined' || !mongoose.Types.ObjectId.isValid(Id)) {
    //   return NextResponse.json(
    //     { message: "Invalid or missing identifier" },
    //     { status: 400 } // Bad Request status code
    //   );
    // }

    if (Id.includes("@")) {
      const data = await User.findOne({ email: Id });
      console.log(data);
      return NextResponse.json({
        message: "Data fetch sucessfully",
        data: data,
        success: true,
      });
    } else {
      const data = await User.findOne({ _id: Id });
      console.log(data);
      return NextResponse.json({
        message: "Data fetch sucessfully",
        data: data,
        success: true,
      });
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
