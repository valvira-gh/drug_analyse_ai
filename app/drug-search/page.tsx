"use client";
import React from "react";
import SearchForm from "./SearchForm";
import { useContext, useState } from "react";
import { SearchContext } from "@/app/components/lib/contexts/SearchContext";

const DisplayResults = ({ searchResults }: any) => {
  if (!searchResults || !searchResults.results) {
    return <div>Ei tuloksia.</div>;
  }

  return (
    <div className="border">
      {searchResults.results.map((result, index) => (
        <div key={index}>
          <h2>{result.product_name}</h2>
          <p>{result.description}</p>
          {/* Lisää tähän muita tietoja, joita haluat näyttää */}
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
    <section className="flex flex-col items-center text-sky-900 m-4">
      <DisplayResults searchResults={searchResults} />
    </section>
  );
};

export default DrugSearchPage;
