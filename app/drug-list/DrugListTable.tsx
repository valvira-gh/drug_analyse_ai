"use client";
import {
  DrugListContext,
  DrugListContextTypes,
} from "@/app/lib/contexts/DrugListContext";
import { useContext } from "react";

const DrugListTable = () => {
  const { drugList } = useContext(DrugListContext) as DrugListContextTypes;

  return (
    <section className="flex flex-col border-2 border-sky-700 rounded-md m-4 p-4">
      <h2 className="text-xl text-sky-900 font-bold m-2">User's Drug List</h2>
    </section>
  );
};

export default DrugListTable;
