


// pages/api/updateLabTest.js

import { connect } from "@/dbConfig/dbConfig";
import {User} from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PUT(request: NextRequest, response: NextResponse) {

  if (request.method !== "PUT") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const reqBody = await request.json();
const {
  email,
  age,
  weight,
  intrestedSport,
  instagramLink,
} = reqBody;

//   const { email } = await request.json();

  

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    user.age = age;
    user.weight = weight; 
    user.intrestedSport = intrestedSport; 
    user.instagramLink = instagramLink; 

    await user.save();

    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
