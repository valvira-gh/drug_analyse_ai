import Sidebar from "@/app/components/ui/Sidebar";
import { Ubuntu } from "next/font/google";

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
    <div className={`ubuntu.className flex`}>
      <Sidebar />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default SearchLayout;
