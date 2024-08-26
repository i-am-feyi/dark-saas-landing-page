"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "@/assets/images/app-screen.png";
import { useRef } from "react";

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="bg-gradient-to-b from-black to-[#5d2ca8] text-white text-center py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <p className="text-white/70 text-xl mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your progress,
          motivate your efforts, and celebrate your successes, one task at a time.
        </p>
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            ref={imageRef}
            src={appScreen}
            alt="Product Screenshot"
            className="mt-14 inline-flex mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
