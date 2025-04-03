import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
