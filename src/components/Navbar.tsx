import Image from "next/image";
import logo from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 h-full bg-rainbow-2 blur-md" />
            <Image src={logo} alt="Logo" className="size-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            <Link
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Updates
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Customers
            </Link>
            <button className="bg-white py-2 px-4 rounded-lg text-black">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
