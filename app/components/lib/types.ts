// types.ts:
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

export interface SelectedFocusTypes {
  abuse: boolean;
  description: boolean;
}

export type SearchContextTypes = {
  searchResults: { results: SearchResultTypes[] } | undefined;
  setSearchResults: React.Dispatch<React.SetStateAction<{ results: SearchResultTypes[] } | undefined>>;
  searchPerformed: boolean;
  setSearchPerformed: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFocus: SelectedFocusTypes;
  setSelectedFocus: React.Dispatch<React.SetStateAction<SelectedFocusTypes>>;
};