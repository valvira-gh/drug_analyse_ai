import { type NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { createUser } from "../db";

const RegisterUserForm: React.FC = () => {
  async function register(formData: FormData) {
    "use server";
    let username = formData.get("username") as string;
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;

    await createUser(username, email, password);
  }

  return (
    <form
      action={register}
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
