import React, { createContext } from "react";

type SearchContextType = {
  searchResults: Promise<string[]> | undefined;
  setSearchResults: React.Dispatch<React.SetStateAction<any>>;
  searchPerformed: boolean;
  setSearchPerformed: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined
);
