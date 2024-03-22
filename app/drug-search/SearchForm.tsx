const SearchForm: React.FC = () => {
  // code

  return (
    <form className="border border-sky-600 rounded-md flex flex-col px-6 py-4 m-4">
      <label className="text-2xl text-sky-700">Search drugs by name:</label>
      <input
        type="text"
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
