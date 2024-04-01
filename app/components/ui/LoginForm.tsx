import { InputComponent } from "./FormComponents";

const LoginForm: React.FC = () => {
  return (
    <form className="border-2 rounded-md mt-5 border-sky-500">
      <div className="flex flex-col m-2">
        <label htmlFor="username" className="text-xl text-sky-800 mx-2">
          Username:
        </label>
        <InputComponent nameProp="username" typeProp="text" />
      </div>
    </form>
  );
};

export default LoginForm;
