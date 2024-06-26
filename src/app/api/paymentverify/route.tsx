export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import  Payment  from "@/models/payment";
import Razorpay from "razorpay";
import shortid from "shortid";
import crypto from "crypto";

connect();

export async function POST(request: NextRequest) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    email,
    sportname,
  } = await request.json();
  console.log(request.body);
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  console.log("id==", body);

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET as string)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    console.log(Payment);

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      email,
      sportname,
    });

    //  return NextResponse.redirect(new URL('/paymentsuccess', req.url));
  } else {
    return NextResponse.json(
      {
        message: "fail",
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    {
      message: "success",
    },
    {
      status: 200,
    }
  );
}
