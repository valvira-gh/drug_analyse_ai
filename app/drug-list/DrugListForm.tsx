"use client";
import { ButtonPrimary } from "../components/ui/ButtonPrimary";
import React, { useState, useContext } from "react";
import { DrugListContext } from "../lib/contexts/DrugListContext";
import { DrugListContextTypes } from "@/app/lib/contexts/DrugListContext";

const DrugListForm = () => {
  const { setDrugList } = useContext(DrugListContext) as DrugListContextTypes;
  const [newDrug, setNewDrug] = useState("");

  const submitDrug = (e: React.FormEvent) => {
    e.preventDefault();
    setDrugList((prevList) => [...prevList, newDrug]);
    setNewDrug("");
  };

  return (
    <form onSubmit={submitDrug}>
      <div className="flex flex-col items-center">
        <label htmlFor="drug-name" className="text-xl text-sky-800">
          Drug Name:
        </label>
        <input
          type="text"
          value={newDrug}
          onChange={(e) => setNewDrug(e.target.value)}
        />
      </div>
      <ButtonPrimary typeProp="submit" title="Add Drug" />
    </form>
  );
};

export default DrugListForm;
