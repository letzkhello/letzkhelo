
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
// import Users from "@/models/User";
import { User } from "@/models/User";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function PATCH(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { userId,imageLink  } =
      reqBody;


    // const AllSport = new AddSport({
    //     sportName,
    //     description,
    //     image,
    //     location,
    //     date,
    //     entryFees,
    //     locationLink,
    // });

    // await AllSport.save();


    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: { imageLink } },
        { new: true }
      );
  
      if (!updatedUser) {
        return NextResponse.json(
            { error: "User Not Found" },
            { status: 400 }
          );
      }

    return NextResponse.json({
      message: "User updated successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      { error: "Error updating User" },
      { status: 400 }
    );
  }
}
