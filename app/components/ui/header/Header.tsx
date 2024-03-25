import NavLinks from "@/app/components/ui/header/NavLinks";

const Header = () => {
  return (
    <div className="h-full flex items-center">
      <h1
        className={`text-sky-300 text-5xl mb-2 tablet:mb-2 tablet:text-6xl desktop:text-6xl font-bold mt-4`}
      >
        Drug Analyse AI
      </h1>
    </div>
  );
};

export default Header;
