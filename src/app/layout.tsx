"use client";

import { Geist, Geist_Mono, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  ThemeToggle,
} from "@/components/ui/resizable-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Docs", link: "#docs" },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} antialiased`}
      >
        <div className="w-full relative">
          {/* Resizable Navbar */}
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
              <a
                href="/"
                className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
              >
                <span className="font-bold text-xl">Fairlx</span>
              </a>
              <NavItems items={navItems} />
              <div className="flex items-center gap-4">
                <NavbarButton variant="secondary" href="https://app.fairlx.com" target="_blank" rel="noopener noreferrer">Login</NavbarButton>
                <ThemeToggle />
                <NavbarButton variant="primary">Get Started</NavbarButton>
              </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavHeader>
                <a
                  href="/"
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
                    href="https://app.fairlx.com"
                    target="_blank"
                    rel="noopener noreferrer"
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

          {/* Page Content */}
          {children}
        </div>
      </body>
    </html>
  );
}
