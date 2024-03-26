export async function searchDrugs(formData: FormData, setSearchResults: React.Dispatch<React.SetStateAction<any>>) {

  const searchQuery = formData.get("search");
  const abuse = formData.get("abuse")
  console.log(abuse)

    const response = await fetch(
      `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchQuery}`
    );

  const data = await response.json();
  setSearchResults(data)
  console.log(data.results[0].openfda)
  }