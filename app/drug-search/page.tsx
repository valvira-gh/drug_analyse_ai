// drug-search/page.tsx:
"use client";
import React, { useContext } from "react";
import { SearchContext } from "../lib/contexts/SearchContext";
import { SearchContextTypes } from "../lib/types";
import Accordion from "./Accordion";

const DisplayResults: React.FC<SearchContextTypes> = ({
  searchResults,
  selectedFocus,
}) => {
  if (!searchResults || !searchResults.results) {
    return <div>Ei tuloksia.</div>;
  }

  const fieldsToDisplay = {
    indications_and_usage: "1. Indications and Usage",
    dosage_and_administration: "2. Dosage and Administration",
    dosage_forms_and_strengths: "3. Dosage Forms and Strengths",
    contraindications: "4. Contraindications",
    pregnancy: "8.1 Pregnancy",
    overdosage: "9. Overdosage",
    controlled_substance: "9.1 Controlled Substance",
    abuse: "9.2 Abuse",
    clinical_pharmacology: "12. Clinical Pharmacology",
    nonclinical_toxicology: "13. Nonclinical Toxicology",
    carcinogenesis_and_mutagenesis_and_impairment_of_fertility:
      "13.1 Carcinogenesis",
    clinical_studies: "14. Clinical Studies",
    references: "15. References",
    how_supplied: "16. How Supplied/Storage and Handling",
  };

  return (
    <div className="flex ">
      {searchResults?.results?.map((result) => (
        <div
          className="flex flex-col items-center"
          key={result.openfda.spl_id[0]}
        >
          <h2 className="text-3xl m-2">{result.openfda.brand_name[0]}</h2>
          <h3 className="text-xl p-0.5">({result.openfda.generic_name[0]})</h3>

          <div className="">
            <Accordion
              title="1. Indications and Usage"
              content={result.indications_and_usage.join(", ")}
            />
            <Accordion
              title="2. Dosage and Administration"
              content={result.dosage_and_administration.join(", ")}
            />
            {/* {Object.entries(fieldsToDisplay).map(([field, title]) => {
              if (result[field] && result[field].length > 0) {

                let content = result[field];
                if (Array.isArray(content)) {
                  content = content.join(", ");
                }

                return (
                  <Accordion key={field} title={title} content={content} />
                );
              }
            })} */}
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
