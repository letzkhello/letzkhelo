
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import Orders from "@/models/orders";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { products, delieveryLocation, paid, totalPrice, date,phoneNo,orderCompleted,name,email } =
      reqBody;


    const AllOrders = new Orders({
        products,
        delieveryLocation,
        paid,
        totalPrice,
        date,
        phoneNo,
        orderCompleted,
        name,
        email
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      auth: {
        user: "letzkhello@gmail.com",
        pass: "ccir vjgl vxsd liuc",
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions = {
      from: "letzkhello@gmail.com",
      to: email,
      subject: `Order Placed Successfully`,
      text: `Dear ${name},\n\nCongratulations! Your Order for the LetzKhelo ${products.map((product:any)=>product.productName)} has been successfully confirmed on ${date}. 
      Your address: ${delieveryLocation}
      Total Amount: Rs. ${totalPrice}`
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
 

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
