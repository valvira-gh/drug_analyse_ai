"use client";
import React, { createContext, useState } from "react";

type UserContextTypes = {};

type UserTypes = {
  name: string;
  password: string;
  isLogged: boolean;
};

export const UserContext = createContext<UserContextTypes | undefined>(
  undefined
);

// Provider:
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserTypes>({
    name: "",
    password: "",
    isLogged: false,
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
