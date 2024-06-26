import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  try {
    await sql`
            CREATE TABLE IF NOT EXISTS Users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `;

    const result = await sql`
            INSERT INTO Users (username, email, password)
            VALUES (${username}, ${email}, ${password});
        `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
