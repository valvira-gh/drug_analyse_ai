type InputProps = {
  nameProp: string;
  typeProp: string;
  valueProp: string;
};

export const InputComponent: React.FC<InputProps> = ({
  nameProp,
  typeProp,
  valueProp,
}) => {
  return (
    <input
      name={nameProp}
      className="m-2 p-2 border border-sky-700 rounded-sm bg-sky-300"
      type={typeProp}
    />
  );
};
