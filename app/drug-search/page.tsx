import React from "react";
import SearchForm from "./SearchForm";

const DrugSearchPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-sky-900 m-4">
      <h3 className="text-3xl">Drug Search</h3>
      <SearchForm />
    </section>
  );
};

export default DrugSearchPage;
