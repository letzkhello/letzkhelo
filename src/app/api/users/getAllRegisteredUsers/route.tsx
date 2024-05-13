export const revalidate = 0;

import { NextRequest, NextResponse } from "next/server";
import bookForCompetetion from "@/models/competetion";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const users = await bookForCompetetion.find();
    return NextResponse.json({
      mesaaage: "All Registered User found",
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
