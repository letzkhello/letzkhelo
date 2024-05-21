import { connect } from "@/dbConfig/dbConfig";
import AddEvent from "@/models/events";
import { NextRequest, NextResponse } from "next/server";
import { parse } from 'url';

connect();

export async function GET(request: NextRequest) {
  try {
    const { url } = request;
    const { query } = parse(url || '', true);

    const { date, dateFilter, minFees, maxFees } = query;

    // Prepare filter criteria
    const filter: any = {};
    if (date && dateFilter) {
      filter.date = { [dateFilter as string]: date };
    }
    if (minFees || maxFees) {
      filter.entryFees = {};
      if (minFees) {
        filter.entryFees.$gte = minFees;
      }
      if (maxFees) {
        filter.entryFees.$lte = maxFees;
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
