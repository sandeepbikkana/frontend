import React, { useState, useRef } from "react";

const GradientGlowText = ({
  children,
  className = "",
  circleSize = 100,
  gradientFrom = "from-blue-400",
  gradientVia = "via-purple-500",
  gradientTo = "to-blue-400",
  baseTextColor = "text-gray-600",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const gradientClasses = `bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo}`;

  return (
    <div
      ref={textRef}
      className="relative cursor-pointer inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${className} ${baseTextColor} relative select-none`}>
        {children}
      </div>

      <div
        className={`absolute inset-0 ${className} ${gradientClasses} bg-clip-text text-transparent select-none transition-opacity duration-200`}
        style={{
          maskImage: `radial-gradient(circle ${circleSize}px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, white 30%, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(circle ${circleSize}px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, white 30%, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientGlowText;
