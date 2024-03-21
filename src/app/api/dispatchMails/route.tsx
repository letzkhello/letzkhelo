import nodemailer from "nodemailer";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/User";

connect();

async function sendEmail(user:any) {  
    let mailOptions = {  
      from: 'letzkhello@gmail.com',  
      to: user.email,  
      subject: ' Get Ready for an Exciting Arm Wrestling Event - Letzkhelo is Back!',  
      text: 'Subject: Get Ready for an Exciting Arm Wrestling Event - Letzkhelo is Back! Dear Letzkhelo Players, \n Greetings to all our enthusiastic and passionate arm wrestling contenders! We hope this email finds you in high spirits and ready to flex those muscles because we have some thrilling news to share. \n We are thrilled to announce that Letzkhelo is making a comeback! Mark your calendars for March 31st, as we are gearing up to host another electrifying Arm Wrestling event. Get ready to unleash your inner strength and compete against fellow athletes in a display of power and skill. \n Registration for the event will open on March 25th. Please note that spots are limited, and once registration closes, they will not be available. This is your chance to seize the opportunity and showcase your prowess on the arm wrestling stage. \n So, dust off those arm wrestling gloves, start training, and get prepared to give it your all. We are eagerly anticipating your participation and cannot wait to see you all there, ready to dominate the competition. \n Stay tuned for further updates, and in the meantime, keep up the hard work and dedication to your craft. \n Best regards, \n [Your Name] \n [Your Position/Title] \n [Your Contact Information]',  
    };  
}

export async function POST(request: NextRequest) {
    try {
      const reqBody = await request.json();
       const users = await User.find();
       console.log(users, "users")

       let transporter = nodemailer.createTransport({  
        service: 'gmail',  
        auth: {  
          user: 'letzkhello@gmail.com',  
          pass: 'LetzKhelo@0001',  
        },  
      });  
       
  
      return NextResponse.json({
        message: "Mail posted successfully",
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
  