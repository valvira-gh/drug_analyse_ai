import NavLinks from "@/app/NavLinks";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Header = () => {
  return (
    <header className="bg-sky-700 flex flex-col items-center">
      <h1
        className={`text-sky-300 text-5xl tablet:6-xl desktop:text-7xl font-bold mt-4 ${ubuntu.className}`}
      >
        Drug Analyse AI
      </h1>
      <nav className="md:w-5/12 lg:w-4/12 mb-5  sm:mt-4 md:mt-10 sm:flex sm:flex-col">
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
