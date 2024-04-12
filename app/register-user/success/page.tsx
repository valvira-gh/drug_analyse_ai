import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const DisplayRegisteredUser = async () => {
  const { rows } = await sql`
    SELECT * FROM Users
    ORDER BY id DESC
    LIMIT 1;
    `;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          <h3>{row.username}</h3>
          <p>{row.email}</p>
        </div>
      ))}
    </div>
  );
};

const SuccessPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-2xl text-sky-900 text-center mt-2 mb-4">Success!</h3>
      <DisplayRegisteredUser />
    </section>
  );
};

export default SuccessPage;
