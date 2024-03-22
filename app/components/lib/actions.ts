export async function searchDrugs(formData: FormData) {

    const searchQuery = formData.get("search");

    const response = await fetch(
      `https://api.fda.gov/drug/label.json?search=${searchQuery}&limit=1`
    );

    const data = await response.json();
    console.log(data);
    return data;

  }