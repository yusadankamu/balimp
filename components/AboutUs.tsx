"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-stone-200">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about-us.jpg"
              alt="Manggala Putra team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-archivo text-stone-800 mb-6">
              About Us
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              We are a passionate architectural firm based in the heart of Bali,
              Indonesia. With a deep appreciation for the island&apos;s rich cultural
              heritage and natural beauty, we create designs that harmoniously
              blend modern aesthetics with traditional elements.
            </p>
            <p className="text-lg text-stone-600">
              Our team of skilled architects and designers is dedicated to
              bringing your vision to life, crafting spaces that inspire,
              function flawlessly, and stand the test of time. From luxurious
              villas to innovative commercial spaces, we approach each project
              with creativity, precision, and a commitment to excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
