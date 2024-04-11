import LoginForm from "./LoginForm";
import Link from "next/link";
import { sql } from "@vercel/postgres";

const User = async ({ params }: { params: { id: number } }) => {
  const { rows } = await sql`SELECT * FROM Users WHERE id=${params.id}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id}: {row.username}
        </div>
      ))}
    </div>
  );
};

const LoginPage = async () => {
  const params = {
    id: 1,
  };

  return (
    <section className="flex flex-col items-center p-4 min-h-1/2 justify-evenly">
      <h2 className="text-2xl text-sky-900 text-center my-6">
        Login or{" "}
        <span>
          <Link
            href={`/register-user`}
            className="text-2xl font-bold text-sky-500"
          >
            Register User
          </Link>
        </span>{" "}
      </h2>

      <LoginForm />
      <User params={{ id: 1 }} />
    </section>
  );
};

export default LoginPage;
