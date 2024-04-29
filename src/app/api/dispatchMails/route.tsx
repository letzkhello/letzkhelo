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
      html: `  
      <h1 style="color: #333;">🎉 Get Ready for an Exciting Arm Wrestling Event - <b>Letzkhelo</b> is Back! 🎉</h1>  
      <p>Dear <b>${user.name}</b>,</p>  
      <p>Greetings to all our enthusiastic and passionate arm wrestling contenders! We hope this email finds you in high spirits and ready to flex those muscles because we have some thrilling news to share.</p>  
      <p>We are thrilled to announce that <b>Letzkhelo</b> is making a comeback! Mark your calendars for <b>May 5th</b>, as we are gearing up to host another electrifying Arm Wrestling event. Get ready to unleash your inner strength and compete against fellow athletes in a display of power and skill.</p>  
      <p>Registration are open !!!. Please note that spots are limited, and once registration closes, they will not be available. This is your chance to seize the opportunity and showcase your prowess on the arm wrestling stage.</p>  
      <p>So, dust off those arm wrestling gloves, start training, and get prepared to give it your all. We are eagerly anticipating your participation and cannot wait to see you all there, ready to dominate the competition.</p>  
      <p>Stay tuned for further updates, and in the meantime, keep up the hard work and dedication to your craft.</p>  
      <p>Best regards,</p>  
      <p><b>Team Letzkhelo</b><br>  
      +91 87438 37089, +91 95605 50695 </p>  
    `};  


let transporter = nodemailer.createTransport({  
    service: 'gmail',  
    auth: {  
      user: 'letzkhello@gmail.com',  
      pass: 'ccir vjgl vxsd liuc',  
    },  
  });  

  try {  
    let info = await transporter.sendMail(mailOptions);  
    console.log('Message sent: %s', user.email);  
  } catch (error) {  
    console.error('Error sending email to: ', user.email, error);  
  }  
} 

export async function GET(request: NextRequest) {
    try {
    //   const reqBody = await request.json();
       const users = await User.find();
    // const users = [{email: "sharmaash876@gmail.com", name: "Abhishek Sharma"}]
       console.log(users, "users")

       for (const user of users) {
         await sendEmail(user); // Send email to each user  
       }  
  
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
  