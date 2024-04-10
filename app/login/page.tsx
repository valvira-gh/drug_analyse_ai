import LoginForm from "./LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl text-sky-900 text-center mt-2 mb-4">
        Login Page
      </h2>
      <Link href={"/register-user"} className="text-xl font-bold text-sky-500">
        Register User
      </Link>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
