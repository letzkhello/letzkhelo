
export const revalidate = 0;

import { connect } from "@/dbConfig/dbConfig";
import AddBlog from "@/models/blogs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const allBlogs = await AddBlog.find();
    return NextResponse.json(allBlogs);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching in All Sports" },
      { status: 500 }
    );
  }
}
