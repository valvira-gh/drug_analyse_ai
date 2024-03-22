import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className=" min-height-24 mt-2 ">
      <h1 className="text-sky-700 text-5xl font-bold">Drug Analyse AI</h1>
      <nav className=" min-w-56 text-sky-900 mt-10">
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
