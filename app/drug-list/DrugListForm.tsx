"use client";
import { ButtonPrimary } from "../components/ui/ButtonPrimary";
import { useState } from "react";

const DrugListForm = () => {
  const [drugList, setDrugList] = useState([]);
  const [name, setName] = useState("");

  const submitDrug = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(drugList);

    setDrugList((prevList) => [...prevList, name]);
  };
  console.log(name);
  console.log(drugList);

  return (
    <form onSubmit={submitDrug}>
      <div className="flex flex-col items-center">
        <label htmlFor="drug-name" className="text-xl text-sky-800">
          Drug Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <ButtonPrimary typeProp="submit" title="Add Drug" />
    </form>
  );
};

export default DrugListForm;
