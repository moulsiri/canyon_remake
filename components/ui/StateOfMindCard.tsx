"use client";
import Image from "next/image";
import React from "react";

const StateOfMindCard = ({
  src,
  alt,
  title,
  text,
  isHovered,
  isOtherHovered,
  onHover,
  onLeave,
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
  isHovered: boolean;
  isOtherHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      className={`state-card flex flex-col items-center justify-start transition-opacity duration-500 cursor-pointer ${
        isOtherHovered ? "opacity-30" : "opacity-100"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="w-full relative mb-4">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className={`w-full h-auto object-contain transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          priority
        />
      </div>
      <div
        className={`flex flex-col items-center text-center transition-all duration-500 h-24 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <h3
          className="text-xl md:text-2xl text-stone-900 dark:text-stone-100 mb-2 font-medium"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-[200px] leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StateOfMindCard;
