import { sql } from "@vercel/postgres";

export async function getUserById({
  params,
}: {
  params: { id: number; username: string; email: string; password: string };
}) {
  const { id, username, email, password } = params;
  const { rows } = await sql`SELECT * FROM users WHERE id = ${id}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id}: {row.username}
        </div>
      ))}
    </div>
  );
}
