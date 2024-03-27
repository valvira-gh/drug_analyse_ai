// drug-search/page.tsx:
"use client";
import React, { useContext } from "react";
import { SearchContext } from "@/app/components/lib/contexts/SearchContext";
import { SearchContextTypes } from "../components/lib/types";
import Accordion from "./Accordion";

const DisplayResults: React.FC<SearchContextTypes> = ({
  searchResults,
  selectedFocus,
}) => {
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

          <div className="">
            <Accordion
              title="1. Indications and Usage"
              content={result.indications_and_usage[0]}
            />
            <Accordion
              title="2. Dosage and Administration"
              content={result.dosage_and_administration[0]}
            />
            <Accordion
              title="3. Dosage Forms and Strengths"
              content={result.dosage_forms_and_strengths[0]}
            />
            <Accordion
              title="6a. Adverse Reactions"
              content={result.adverse_reactions[0]}
            />
            {/* <Accordion
              title="6b. Adverse Reactions (table)"
              content={result.adverse_reactions_table[0]}
            /> */}
            {/* <Accordion
              title="12. Clinical Pharmalogy"
              content={result.clinical_pharmalogy[0]}
            /> */}
            <Accordion
              title="Boxed Warning"
              content={result.boxed_warning[0]}
            />
          </div>

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
  const context = useContext(SearchContext) as SearchContextTypes;

  return (
    <section className="flex flex-col items-center justify-center text-sky-900 m-4 w-full p-2">
      <DisplayResults {...context} />
    </section>
  );
};

export default DrugSearchPage;
