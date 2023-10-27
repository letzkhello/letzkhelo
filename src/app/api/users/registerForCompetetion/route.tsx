import { connect } from "@/dbConfig/dbConfig";
import {bookForCompetetion} from "@/models/competetion";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

connect();
async function sendAppointmentConfirmationEmail(patientName: any,testName:any,email:any,date:any) {
  const useremail = email;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    auth: {
      user: "letzkhello@gmail.com",
      pass: "xlrk kauh tqfu bxkw",
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const mailOptions = {
    from: "letzkhello@gmail.com",
    to: useremail,
    subject: `${testName} Sports Competition Registration Confirmation`,
    text: `Dear ${patientName},\n\nCongratulations! Your registration for the LetzKhelo Sports Competition has been successfully confirmed. We're excited to have you on board.\n\nEvent Details:
    - Event Name: ${testName}
    -Date:${date}
   
    Please make sure to arrive at least 30 minutes before the event starts. If you have any questions or need further assistance, feel free to contact us at [contact 8851840604].\n\nBest of luck, and may the best athlete win!\n\nBest regards,\nThe LetzKhelo Team`,
  
  };
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      userName,
      userEmail,
      date,
      sportName,
      registrationPrice,
      weight,
      age,
      phoneNumber,
    } = reqBody;

    const bookingCompetetion = new bookForCompetetion({
      userName,
      date,
      userEmail,
      sportName,
      registrationPrice,
      weight,
      age,
      phoneNumber,
    });

    await bookingCompetetion.save();
    await sendAppointmentConfirmationEmail(userName, sportName, userEmail,date);
    return NextResponse.json({
      message: "Competetion Book successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      { error: "Error Booking in Competetion" },
      { status: 400 },
    );
  }
}
