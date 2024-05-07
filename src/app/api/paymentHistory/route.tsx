import { connect } from "@/dbConfig/dbConfig";
import Payment from "@/models/payment";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: any) {
  try {
    console.log(request.url);
    const url = request.url;
        const emailStartIndex = url.indexOf('email=') + 'email='.length;
        const emailEndIndex = url.indexOf('&', emailStartIndex) !== -1 ? url.indexOf('&', emailStartIndex) : url.length;
        const email = url.substring(emailStartIndex, emailEndIndex);

        // Decode the email parameter in case it's URL encoded
        const decodedEmail = decodeURIComponent(email);
    
    // Find all payments associated with the user's email
    console.log(decodedEmail);
    
    const userPayments = await Payment.find({ email: decodedEmail });

    return NextResponse.json({ payments: userPayments }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching payments for this user" },
      { status: 500 }
    );
  }
}
// curl -X GET "http://localhost:3000/api/paymentHistory?email=sharmaash876@gmail.com"
