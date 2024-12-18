"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-stone-100/80 backdrop-blur-md" : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold font-space-grotesk text-stone-800"
        >
          Manggala Putra
        </Link>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <Link
          href="#contact"
          className="bg-stone-800 text-white px-6 py-2 rounded-full hover:bg-stone-700 transition-colors duration-300"
        >
          Make a Contact
        </Link>
      </div>
    </motion.nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-stone-800 hover:text-stone-600 transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
