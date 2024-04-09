"use client";
import { UserContext } from "@/app/lib/contexts/UserContext";
import { UserContextTypes } from "@/app/lib/types";
import { useContext } from "react";
import Link from "next/link";

const ClientHomePage: React.FC = () => {
  const { user } = useContext(UserContext) as UserContextTypes;

  return (
    <section className="flex flex-col items-center">
      {user.isLogged ? (
        <h2 className="text-2xl text-sky-900 text-center mt-2 mb-4">
          Welcome {user.name}!
        </h2>
      ) : (
        <>
          <h2 className="text-lg text-sky-700 text-center mt-2 mb-4">
            You're not currently logged in. <br /> Please login to access to use
            the app.
          </h2>
          <Link href={`/login`} className="text-sky-600 text-2xl font-bold">
            Login
          </Link>
        </>
      )}
    </section>
  );
};

export default ClientHomePage;
