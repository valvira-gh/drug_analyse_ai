export async function searchDrugs(
  formData: FormData,
  setSearchResults: React.Dispatch<React.SetStateAction<any>>
) {
  const searchQuery = formData.get("search");
  const abuse = formData.get("abuse");
  console.log(abuse);

  const response = await fetch(
    `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchQuery}&limit=1`
  );

  const data = await response.json();
  setSearchResults(data);
  console.log(data.results);
}

export async function submitRegisterUser(formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("Toimii:");
  console.log(username, email, password);
}
