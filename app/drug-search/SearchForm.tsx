"use client";
// Käytetään uutta tapaa käsitellä form-elementtejä käyttämällä
// <form action> ominaisuutta ja hyödynnetään formData-objektia.
// Reactissa <form>-elementti on aina client-komponentti, mutta
// käytämme "use server" merkintää ja näin voimme luoda asynkronisen
// fetch-pyynnön palvelimelle käyttämällä formData.get()-metodia.
import { FDA_API_KEY } from "@/app/components/lib/openFDA_API";
import { searchDrugs } from "../components/lib/actions";

const KEYS = FDA_API_KEY;

const SearchForm: React.FC = () => {
  return (
    <form
      action={searchDrugs}
      className="rounded-md flex flex-col px-6 py-4 m-4"
    >
      <input
        type="text"
        name="search"
        className="text-lg text-sky-900 p-2 mt-2 border-2 border-sky-500 "
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
