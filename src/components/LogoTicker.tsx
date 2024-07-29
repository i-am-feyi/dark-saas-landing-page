"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import acmeLogo from "../assets/images/acme.png";
import echoLogo from "../assets/images/echo.png";
import apexLogo from "../assets/images/apex.png";
import pulseLogo from "../assets/images/pulse.png";
import quantumLogo from "../assets/images/quantum.png";
import celestialLogo from "../assets/images/celestial.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const Logos = () => {
  return (
    <>
      <Image src={acmeLogo} alt="acmeLogo" className="h-8 w-auto flex-none" />
      <Image src={quantumLogo} alt="quantumLogo" className="h-8 w-auto flex-none" />
      <Image src={echoLogo} alt="echoLogo" className="h-8 w-auto flex-none" />
      <Image src={celestialLogo} alt="celestialLogo" className="h-8 w-auto flex-none" />
      <Image src={pulseLogo} alt="pulseLogo" className="h-8 w-auto flex-none" />
      <Image src={apexLogo} alt="apexLogo" className="h-8 w-auto flex-none" />
    </>
  );
};

export const LogoTicker = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-xl text-white/70 px-8">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex overflow-hidden mt-9 [mask-image:linear-gradient(to_right,transparent_5%,#f7f7f7,#f7f7f7,transparent_95%)]">
          <motion.div
            className="flex flex-none gap-16 pr-16"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Logos />
            <Logos />
            <Logos />
            <Logos />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
