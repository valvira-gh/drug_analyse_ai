// SearchContext.tsx:
"use client";
import React, { createContext, useState } from "react";
import {
  SearchContextTypes,
  SearchResultTypes,
  SelectedFocusTypes,
} from "../types";

export const SearchContext = createContext<SearchContextTypes | undefined>(
  undefined
);

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<
    { results: SearchResultTypes[] } | undefined
  >(undefined);

  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [selectedFocus, setSelectedFocus] = useState<SelectedFocusTypes>({
    abuse: false,
    description: false,
  });

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        searchPerformed,
        setSearchPerformed,
        selectedFocus,
        setSelectedFocus,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
