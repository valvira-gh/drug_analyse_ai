"use client";
import { SetStateAction, useState } from "react";
import React, { createContext } from "react";

type SearchContextType = {
  searchResults: Promise<string[]> | undefined;
  setSearchResults: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  searchPerformed: boolean;
  setSearchPerformed: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFocus: {
    abuse: boolean;
    description: boolean;
  };
  setSelectedFocus: React.Dispatch<
    SetStateAction<{
      abuse: boolean;
      description: boolean;
    }>
  >;
};

export const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined
);

const SearchProvider = ({ children }: any) => {
  const [searchResults, setSearchResults] = useState(undefined);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState({
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
