"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TaglineQuote() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.995 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* Decorative Quote Mark */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-slate-200 dark:text-white/10 text-8xl font-serif leading-none select-none pointer-events-none">
            "
          </div>

          {/* Quote */}
          <blockquote className="relative z-10">
            <p className="text-2xl sm:text-3xl md:text-4xl italic text-slate-700 dark:text-slate-200/95 font-light leading-relaxed max-w-4xl mx-auto">
              Fairlx — Pay for Performance, Not for People.
            </p>
          </blockquote>

          {/* Decorative Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#1E90FF] to-[#16a34a] mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
