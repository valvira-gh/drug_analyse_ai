import Link from "next/link";
import ClientHomePage from "./ui/ClientHomePage";

const Home: React.FC = () => {
  return (
    <main className="bg-sky-200">
      <div className=" flex flex-col items-center">
        <h2 className=" m-4 text-xl text-sky-900">
          Welcome to Drug Analyse AI!
        </h2>

        <ClientHomePage />
      </div>
    </main>
  );
};

export default Home;
