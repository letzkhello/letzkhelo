
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import AddBlog from "@/models/blogs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, description, image, author,date  } =
      reqBody;


    const allBlogs = new AddBlog({
        title,
        author,
        date,
        description,
        image,
    });

    await allBlogs.save();

    return NextResponse.json({
      message: "Blog added successfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error,'error')

    return NextResponse.json(
      { error: "Error adding in Blog" },
      { status: 400 }
    );
  }
}
