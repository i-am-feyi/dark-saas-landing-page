"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import GearImage from "@/assets/images/helix2.png";
import PieChartImage from "@/assets/images/emojistar.png";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-[72px] sm:py-24 text-center"
    >
      <div className="container max-w-5xl relative">
        <div className="max-w-xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
            Get instant access
          </h2>
          <p className="text-xl text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track your
            progress and motivate your efforts.
          </p>
          <form className="mt-10 flex flex-col justify-center sm:flex-row gap-2.5 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white/20 rounded-lg h-12 px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
            />
            <button className="bg-white text-black h-12 rounded-lg font-medium px-5">
              Get access
            </button>
          </form>
        </div>
        <motion.img
          src={GearImage.src}
          alt="Gear Image"
          width={225}
          height={225}
          className="hidden sm:block absolute top-0 left-[calc(100%-48px)]"
          style={{
            translateY,
          }}
        />
        <motion.img
          src={PieChartImage.src}
          alt="Pie Chart Image"
          width={200}
          height={200}
          className="hidden sm:block absolute -top-[120px] right-[calc(100%-48px)]"
          style={{
            translateY,
          }}
        />
      </div>
    </section>
  );
};
