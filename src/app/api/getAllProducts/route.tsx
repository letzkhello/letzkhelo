
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import Addproduct from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const allProducts = await Addproduct.find();
    return NextResponse.json(allProducts);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching in All Product" },
      { status: 500 }
    );
  }
}
