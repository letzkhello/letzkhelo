import { connect } from "@/dbConfig/dbConfig";
import AddEvent from "@/models/events";
import { NextRequest, NextResponse } from "next/server";
import { parse } from 'url';

export async function GET(request: NextRequest) {
  try {
    await connect();
    
    const { url } = request;
    const { query } = parse(url || '', true);

    const { minDate, maxDate, minFees, maxFees } = query;

    // Prepare filter criteria
    const filter: any = {};
    if (minDate || maxDate) {
      filter.date = {};
      if (minDate) {
        filter.date.$gte = new Date(minDate as string);
      }
      if (maxDate) {
        filter.date.$lte = new Date(maxDate as string);
      }
    }
    if (minFees || maxFees) {
      filter.entryFees = {};
      if (minFees) {
        filter.entryFees.$gte = parseFloat(minFees as string);
      }
      if (maxFees) {
        filter.entryFees.$lte = parseFloat(maxFees as string);
      }
    }

    // Query events based on filter
    const events = await AddEvent.find(filter);

    return NextResponse.json(events);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching events" },
      { status: 500 }
    );
  }
}
