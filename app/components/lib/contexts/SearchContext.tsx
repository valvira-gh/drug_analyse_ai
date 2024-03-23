import React, { createContext } from "react";

type SearchContextType = {
  searchResults: string[];
  setSearchResults: React.Dispatch<React.SetStateAction<any>>;
};

export const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined
);
