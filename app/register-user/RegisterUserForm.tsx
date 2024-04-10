import { type NextRequest } from "next/server";

const RegisterUserForm: React.FC = () => {
  async function submitRegisterUser(formData: FormData) {
    "use server";
    const rawFormData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const response = await fetch("/api/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    if (response.ok) {
      console.log("User registered successfully");
    } else {
      console.error("User registration failed");
    }
  }

  return (
    <form
      action={submitRegisterUser}
      className="flex flex-col items-center border-2 border-sky-700 rounded-md p-4"
    >
      <div className="flex flex-col items-center m-2">
        <label htmlFor="username" className="text-sky-900 text-lg">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border bg-sky-300 border-sky-700 p-2 m-1"
        />
      </div>
      <div className="flex flex-col items-center m-2">
        <label htmlFor="email" className="text-sky-900 text-lg">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border bg-sky-300 border-sky-700 p-2 m-1"
        />
      </div>
      <div className="flex flex-col items-center m-2">
        <label htmlFor="password" className="text-sky-900 text-lg">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border bg-sky-300 border-sky-700 p-2 m-1"
        />
      </div>
      <button
        type="submit"
        className="bg-sky-900 text-sky-100 font-bold p-2 m-2 rounded-md text-lg"
      >
        Register User
      </button>
    </form>
  );
};

export default RegisterUserForm;
