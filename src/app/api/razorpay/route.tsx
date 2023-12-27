import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

connect();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY as string,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export async function POST (request: NextRequest) {
  const {userId,amount,sportname} = await request.json();
  console.log(userId);
  console.log(amount);
  console.log(sportname);
  const payment_capture = 1;
  // const amount = 1 * 100; // amount in paisa. In our case it's INR 1
  // const money = 100;
  const currency = "INR";
  const options = {
    amount:amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      // These notes will be added to your transaction. So you can search it within their dashboard.
      // Also, it's included in webhooks as well. So you can automate it.
      paymentFor: "testingDemo",
      userId,
      sportname,
    },
  };

  const order = await instance.orders.create(options);
  return NextResponse.json({ msg: "success", order });
}
