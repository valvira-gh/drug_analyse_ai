// Käytetään uutta tapaa käsitellä form-elementtejä käyttämällä
// <form action> ominaisuutta ja hyödynnetään formData-objektia.
// Reactissa <form>-elementti on aina client-komponentti, mutta
// käytämme "use server" merkintää ja näin voimme luoda asynkronisen
// fetch-pyynnön palvelimelle käyttämällä formData.get()-metodia.

const SearchForm: React.FC = () => {
  async function searchDrugs(formData: FormData) {
    "use server";
    const searchQuery = formData.get("search");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${searchQuery}`
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <form
      action={searchDrugs}
      className="rounded-md flex flex-col px-6 py-4 m-4"
    >
      <input
        type="text"
        name="search"
        className="text-lg text-sky-900 p-2 mt-2 border-2 border-sky-500 "
      />
      <button
        type="submit"
        className="font-bold border border-sky-400 rounded-md mt-2 bg-sky-600 text-sky-100 text-xl px-1 py-1 "
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
