"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(179, 215, 102)",   // Light lime green
    "rgb(102, 225, 156)",   // Light mint green
    "rgb(102, 204, 238)",   // Light sky blue
    "rgb(102, 162, 235)",   // Light blue
    "rgb(157, 102, 255)",   // Light purple
    "rgb(215, 102, 245)",   // Light magenta
    "rgb(245, 102, 204)",   // Light pink
    "rgb(255, 140, 166)",   // Light coral
    "rgb(255, 162, 133)",   // Light orange
    "rgb(255, 184, 122)",   // Light peach
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}