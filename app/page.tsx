import Link from "next/link";
import { UserContext } from "@/app/lib/contexts/UserContext";
import DisplayLoginOrRegister from "./components/ui/DisplayLoginOrRegister";

const Home: React.FC = () => {
  return (
    <main className="bg-sky-200 border border-sky-900">
      <div className=" flex flex-col items-center">
        <h3 className=" m-4 text-4xl text-sky-900">Home Page</h3>
        <div>
          <Link className="text-2xl text-sky-700" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
