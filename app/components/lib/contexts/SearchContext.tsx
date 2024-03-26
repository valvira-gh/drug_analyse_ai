"use client";
import { SetStateAction, useState } from "react";
import React, { createContext } from "react";

export interface SearchResultTypes {
  openfda: {
    spl_id: string[];
    brand_name: string[];
    generic_name: string[];
    description: string[];
    manufacturer_name: string[];
  };
  abuse: string[];
  description: string[];
}

type SearchContextType = {
  searchResults: { results: SearchResultTypes[] } | undefined;
  setSearchResults: React.Dispatch<
    React.SetStateAction<Promise<string[] | undefined>>
  >;
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
    abuse: true,
    description: true,
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
