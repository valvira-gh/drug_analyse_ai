import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function getUsers() {
  try {
    const { rows } = await sql`SELECT * FROM Users`;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
