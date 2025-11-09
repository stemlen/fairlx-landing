"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  DollarSign,
  Code2,
  Users,
  MessageSquare,
  Bot,
  LayoutDashboard,
  Workflow,
  Plug,
} from "lucide-react";

interface Feature {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <DollarSign className="text-[#16a34a]" />,
    title: "Fair Usage Billing",
    description: "Pay only for what you use with our transparent pricing model.",
  },
  {
    icon: <Code2 className="text-[#1E90FF]" />,
    title: "100% Open Source",
    description: "Fully auditable and self-hostable codebase.",
  },
  {
    icon: <Users className="text-[#1E90FF]" />,
    title: "Unlimited Users",
    description: "Collaborate with your entire team at no extra cost.",
  },
  {
    icon: <MessageSquare className="text-[#16a34a]" />,
    title: "Built-in Chat & Channels",
    description: "Seamless communication within your workspace.",
  },
  {
    icon: <Bot className="text-[#1E90FF]" />,
    title: "AI Code Reviewer",
    description: "Automated code reviews for GitHub repositories.",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureList() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors duration-300" id="features">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Why Fairlx?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to manage projects, collaborate with your team, and scale your business.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.ul 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2"
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              variants={item}
              className={`min-h-[14rem] list-none ${
                index === 0 ? 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]' :
                index === 1 ? 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]' :
                index === 2 ? 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]' :
                index === 3 ? 'md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]' :
                'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]'
              }`}
            >
              <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border border-gray-600 p-2">
                      {React.cloneElement(feature.icon, { 
                        ...feature.icon.props,
                        className: "h-4 w-4 text-black dark:text-neutral-400"
                      })}
                    </div>
                    <div className="space-y-3">
                      <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                        {feature.title}
                      </h3>
                      <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                        {feature.description}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
