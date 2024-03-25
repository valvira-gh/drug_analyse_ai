import Sidebar from "@/app/components/ui/Sidebar";
import { Ubuntu } from "next/font/google";
import SearchProvider from "@/app/components/lib/contexts/SearchProvider";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const SearchLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SearchProvider>
      <div className={`ubuntu.className md:flex sm:flex-col md:flex-row `}>
        <Sidebar />
        <main className="flex-grow p-4">{children}</main>
      </div>
    </SearchProvider>
  );
};

export default SearchLayout;
