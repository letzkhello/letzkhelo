
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import Addproduct from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { productName, description, imageLink, expectedDelievery, price,
        discountedPrice,inStock,category  } =
      reqBody;


    const AllProduct = new Addproduct({
        productName,
        description,
        imageLink,
        expectedDelievery,
        price,
        discountedPrice,
        inStock,
        category
    });

    await AllProduct.save();

    return NextResponse.json({
      message: "product added successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      { error: "Error adding in product" },
      { status: 400 }
    );
  }
}
