export async function searchDrugs(formData: FormData, setSearchResults: React.Dispatch<React.SetStateAction<any>>) {

    const searchQuery = formData.get("search");

    const response = await fetch(
      `https://api.fda.gov/drug/label.json?search=${searchQuery}&limit=1`
    );

  const data = await response.json();
    setSearchResults(data)
  }