import React, { useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-4 text-xl border-4 border-sky-900 p-4 rounded-sm bg-sky-400 text-center ">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="font-bold text-slate-100 text-2xl m-2"
      >
        {title}
      </button>
      {isOpen ? (
        <p
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="text-sky-900"
        >
          {content}
        </p>
      ) : null}
    </div>
  );
};

export default Accordion;
