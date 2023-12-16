// pages/api/getUser.js

import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest, res: NextResponse) {


const url = req.url;
const index = url.lastIndexOf("/");
const id = url.slice(index + 1);
console.log(id);

  try {
    // Ensure id is a string or number
    const user = await User.findOne({_id:id});;

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { user },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
