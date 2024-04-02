type ButtonProps = {
  typeProp: "submit" | "button" | "reset" | undefined;
  title: string;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({ typeProp, title }) => {
  return (
    <button
      type={typeProp}
      className="border-2 border-sky-500 bg-sky-700 text-xl font-bold px-2 py-1 rounded-md mx-4"
    >
      {title}
    </button>
  );
};
