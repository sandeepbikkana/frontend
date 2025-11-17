import React from "react";

export const Button = ({ className, onClick, text, style }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

