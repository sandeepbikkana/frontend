"use client";
import React from "react";
import classNames from "classnames";
import Image from "next/image";

export default function InfoCard({ image, text, subtext, className }) {
  return (
    <div
      className={classNames(
        "relative rounded-2xl p-[2px] bg-gradient-to-br from-[#B145FF] to-[#30A0FF]",
        className
      )}
      style={{ width: "362px" }}
    >
      <div className="bg-[#1A1A1A] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center text-white h-full">
        <div className="mb-4">
          {/* 👇 Slightly increased image size here */}
          <Image src={image} alt={text} width={67} height={67} />
        </div>
        <h4 className="text-xl font-bold mb-2">{text}</h4>
        <p className="text-sm text-gray-400">{subtext}</p>
      </div>
    </div>
  );
}

// Example usage:
// <InfoCard
//   key={index}
//   image={item.image}
//   text={item.text}
//   subtext={item.subtext}
//   className={`${item.className} rotate-card`} // <-- add rotate-card here
// />
