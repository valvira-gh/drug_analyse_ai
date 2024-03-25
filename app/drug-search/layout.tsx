import Sidebar from "@/app/drug-search/Sidebar";
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
      <div
        className={`ubuntu.className flex flex-col items-center laptop:flex-row`}
      >
        <aside className="bg-sky-300 w-full flex items-center  laptop:w-max laptop:h-screen laptop:flex-col laptop:items-center">
          <Sidebar />
        </aside>

        <main className="bg-sky-200 h-screen w-screen flex-wrap p-8">
          {children}
        </main>
      </div>
    </SearchProvider>
  );
};

export default SearchLayout;
