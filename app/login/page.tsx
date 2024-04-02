import LoginForm from "@/app/components/ui/LoginForm";

const LoginPage = () => {
  const logIn = async (formData: FormData) => {
    "use server";

    console.log("click");
  };

  return (
    <section className="mt-4 flex flex-col items-center">
      <h3 className="text-2xl text-sky-900">Login Page</h3>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
