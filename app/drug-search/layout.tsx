import Sidebar from "@/app/drug-search/Sidebar";
import { Ubuntu } from "next/font/google";
import SearchProvider from "@/app/lib/contexts/SearchContext";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

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
        <aside className="bg-sky-300 w-full border flex items-center justify-evenly laptop:justify-start laptop:w-4/12 desktop:w-3/12 laptop:h-screen laptop:flex-col laptop:items-center">
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
