import LoginForm from "./LoginForm";
import Link from "next/link";

const LoginPage = () => {
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
    </section>
  );
};

export default LoginPage;
