"use client";
import DrugListForm from "./DrugListForm";
import {
  DrugListContext,
  DrugListContextTypes,
} from "../lib/contexts/DrugListContext";
import { useContext, useState } from "react";

const DrugListTable = () => {
  const { drugList, setDrugList } = useContext(
    DrugListContext
  ) as DrugListContextTypes;

  return (
    <ul className="flex flex-col text-sky-900 border border-sky-900 p-4">
      {drugList.map((drug, index) => (
        <li key={index} className="border-b border-sky-900 p-2">
          {drug}
        </li>
      ))}
    </ul>
  );
};

const DrugListPage = () => {
  const { drugList } = useContext(DrugListContext) as DrugListContextTypes;
  return (
    <section className="flex flex-col items-center m-4">
      <h3 className="text-2xl text-sky-900">Drug List Page</h3>
      {drugList.length === 0 ? <p>No drugs on the list.</p> : <DrugListTable />}
    </section>
  );
};

export default DrugListPage;
