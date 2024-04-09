// types.ts:

export type UserContextTypes = {
  user: UserTypes;
  setUser: React.Dispatch<React.SetStateAction<UserTypes>>;
};

export type UserTypes = {
  name: string;
  password: string;
  isLogged: boolean;
};

export interface SearchResultTypes {
  openfda: {
    spl_id: string | string[];
    brand_name: string[] | string;
    generic_name: string[] | string;
    description: string[] | string;
    manufacturer_name: string[] | string;
  };
  indications_and_usage: string[];
  dosage_and_administration: string[];
  dosage_forms_and_strengths: string[];
  abuse: string[];
  description: string[];
  overdosage: string[];
  adverse_reactions: string[];
  adverse_reactions_table: string[];
  clinical_pharmalogy: string[];
  boxed_warning: string[];
  contraindications: string[];
  pregnancy: string[];
  pregnancy_table: string[];
  controlled_substance: string[];
  nonclinical_toxicology: string[];
  carcinogenesis: string[];
  mutagenesis: string[];
  impairment_of_fertility: string[];
  clinical_studies: string[];
  how_supplied: string[];
  references: string;
  storage_and_handling: string[];
  patient_counseling_information: string[];
  spl_medguide: string[];
  information_for_patients: string[];
  instructions_for_use: string[];
  geriatric_use: string[];
  clinical_pharmacology: string[];
  carcinogenesis_and_mutagenesis_and_impairment_of_fertility: string[];
  pediatric_use: string[];
}

export interface SelectedFocusTypes {
  abuse: boolean;
  description: boolean;
}

export type SearchContextTypes = {
  searchResults: { results: SearchResultTypes[] } | undefined;
  setSearchResults: React.Dispatch<
    React.SetStateAction<{ results: SearchResultTypes[] } | undefined>
  >;
  searchPerformed: boolean;
  setSearchPerformed: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFocus: SelectedFocusTypes;
  setSelectedFocus: React.Dispatch<React.SetStateAction<SelectedFocusTypes>>;
};
