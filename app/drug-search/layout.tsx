import Sidebar from "@/app/components/ui/Sidebar";

const SearchLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
};

export default SearchLayout;
