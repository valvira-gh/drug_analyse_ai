"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import { UserContext } from "@/app/components/lib/contexts/UserContext";
import DisplayLoginOrRegister from "./components/ui/DisplayLoginOrRegister";

const Home: React.FC = () => {
  const user = useContext(UserContext);
  const [display, setDisplay] = useState<string | null>(null);

  return (
    <main className="bg-sky-200 border border-sky-900">
      <div className=" flex flex-col items-center">
        <h3 className=" m-4 text-4xl text-sky-900">Home Page</h3>
        {user.isLogged ? (
          "Login"
        ) : (
          <DisplayLoginOrRegister display={display} setDisplay={setDisplay} />
        )}
      </div>
    </main>
  );
};

export default Home;
