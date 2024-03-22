import Link from "next/link";
import Header from "@/app/components/ui/header/Header";

const Home: React.FC = () => {
  // code

  return (
    <main className="min-w-svh min-h-svh bg-sky-200">
      <div className="border-b border-sky-300 flex flex-col items-center min-h-36">
        <Header />
      </div>
    </main>
  );
};

export default Home;
