"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowWIcon from "@/assets/icons/arrow-w.svg";
import CursorImage from "@/assets/images/cursor.png";
import MessageImage from "@/assets/images/message.png";

export const Hero = () => {
  return (
    <section className="bg-black text-white bg-gradient-1 py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 bg-black border border-[#b48cde] bg-[radial-gradient(closest-side,#000000_82%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] lg:top-[calc(100%-120px) bottom-24" />
      <div className="container relative">
        <div className="flex justify-center items-center">
          <Link
            href="/#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-gradient-2 bg-clip-text text-transparent">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <span>
                <ArrowWIcon />
              </span>
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative inline-flex">
            <motion.div
              className="hidden sm:inline absolute right-[476px] top-[108px]"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="Cursor Image"
                width={200}
                height={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="hidden sm:inline absolute top-[56px] left-[498px]"
              drag
              // dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="Message Image"
                width={200}
                height={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a Time
            </h1>
          </div>
        </div>
        <p className="text-center text-xl mt-8 max-w-md mx-auto">
          Celebrate the joy of accomplishment with an app designed to track progress,
          motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black px-5 py-3 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
};
