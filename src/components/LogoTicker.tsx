import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-xl text-white/70 px-8">
          Trusted by the world's most innovative teams
        </h2>
        <div className="overflow-hidden mt-9">
          <div className="flex justify-center gap-16 [mask-image:linear-gradient(to_right,transparent_5%,#f7f7f7,#f7f7f7,transparent_95%)]">
            {images.map(({ src, alt }, index) => (
              <Image key={index} src={src} alt={alt} className="h-8 w-auto flex-none" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
