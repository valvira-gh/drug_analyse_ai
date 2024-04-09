"use client";
import React, { createContext, useState } from "react";
import { UserContextTypes, UserTypes } from "../types";

// Context:
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
