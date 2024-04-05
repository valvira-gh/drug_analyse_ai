"use client";
import { ButtonPrimary } from "../components/ui/ButtonPrimary";
import React, { useState, useContext } from "react";
import { DrugListContext } from "../lib/contexts/DrugListContext";
import { DrugListContextTypes } from "@/app/lib/contexts/DrugListContext";

const DrugListForm = () => {
  const { drugList, setDrugList } = useContext(
    DrugListContext
  ) as DrugListContextTypes;
  const [newDrug, setNewDrug] = useState({
    name: "",
    strength: "",
    dosage: "",
  });

  const submitDrug = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDrug.name && newDrug.strength && newDrug.dosage) {
      setDrugList((prevList) => [
        ...prevList,
        {
          id: prevList.length + 1,
          name: newDrug.name,
          strength: newDrug.strength || "",
          dosage: newDrug.dosage || "",
        },
      ]);
      setNewDrug({ name: "", strength: "", dosage: "" });
    }
  };
  console.log(drugList);

  return (
    <form
      onSubmit={submitDrug}
      className="flex justify-evenly border border-sky-200 rounded-sm p-1 w-10/12 tablet:justify-evenly laptop:flex-col laptop:items-center "
    >
      <div className="flex flex-col w-max p-2">
        <div className="m-1 flex flex-col items-center">
          <label
            htmlFor="drug-name"
            className="text-xl text-sky-800 text-center tablet:text-2xl"
          >
            Drug Name:
          </label>
          <input
            name="drug-name"
            className="mt-1 text-lg tablet:text-xl p-1 tablet:p-2 bg-sky-100 text-sky-800 mobile:w-10/12 tablet:w-11/12 "
            type="text"
            value={newDrug.name}
            onChange={(e) => setNewDrug({ ...newDrug, name: e.target.value })}
          />
        </div>

        <div className="flex justify-evenly mt-2">
          <div className="flex flex-col items-center">
            <label
              htmlFor="drug-strength"
              className="text-xl tablet:text-2xl text-sky-800"
            >
              Strength:
            </label>
            <input
              name="drug-strenght"
              className="mt-1 text-lg tablet:text-xl p-1 tablet:p-2 bg-sky-100 text-sky-800 w-16"
              type="text"
              value={newDrug.strength}
              onChange={(e) =>
                setNewDrug({ ...newDrug, strength: e.target.value })
              }
            />
          </div>
          <div className=" flex flex-col items-center">
            <label
              htmlFor="drug-dosage"
              className="text-xl tablet:text-2xl text-sky-800"
            >
              Dosage:
            </label>
            <input
              name="drug-dosage"
              className="mt-1 text-lg tablet:text-xl p-1 tablet:p-2 bg-sky-100 text-sky-800 w-16"
              type="text"
              value={newDrug.dosage}
              onChange={(e) =>
                setNewDrug({ ...newDrug, dosage: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="border-2 border-sky-500 bg-sky-700 text-xl font-bold px-2 py-1 rounded-md m-2 tablet:w-40 laptop:w-48"
      >
        Add Drug
      </button>
    </form>
  );
};

export default DrugListForm;
