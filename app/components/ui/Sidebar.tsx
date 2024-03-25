import SearchForm from "@/app/drug-search/SearchForm";

const Sidebar: React.FC = () => {
  return (
    <div className=" sm:h-full sm:w-full md:w-2/5 lg:w-1/4 bg-sky-300 p-4">
      <h2 className="text-xl mb-4">Drug Search</h2>
      <SearchForm />
    </div>
  );
};

export default Sidebar;
