import { connect } from "@/dbConfig/dbConfig";
import {bookForCompetetion} from "@/models/competetion";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

connect();

// Function to send the email
async function sendAppointmentConfirmationEmail(patientName: any,testName:any,email:any) {
  const useremail = email;
  console.log(useremail,"my msg")
  const transporter = nodemailer.createTransport({
    // configure your email provider here
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    auth: {
      user: "letzkhello@gmail.com",
      pass: "LetzKhelo@2415",
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const mailOptions = {
    from: "letzkhello@gmail.com",
    to: useremail,
    subject: "Appointment Confirmation",
    text: `Dear ${patientName},\n\nYour appointment for ${testName} has been successfully booked. Thank you for choosing us.\n\nBest regards,\nThe Appointment Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Appointment confirmation email sent to:", useremail);
  } catch (error) {
    console.error("Error sending appointment confirmation email:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      userName,
      // userId,
      // date,
      sportName,
      registrationPrice,
      weight,
      age,
      phoneNumber,
    } = reqBody;

    // console.log("first");
    // console.log(reqBody);

    // You can add any necessary validations here before proceeding with the appointment creation.

    const bookingCompetetion = new bookForCompetetion({
      userName,
      // userId,
      // date,
      sportName,
      registrationPrice,
      weight,
      age,
      phoneNumber,
    });

    // console.log("second",bookingCompetetion);


    await bookingCompetetion.save();

    // console.log("third");

    // Send the appointment confirmation email
    await sendAppointmentConfirmationEmail(userName, sportName, "negsanshuman14@gmail.com");

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
