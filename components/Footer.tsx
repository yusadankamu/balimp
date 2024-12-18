"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-2xl font-bold font-space-grotesk">
              Manggala Putra
            </Link>
            <p className="mt-2 text-stone-400">
              Elevating spaces, inspiring lives.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center md:justify-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="#home"
              className="hover:text-stone-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-stone-300 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-stone-300 transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="hover:text-stone-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-stone-700 text-center text-stone-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} Manggala Putra. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
