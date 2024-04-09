import SearchForm from "@/app/drug-search/SearchForm";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col tablet:flex-row laptop:flex-col laptop:w-10/12 laptop:items-center laptop:mx-4">
      {/* <Login /> */}
      <SearchForm />
    </div>
  );
};

export default Sidebar;
// sm:w-full md:w-2/5 lg:w-1/4 bg-sky-300 p-4
