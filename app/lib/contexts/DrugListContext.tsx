"use client";
import React, { createContext, useState } from "react";

export type DrugListContextTypes = {
  drugList: string[];
  setDrugList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const DrugListContext = createContext<DrugListContextTypes | undefined>(
  undefined
);

const DrugListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [drugList, setDrugList] = useState<string[]>([]);
  console.log("DrugListProvider", drugList);

  return (
    <DrugListContext.Provider value={{ drugList, setDrugList }}>
      {children}
    </DrugListContext.Provider>
  );
};

export default DrugListProvider;
