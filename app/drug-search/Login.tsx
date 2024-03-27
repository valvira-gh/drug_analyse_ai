const Login: React.FC = () => {
  return (
    <form className="rounded-md border border-sky-200 flex flex-col px-6 py-4 m-4 w-10/12 laptop:w-max tablet:w-6/12">
      <div className="flex flex-col p-2">
        <label htmlFor="username" className="text-2xl text-sky-800">
          Username:
        </label>
        <input
          type="text"
          name="username"
          //   placeholder="Username..."
          className="text-lg text-sky-900 p-2 mt-2 border-2 rounded-sm border-sky-500 bg-sky-500"
        />
      </div>

      <div className="m-2">
        <label htmlFor="password" className="text-2xl text-sky-800">
          Password:
        </label>
        <input
          type="text"
          name="password"
          //   placeholder="Password..."
          className="text-lg text-sky-100 p-2 mt-2 border-2 rounded-sm border-sky-500 bg-sky-500 w-full"
        />
      </div>
      <button
        type="submit"
        className="text-xl font-bold p-2 border-2 m-2 bg-sky-800 border-sky-200"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
