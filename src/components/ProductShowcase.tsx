import appScreen from "@/assets/images/app-screen.png";
import Image from "next/image";

export const ProductShowcase = () => {
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
        <Image
          src={appScreen}
          alt="Product Screenshot"
          className="mt-14 inline-flex mx-auto"
        />
      </div>
    </section>
  );
};
