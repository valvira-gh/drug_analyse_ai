import SearchForm from "@/app/drug-search/SearchForm";

const Sidebar: React.FC = () => {
  return (
    <div className=" ">
      <h2 className="text-center text-xl m-4 text-sky-800">Drug Search</h2>
      <SearchForm />
    </div>
  );
};

export default Sidebar;
// sm:w-full md:w-2/5 lg:w-1/4 bg-sky-300 p-4
