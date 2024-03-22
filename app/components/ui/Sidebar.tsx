import SearchForm from "@/app/drug-search/SearchForm";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 min-h-screen border-r border-gray-600 bg-sky-300 p-4">
      <h2 className="text-xl mb-4">Drug Search</h2>
      <SearchForm />
    </div>
  );
};

export default Sidebar;
