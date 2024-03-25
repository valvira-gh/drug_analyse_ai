import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="h-1/5 sm:h-8/12 mt-2 bg-sky-700 flex flex-col items-center border-b border-sky-600">
      <h1 className=" text-sky-300 text-5xl font-bold mt-5">Drug Analyse AI</h1>
      <nav className="border  md:w-5/12 lg:w-4/12 mb-5  sm:mt-4 md:mt-10 sm:flex sm:flex-col">
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
