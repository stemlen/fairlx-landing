"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const scrollPosition = scrollYProgress.get();
      const direction = current - (scrollYProgress.getPrevious() || 0);
      
      // Check if scrolled past threshold (5% of page)
      const scrolled = scrollPosition > 0.05;
      setIsScrolled(scrolled);
      
      // Show/hide based on scroll direction
      if (scrollPosition < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <div className={cn(
        "fixed top-10 inset-x-0 mx-auto w-fit rounded-full transition-all duration-300",
        "pointer-events-none",
        "backdrop-blur-xl",
        "bg-white/20 dark:bg-black/40",
        "border border-white/30 dark:border-white/20",
        isScrolled ? "opacity-100" : "opacity-0",
        "shadow-2xl"
      )} />
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
          backgroundColor: 'transparent',
          backdropFilter: 'none',
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        }}
        transition={{
          duration: 0.3,
          backgroundColor: { duration: 0.3 },
          backdropFilter: { duration: 0.3 },
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full",
          "bg-white/30 dark:bg-black/40 backdrop-blur-xl",
          "shadow-2xl",
          "z-50 pr-2 pl-8 py-2 items-center justify-center space-x-4",
          "transition-all duration-300",
          "border border-white/30 dark:border-white/20",
          "hover:bg-white/40 dark:hover:bg-black/60",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-[30px]">
          <span>Get Started</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
