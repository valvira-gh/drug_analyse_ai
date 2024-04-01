const RegisterUserForm: React.FC = () => {
  return (
    <form className="flex flex-col">
      <h3>Register User</h3>
      <label htmlFor="username">Username:</label>
      <input name="username" className="p-1 m-2" />
    </form>
  );
};

export default RegisterUserForm;
