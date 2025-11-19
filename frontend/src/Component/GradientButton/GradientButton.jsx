// src/components/GradientButton.jsx
import React from 'react';

const GradientButton = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type} 
      onClick={onClick}
      className={`
        px-10 py-3
        rounded-full
        text-lg font-sora
        bg-gradient-to-r from-purple-600 to-blue-600 // Default gradient
        hover:from-blue-600 hover:to-purple-600 // Flipped gradient on hover
        transition-all duration-300 ease-in-out // Smooth transition
        shadow-lg
        text-black
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GradientButton;