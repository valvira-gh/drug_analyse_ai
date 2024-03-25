"use client";
import React from "react";
import SearchForm from "./SearchForm";
import { useContext, useState } from "react";
import { SearchContext } from "@/app/components/lib/contexts/SearchContext";

const DisplayResults = ({ searchResults }) => {
  if (!searchResults || !searchResults.results) {
    return <div>Ei tuloksia.</div>;
  }

  return (
    <div className="flex">
      {searchResults.results.map((result: () => void) => (
        <div
          className="flex flex-col items-center w-1/2"
          key={result.openfda.spl_set_id[0]}
        >
          <h2 className="text-2xl m-2">{result.openfda.brand_name[0]}</h2>
          <h3 className="text-xl p-0.5">({result.openfda.generic_name[0]})</h3>
          <p className="p-2 m-1">{result.description}</p>
          <p className="font-sans">
            Manufacter:{" "}
            <span className="font-bold font-mono ml-1">
              {result.openfda.manufacturer_name[0]}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

const DrugSearchPage: React.FC = () => {
  const resultContext = useContext(SearchContext);

  if (!resultContext) {
    throw new Error(`SearchContext must be used with ContextProvider!`);
  }

  const { searchResults, searchPerformed } = resultContext;

  return (
    <section className="flex flex-col items-center justify-center  text-sky-900 ml-24 mt-6 w-full p-2">
      <DisplayResults searchResults={searchResults} />
    </section>
  );
};

export default DrugSearchPage;
