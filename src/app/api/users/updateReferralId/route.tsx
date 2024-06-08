import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PATCH(request: NextRequest) {
  if (request.method !== "PATCH") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const { email, referral_code } = await request.json();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    user.referral_code = referral_code;

    await user.save();

    return NextResponse.json(
      { message: "Referral ID updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
