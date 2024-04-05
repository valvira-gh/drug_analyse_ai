"use client";
import {
  DrugListContext,
  DrugListContextTypes,
} from "@/app/lib/contexts/DrugListContext";
import { useContext } from "react";

const DrugListTable = () => {
  const { drugList } = useContext(DrugListContext) as DrugListContextTypes;

  return (
    <section className="flex flex-col items-center border border-sky-200 rounded-md  p-4 w-full">
      <h2 className="text-2xl text-sky-900 text-center font-bold mb-4">
        User's Drug List
      </h2>
      {drugList.length > 0 ? (
        <table className="w-full border-2 desktop:w-10/12">
          <thead>
            <tr className="bg-sky-700 text-white border">
              <th className="p-2 border border-sky-800">Drug Name</th>
              <th className="p-2 border border-sky-800">Strength</th>
              <th className="p-2 border border-sky-800">Dosage</th>
            </tr>
          </thead>
          <tbody>
            {drugList.map((drug) => (
              <tr key={drug.id} className="bg-sky-300">
                <td className="p-2 text-sky-900 text-xl text-center border border-sky-600">
                  {drug.name}
                </td>
                <td className="p-2 text-sky-900 font-bold text-center border border-sky-600">
                  {drug.strength}
                </td>
                <td className="p-2 text-sky-700 text-xl text-center font-bold border border-sky-600">
                  {drug.dosage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-sky-800">No drugs in list</p>
      )}
    </section>
  );
};

export default DrugListTable;
