"use client";
import React from "react";
import { useContext, useState } from "react";
import { SearchContext } from "@/app/components/lib/contexts/SearchContext";
import { SearchResultTypes } from "@/app/components/lib/contexts/SearchContext";

const DisplayResults: React.FC<{
  searchResults: { results: SearchResultTypes[] } | undefined;
  selectedFocus: { abuse: boolean; description: boolean };
}> = ({ searchResults, selectedFocus }) => {
  if (!searchResults || !searchResults.results) {
    return <div>Ei tuloksia.</div>;
  }

  return (
    <div className="flex ">
      {searchResults.results.map((result) => (
        <div
          className="flex flex-col items-center"
          key={result.openfda.spl_id[0]}
        >
          <h2 className="text-3xl m-2">{result.openfda.brand_name[0]}</h2>
          <h3 className="text-xl p-0.5">({result.openfda.generic_name[0]})</h3>
          {selectedFocus.description && (
            <p className="p-2 m-1">{result.description}</p>
          )}
          {selectedFocus.abuse && <p className="p-2 m-1">{result.abuse[0]}</p>}

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

  const { searchResults, searchPerformed, selectedFocus } = resultContext;

  return (
    <section className="flex flex-col items-center justify-center text-sky-900 m-4 w-full p-2">
      <DisplayResults
        searchResults={searchResults}
        selectedFocus={selectedFocus}
      />
    </section>
  );
};

export default DrugSearchPage;
