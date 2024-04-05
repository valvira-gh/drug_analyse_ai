"use client";
import { ButtonPrimary } from "../components/ui/ButtonPrimary";
import React, { useState, useContext } from "react";
import { DrugListContext } from "../lib/contexts/DrugListContext";
import { DrugListContextTypes } from "@/app/lib/contexts/DrugListContext";

const DrugListForm = () => {
  const { setDrugList } = useContext(DrugListContext) as DrugListContextTypes;
  const [newDrug, setNewDrug] = useState({
    name: "",
    strength: "",
    dosage: 0,
  });

  const submitDrug = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitDrug} className="flex">
      <div className="flex flex-col w-max items-center justify-center justify-center">
        <div className="m-1 flex flex-col items-center">
          <label htmlFor="drug-name" className="text-xl text-sky-800">
            Drug Name:
          </label>
          <input
            name="drug-name"
            className="mt-1 text-lg p-1 bg-sky-100 text-sky-800"
            type="text"
            value={newDrug.name}
            onChange={(e) => setNewDrug({ ...newDrug, name: e.target.value })}
          />
        </div>

        <div className="flex">
          <div className="flex flex-col items-center">
            <label htmlFor="drug-strength" className="text-xl text-sky-800">
              Strength:
            </label>
            <input
              name="drug-strenght"
              className="mt-1 text-lg p-1 bg-sky-100 text-sky-800 w-1/2"
              type="text"
              value={newDrug.strength}
              onChange={(e) =>
                setNewDrug({ ...newDrug, strength: e.target.value })
              }
            />
          </div>
          <div className=" flex flex-col items-center">
            <label htmlFor="drug-dosage" className="text-xl text-sky-800">
              Dosage:
            </label>
            <input
              name="drug-dosage"
              className="mt-1 text-lg p-1 bg-sky-100 text-sky-800 w-1/2"
              type="number"
              value={newDrug.dosage}
            />
          </div>
        </div>
      </div>

      <ButtonPrimary typeProp="submit" title="Add Drug" />
    </form>
  );
};

export default DrugListForm;
