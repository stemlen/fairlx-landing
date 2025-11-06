"use client";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  ThemeToggle,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Docs", link: "#docs" },
  ];

  return (
    <div className="w-full relative">
      {/* Resizable Navbar */}
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <a
            href="#"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
          >
            <span className="font-bold text-xl">Fairlx</span>
          </a>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <ThemeToggle />
            <NavbarButton variant="primary">Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <a
              href="#"
              className="relative z-20 flex items-center space-x-2 text-sm font-normal text-black dark:text-white"
            >
              <span className="font-bold text-xl">Fairlx</span>
            </a>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero Section */}
      <div className="min-h-[85vh] w-full bg-white dark:bg-black relative overflow-hidden pt-20 pb-20">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20">
            <span className="text-xs font-medium text-lime-600 dark:text-lime-400">New</span>
            <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
              Advertise with Us →
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-white leading-tight text-center max-w-4xl">
            Manage Smarter. Pay Fairly.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-center max-w-3xl mb-8">
            Meet the <span className="text-black dark:text-white font-semibold">usage-based platform</span> built to make your team management much easier. By teams at{" "}
            <span className="font-semibold text-black dark:text-white">Google</span>{" "}
            <span className="font-semibold text-black dark:text-white">Amazon</span>{" "}
            <span className="font-semibold text-black dark:text-white">Meta</span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-6 py-3 bg-lime-400 text-black rounded-lg font-semibold text-base hover:bg-lime-300 transition-colors flex items-center gap-2">
              Get started now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-slate-400 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 border-2 border-white dark:border-black"
                  />
                ))}
              </div>
              <span className="font-medium text-black dark:text-white">1M+ engineers already on board</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lime-400">📊</span>
              <span>Verifiable by Google Analytics</span>
            </div>
          </div>

          {/* Info Text */}
          <p className="text-xs text-slate-400 dark:text-slate-500">
            200+ questions are free to do
          </p>
        </div>
      </div>

      {/* Product Showcase with Container Scroll Animation */}
      <div className="bg-white dark:bg-black relative -mt-10">
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                Everything you need in one platform
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Experience seamless project management with powerful features designed for modern teams
              </p>
            </div>
          }
        >
          <div className="relative w-full h-full">
            {/* Product Screenshot Placeholder - Dark Theme to match GreatFrontEnd */}
            <div className="w-full h-full bg-slate-100 dark:bg-zinc-950 rounded-lg overflow-hidden border border-slate-300 dark:border-zinc-800">
              {/* Mock Browser/App Interface */}
              <div className="bg-slate-200 dark:bg-zinc-900 border-b border-slate-300 dark:border-zinc-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-xs text-slate-600 dark:text-slate-500">
                  greatfrontend.com
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature Cards */}
                {[
                  {
                    icon: "📊",
                    title: "Analytics Dashboard",
                    desc: "Real-time insights into your team's performance",
                  },
                  {
                    icon: "🤝",
                    title: "Team Collaboration",
                    desc: "Work together seamlessly across projects",
                  },
                  {
                    icon: "⚡",
                    title: "Automation",
                    desc: "Automate repetitive tasks and workflows",
                  },
                  {
                    icon: "💰",
                    title: "Usage-Based Pricing",
                    desc: "Pay only for what you use, nothing more",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-300 dark:border-zinc-800 rounded-xl p-6 hover:border-slate-400 dark:hover:border-zinc-700 transition-colors"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* Footer Section */}
      <div className="bg-white dark:bg-black py-16 text-center border-t border-slate-300 dark:border-zinc-900">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Ready to transform your workflow?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Join thousands of teams already using Fairlx
          </p>
          <button className="px-8 py-4 bg-lime-400 text-black rounded-lg font-semibold text-base hover:bg-lime-300 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
