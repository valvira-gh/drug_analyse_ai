import RegisterUserForm from "@/app/register-user/RegisterUserForm";

const RegisterUserPage = () => {
  return (
    <section className="flex flex-col items-center m-4">
      <h2 className="text-2xl text-sky-900 text-center mt-2 mb-4">
        Register User Page
      </h2>
      <RegisterUserForm />
    </section>
  );
};

export default RegisterUserPage;
