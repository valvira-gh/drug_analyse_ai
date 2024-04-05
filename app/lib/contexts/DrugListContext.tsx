// DrugListContext.tsx
"use client";
import React, { createContext, useState } from "react";

export type Drug = {
  id: number;
  name: string;
  strength: string;
  dosage: string;
};

export type DrugListContextTypes = {
  drugList: Drug[];
  setDrugList: React.Dispatch<React.SetStateAction<Drug[]>>;
};

export const DrugListContext = createContext<DrugListContextTypes | undefined>(
  undefined
);

const DrugListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [drugList, setDrugList] = useState<Drug[]>([]);
  console.log("DrugListProvider", drugList);

  return (
    <DrugListContext.Provider value={{ drugList, setDrugList }}>
      {children}
    </DrugListContext.Provider>
  );
};

export default DrugListProvider;
