"use client";
import { InputComponent } from "../components/ui/FormComponents";
import { useState } from "react";
import { handleUser } from "./actions";

const RegisterUserForm: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (formData: FormData) => {
    handleUser(formData, setUser);
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center border-2 border-sky-500 p-4 m-4"
    >
      <div className="flex flex-col items-center">
        <label htmlFor="email" className="text-xl text-sky-800">
          Email:
        </label>
        <InputComponent nameProp="email" typeProp="email" />
      </div>

      <div className="flex flex-col items-center">
        <label htmlFor="username" className="text-xl text-sky-800">
          Username:
        </label>
        <InputComponent nameProp="username" typeProp="text" />
      </div>

      <div className="flex flex-col items-center">
        <label htmlFor="password" className="text-xl text-sky-800">
          Password:
        </label>
        <InputComponent nameProp="password" typeProp="password" />
      </div>

      <button
        type="submit"
        className="border border-sky-400 rounded-md mt-2 bg-sky-600 text-sky-100 text-xl px-1 py-1"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterUserForm;
