import NavLinks from "@/app/NavLinks";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

const Header = () => {
  return (
    <div className="h-full flex items-center">
      <h1
        className={`text-sky-300 text-5xl tablet:text-6xl desktop:text-6xl font-bold mt-4 ${ubuntu.className}`}
      >
        Drug Analyse AI
      </h1>
    </div>
  );
};

export default Header;
