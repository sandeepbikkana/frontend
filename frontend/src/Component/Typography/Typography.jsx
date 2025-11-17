import React from "react";

export const Typography = ({
  variant = "body", // 'h1', 'h2', 'subtitle', 'caption', etc.
  children,
  className = "",
  style = {},
}) => {
  const getTag = () => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      case "subtitle":
        return "h4";
      case "caption":
        return "span";
      case "body":
        return "p";
      default:
        // For h7-h15 and any other custom variants, use span
        return "span";
    }
  };

  const variantClasses = {
    h1: "text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[1.15] font-sora sans-serif",
    h2: "text-[17px] font-medium leading-[1.5] font-sora ",
    h3: "text-[15px] font-semibold leading-[1.4] font-sora tracking-widest uppercase",
    h4: "text-[48px] font-medium leading-[1.25] font-sora tracking-tight",
    h5: "text-[50px] font-medium leading-[1.2] font-sora tracking-tight",
    h6: "text-[16px] font-normal leading-[1.6] font-inter",
    h7: "text-[20px] font-medium leading-[1.4] font-inter",
    h8: "text-[30px] font-medium leading-[1.3] font-sora",
    h9: "text-[48px] font-medium leading-[1.25] font-sora tracking-tight",
    h10: "text-[16px] font-normal leading-[1.6] font-inter",
    h11: "text-[32px] font-bold leading-[1.3] font-sora",
    h12: "text-[16px] font-normal leading-[1.6] font-inter",
    h13: "text-[14px] font-normal leading-[1.4] font-inter",
    h14: "text-[clamp(1.15rem,2.8vw,1.5rem)] font-normal leading-[1.6] font-inter tracking-tight",
    h15: "text-[24px] font-medium leading-[1.4] font-sora",
    subtitle: "text-[36px] font-medium leading-[1.2] font-sora tracking-tight",
    body: "text-[18px] font-normal leading-[1.6] font-inter",
    caption: "text-[14px] font-normal leading-[1.5] font-inter",
  };

  const Tag = getTag();
  const variantClass = variantClasses[variant] || variantClasses.body;

  return (
    <Tag className={`typography ${variantClass} ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default Typography; 