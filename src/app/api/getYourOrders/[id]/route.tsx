
export const revalidate = 0;


import { connect } from "@/dbConfig/dbConfig";
import Orders from "@/models/orders";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const url = request.url;
    const index = url.lastIndexOf("/");
    const email = url.slice(index + 1);
    // console.log(Id,"my message");

      const data = await Orders.find({ email });
      // console.log(data);
      return NextResponse.json({
        message: "Data fetch successfully",
        data: data,
        success: true,
      });

  } catch (error: any) {
    console.error(error.message);
    console.error(error.stack);

    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
