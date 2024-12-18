"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    src: "/portfolio1.jpg",
    title: "Modern Villa",
    size: "col-span-2 row-span-2",
  },
  { src: "/portfolio2.jpg", title: "Eco-Friendly Office" },
  { src: "/portfolio3.jpg", title: "Luxury Resort" },
  { src: "/portfolio4.jpg", title: "Urban Apartment", size: "col-span-2" },
  { src: "/portfolio5.jpg", title: "Beachfront Restaurant" },
  { src: "/portfolio6.jpg", title: "Cultural Center", size: "row-span-2" },
  { src: "/portfolio7.jpg", title: "Beach Villa", size: "row-span-2" },
  { src: "/portfolio8.jpg", title: "Smallville House", size: "row-span-2" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-archivo text-stone-800 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-lg overflow-hidden ${
                item.size || ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
