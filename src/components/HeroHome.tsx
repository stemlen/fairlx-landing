"use client";

import React from "react";
import { motion } from "framer-motion";
import ContainerScroll from "@/components/ui/container-scroll-animation";
import { StartFreeCTA, ViewGitHubCTA, LearnMoreCTA } from "./CTAs";
import { Sparkles as SparklesIcon, Code2, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";

export default function HeroHome() {
  return (
    <section 
      className="relative bg-white dark:bg-black overflow-hidden transition-colors duration-300"
      data-theme="hero"
    >
      {/* Repeating Background Text Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8 opacity-5 dark:opacity-[0.02] transition-opacity duration-300 hover:opacity-10 dark:hover:opacity-[0.04]">
          {Array(16).fill(0).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <TextHoverEffect 
                text="FAIRLX" 
                className="text-6xl font-black text-transparent"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 dark:from-blue-900/10 dark:via-transparent dark:to-green-900/10 pointer-events-none" style={{ zIndex: -1 }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" style={{ zIndex: -1 }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl pointer-events-none" style={{ zIndex: -1 }} />

      <ContainerScroll
        titleComponent={
          <div className="space-y-8 px-4">
            {/* Prelabel */}
            <div>
              <span className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white/80 px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-green-500/30 dark:border-green-500/20">
                <SparklesIcon className="w-3 h-3 text-green-500 dark:text-green-400" />
                New • Open source usage-based billing
              </span>
            </div>

            {/* Headline with Enhanced Sparkles */}
            <div className="relative w-full py-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white relative z-20">
                <span className="relative z-10">
                  Manage Smarter. <span className="whitespace-nowrap">Pay Fairly.</span>
                </span>
              </h1>
              <div className="w-full absolute -bottom-4 h-32">
                <SparklesCore
                  background="transparent"
                  minSize={0.5}
                  maxSize={1.5}
                  particleDensity={120}
                  className="w-full h-full"
                  particleColor="#3b82f6"
                />
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 [mask-image:radial-gradient(400px_250px_at_50%_100%,transparent_10%,white)]"></div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Open source, usage-based, and built for real teams — Fairlx combines project management, collaboration, automation, and analytics into one platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <ViewGitHubCTA />
              <StartFreeCTA />
            </div>

            <div className="flex justify-center">
              <LearnMoreCTA />
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 pt-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                <span>Open Source</span>
              </div>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Usage-based Billing</span>
              </div>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500 dark:text-green-400" />
                <span>Unlimited Users</span>
              </div>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span>Trusted by teams</span>
              </div>
            </div>
          </div>
        }
      >
        {/* Product Preview Content */}
        <div className="h-full w-full bg-slate-100 dark:bg-zinc-950 p-4 md:p-8 transition-colors duration-300">
          <div className="grid grid-cols-1 gap-4 h-full">
            {/* Dashboard Panel */}
            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-lg p-4 border border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">Dashboard</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-blue-500/40 dark:bg-blue-500/30 rounded-full w-3/4"></div>
                <div className="h-2 bg-green-500/40 dark:bg-green-500/30 rounded-full w-1/2"></div>
                <div className="h-2 bg-blue-500/40 dark:bg-blue-500/30 rounded-full w-5/6"></div>
              </div>
            </div>

            {/* Chat Panel */}
            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-lg p-4 border border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400"></div>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">Team Chat</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="flex-1 h-6 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="flex-1 h-6 bg-slate-200 dark:bg-slate-700/50 rounded"></div>
                </div>
              </div>
            </div>

            {/* Sprint Board Panel */}
            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-lg p-4 border border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">Sprint Board</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-12 bg-slate-200 dark:bg-slate-700/40 rounded"></div>
                <div className="h-12 bg-slate-200 dark:bg-slate-700/40 rounded"></div>
                <div className="h-12 bg-slate-200 dark:bg-slate-700/40 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
