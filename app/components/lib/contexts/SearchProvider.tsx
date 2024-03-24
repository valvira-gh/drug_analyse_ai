"use client";
import { useState } from "react";
import { SearchContext } from "./SearchContext";

const SearchProvider = ({ children }: any) => {
  const [searchResults, setSearchResults] = useState(undefined);
  const [searchPerformed, setSearchPerformed] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        searchPerformed,
        setSearchPerformed,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
