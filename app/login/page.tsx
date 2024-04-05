import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl text-sky-900 text-center mt-2 mb-4">
        Login Page
      </h2>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
