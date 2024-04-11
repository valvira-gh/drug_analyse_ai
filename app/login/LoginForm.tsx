"use client";
import { UserContext } from "@/app/lib/contexts/UserContext";
import { UserContextTypes } from "@/app/lib/types";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUser } = useContext(UserContext) as UserContextTypes;
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: username,
      password: password,
      isLogged: true,
    });
    router.push("/");
    console.log(user);
  };

  return (
    <form className="flex flex-col items-center border border-sky-500 bg-sky-300 rounded-md p-4 pt-6">
      <div className="flex flex-col items-center m-2">
        <label htmlFor="username" className="text-xl text-sky-900 m-1">
          Username:
        </label>
        <input
          type="text"
          className="bg-sky-500 border border-gray-700 p-2 rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center m-2">
        <label htmlFor="password" className="text-xl text-sky-900 m-1">
          Password:
        </label>

        <input
          type="password"
          className="bg-sky-500 border border-gray-700 p-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-sky-600 text-white p-2 rounded-lg mt-6 border-2  text-xl font-bold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
