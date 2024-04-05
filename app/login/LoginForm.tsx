"use client";
import {
  UserContext,
  UserContextTypes,
  UserTypes,
} from "../lib/contexts/UserContext";
import { useContext, useState } from "react";
import { ButtonPrimary } from "../components/ui/ButtonPrimary";
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
    <form className="flex flex-col items-center">
      <input
        type="text"
        className="bg-sky-400 border border-gray-300 p-2 rounded-lg mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="bg-sky-400 border border-gray-300 p-2 rounded-lg mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-sky-500 text-white p-2 rounded-lg"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
