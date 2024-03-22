import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="min-height-24 mt-2 bg-sky-700 flex flex-col items-center border-b border-sky-600">
      <h1 className=" text-sky-300 text-5xl font-bold mt-2">Drug Analyse AI</h1>
      <nav className="text-sky-900 mt-10 w-1/4 mb-5">
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
