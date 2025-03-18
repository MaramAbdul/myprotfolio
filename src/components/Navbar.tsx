import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-primary backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-background">My Portfolio</div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-background focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link
            href="#home"
            className="text-background hover:text-accent transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-background hover:text-accent transition duration-300"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-background hover:text-accent transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-background hover:text-accent transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary/90 backdrop-blur-md">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="#home"
              className="text-background hover:text-accent transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-background hover:text-accent transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-background hover:text-accent transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-background hover:text-accent transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
