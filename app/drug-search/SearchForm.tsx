"use client";
import { FDA_API_KEY } from "@/app/components/lib/openFDA_API";
import { searchDrugs } from "@/app/components/lib/actions";
import { SearchContext } from "@/app/components/lib/contexts/SearchContext";
import { useContext } from "react";

// Käytetään uutta tapaa käsitellä form-elementtejä käyttämällä
// <form action> ominaisuutta ja hyödynnetään formData-objektia.
// Reactissa <form>-elementti on aina client-komponentti, mutta
// käytämme "use server" merkintää ja näin voimme luoda asynkronisen
// fetch-pyynnön palvelimelle käyttämällä formData.get()-metodia.
const KEYS = FDA_API_KEY;

const SearchForm: React.FC = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(`SearchForm must be used within a SearchProvider.`);
  }

  const { searchResults, setSearchResults, setSearchPerformed } = context;

  const handleSearch = (formData: FormData) => {
    searchDrugs(formData, setSearchResults);
    setSearchPerformed(true);
  };

  return (
    <form
      action={handleSearch}
      className="rounded-md border flex flex-col px-6 py-4 m-4 w-10/12"
    >
      <input
        type="text"
        name="search"
        className="text-lg text-sky-900 p-2 mt-2 border-2 rounded-sm border-sky-500 "
      />
      <button
        type="submit"
        className="font-bold border border-sky-400 rounded-md mt-2 bg-sky-600 text-sky-100 text-xl px-1 py-1 "
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
