"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-stone-100">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-archivo text-stone-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Elevate Your Space with Visionary Architecture
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your dreams into stunning realities with Manggala Putra&apos;s
            innovative designs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="#contact"
              className="bg-stone-800 text-white px-8 py-3 rounded-full text-lg hover:bg-stone-700 transition-colors duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            {images.map((src, index) => (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 5,
                  delay: index * 6,
                }}
              >
                <Image
                  src={src}
                  alt="Architectural design"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
