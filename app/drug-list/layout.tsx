import DrugListSidebar from "./DrugListSidebar";
import DrugListProvider from "../lib/contexts/DrugListContext";

const DrugListLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DrugListProvider>
      <div className="flex flex-col items-center">
        <aside className="bg-sky-300 w-full flex items-center justify-evenly laptop:justify-start laptop:w-1/4 laptop:h-screen laptop:flex-col laptop:items-center">
          <DrugListSidebar />
        </aside>
        <main className="bg-sky-200 h-screen w-screen flex-wrap p-8">
          {children}
        </main>
      </div>
    </DrugListProvider>
  );
};

export default DrugListLayout;
