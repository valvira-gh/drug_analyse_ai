import NavLinks from "@/app/NavLinks";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Header = () => {
  return (
    <header className="bg-sky-700 flex flex-col items-center">
      <h1
        className={`text-sky-300 text-5xl tablet:text-5xl desktop:text-6xl font-bold mt-4 ${ubuntu.className}`}
      >
        Drug Analyse AI
      </h1>
      <nav className="mb-4">
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
