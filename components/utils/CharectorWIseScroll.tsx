"use client"
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({
  paragraph,
  className,
}: {
  paragraph: string;
  className: string;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.45"],
  });
  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className={`${className} flex flex-wrap`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`uoirrqwe${i}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: any) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-2 mt-1">
      {children.split("").map((char: string, i: number) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0.5, 1]);

  // Delay the blur range slightly by shifting the progress range
  const blurStart = Math.min(range[0] + 0.1, 1);
  const blurEnd = Math.min(range[1] + 0.1, 1);
  const blurAmount = useTransform(progress, [blurStart, blurEnd], [1, 0]);
  const backdrop = useTransform(blurAmount, (val) => `blur(${val}px)`);
  

  return (
    <span className="relative">
      <motion.span
        style={{
          opacity: opacity,
        }}
      >
        {children}
      </motion.span>

      <motion.span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: backdrop,
          WebkitBackdropFilter: backdrop,
        }}
      />
    </span>
  );
};
