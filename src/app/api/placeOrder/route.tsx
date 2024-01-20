
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import Orders from "@/models/orders";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { products, delieveryLocation, paid, totalPrice, date,phoneNo,orderCompleted } =
      reqBody;


    const AllOrders = new Orders({
        products,
        delieveryLocation,
        paid,
        date,
        totalPrice,
        phoneNo,
        orderCompleted,
    });

    await AllOrders.save();

    return NextResponse.json({
      message: "Order placed successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      { error: "Error placing order" },
      { status: 400 }
    );
  }
}
