// types.ts:
export interface SearchResultTypes {
  openfda: {
    spl_id: string[];
    brand_name: string[];
    generic_name: string[];
    description: string[];
    manufacturer_name: string[];
  };
  indications_and_usage: string[];
  dosage_and_administration: string[];
  dosage_forms_and_strengths: string[];
  abuse: string[];
  description: string[];
  overdose: string[];
  adverse_reactions: string[];
  adverse_reactions_table: string[];
  clinical_pharmalogy: string[];
  boxed_warning: string[];

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
