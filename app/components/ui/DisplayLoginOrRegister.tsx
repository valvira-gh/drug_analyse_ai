import LoginForm from "@/app/components/ui/LoginForm";
import RegisterUserForm from "./RegisterUserForm";

type DisplayProps = {
  display: string | null;
  setDisplay: React.Dispatch<React.SetStateAction<string | null>>;
};

const DisplayLoginOrRegister: React.FC<DisplayProps> = ({
  display,
  setDisplay,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg text-sky-900 m-2">You're not signed in... </h3>
      <p className="text-sky-600 text-lg m-2">
        <span
          onClick={() => setDisplay("login")}
          className="text-sky-700 text-2xl hover:cursor-pointer"
        >
          Login
        </span>{" "}
        or{" "}
        <span
          onClick={() => setDisplay("register-user")}
          className="text-sky-700 text-2xl hover:cursor-pointer"
        >
          Register User
        </span>
      </p>
      {display === "login" ? <LoginForm /> : ""}
      {display === "register-user" ? <RegisterUserForm /> : ""}
    </div>
  );
};

export default DisplayLoginOrRegister;
