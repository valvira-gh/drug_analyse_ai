"use client";
import { useState } from "react";
import { SearchContext } from "./SearchContext";

const SearchProvider = ({ children }: any) => {
  const [searchResults, setSearchResults] = useState([""]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
