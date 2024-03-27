export async function searchDrugs(formData: FormData, setSearchResults: React.Dispatch<React.SetStateAction<any>>) {

  const searchQuery = formData.get("search");
  const abuse = formData.get("abuse")
  console.log(abuse)

    const response = await fetch(
      `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchQuery}`
    );

  const data = await response.json();
  setSearchResults(data)
  console.log(data.results)


  // Käsitellään datasta otsikot erillisiksi

// const splitTextIntoTitleAndText = (text) => {
//   const match = text.match(/([A-Z\s]+)([a-z].+)/);
//   if (match) {
//     const title = match[1].trim();
//     const rest = match[2].trim();
//     return { title, rest };
//   }
//   return { title: text, rest: "" };
// };


// const processTexts = (texts) => {
//   return texts.map(splitTextIntoTitleAndText);
// }

// // Käsitellään jokainen kappale jokaisesta data.results objektista
// const processedResults = data.results.map(result => {
//   const processedTexts = {};
//   for (const key in result) {
//     if (Array.isArray(result[key])) {
//       processedTexts[key] = processTexts(result[key]);
//     } else {
//       processedTexts[key] = result[key];
//     }
//   }
//   return processedTexts;
// });

// setSearchResults(processedResults);


//   console.log(processedResults)

}