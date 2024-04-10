"use client";
import { createUser } from "@/app/api/register-user/route";
import { register } from "@/app/utils/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterUserForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register(new FormData(event.currentTarget));
    router.push("/login");
  };

  console.log(username, email, password);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center border-2 border-sky-700 rounded-md p-4"
    >
      <div className="flex flex-col items-center m-2">
        <label htmlFor="username" className="text-sky-900 text-lg">
          Username:
        </label>
        <input
          onChange={handleUsernameChange}
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
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
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
