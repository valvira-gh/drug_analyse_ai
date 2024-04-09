"use client";
import { searchDrugs } from "../utils/actions";
import { SearchContext } from "../lib/contexts/SearchContext";
import { useContext } from "react";
import { useFormStatus } from "react-dom";

// Käytetään uutta tapaa käsitellä form-elementtejä käyttämällä
// <form action> ominaisuutta ja hyödynnetään formData-objektia.
// Reactissa <form>-elementti on aina client-komponentti, mutta
// käytämme "use server" merkintää ja näin voimme luoda asynkronisen
// fetch-pyynnön palvelimelle käyttämällä formData.get()-metodia.

const SearchForm: React.FC = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(`SearchForm must be used within a SearchProvider.`);
  }

  const { setSearchResults, setSearchPerformed, setSelectedFocus } = context;

  const handleSearch = (formData: FormData) => {
    searchDrugs(formData, setSearchResults);
    setSearchPerformed(true);
  };

  return (
    <form
      action={handleSearch}
      className="rounded-lg border border-sky-200 w-full text-center flex flex-col px-8 py-6 my-4 laptop:w-max tablet:w-6/12"
    >
      <input
        type="text"
        name="search"
        className="text-lg text-sky-900 p-2 mt-2 border-2 rounded-sm border-sky-500 "
      />{" "}
      <p className="text-sky-800 m-2">E.g. "Aspirin"</p>
      <button
        type="submit"
        className="font-bold border border-sky-700 rounded-md mt-2 bg-sky-600 text-sky-100 text-xl px-1 py-1 "
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
