"use client";

import { Button } from "./button";
import { Separator } from "./separator";
import { Card } from "./card";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function ModernFooter() {
  return (
    <footer className="w-full bg-white dark:bg-black relative overflow-hidden">
      <Card className="w-full rounded-none border-x-0 border-b-0 bg-transparent shadow-sm md:rounded-none md:border-0 dark:bg-black relative z-10">
        <div className="absolute inset-0 -z-0">
          <DottedGlowBackground
            className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
            opacity={1}
            gap={10}
            radius={1.6}
            colorLightVar="--color-neutral-400"
            glowColorLightVar="--color-neutral-500"
            colorDarkVar="--color-neutral-500"
            glowColorDarkVar="--color-sky-800"
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={1.6}
            speedScale={1}
          />
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-zinc-800" />
        <div className="w-full max-w-screen-xl mx-auto px-6 py-16 text-center relative z-10">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-black dark:text-white md:text-4xl">
            Feel free to reach out—our doors are open for creative minds and collaborations!
          </h2>
          
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-black px-8 py-6 text-base font-medium text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Get Fairlx
            </Button>
          </div>
        </div>

        <Separator className="bg-slate-200 dark:bg-zinc-800" />

        <div className="w-full max-w-screen-xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-black dark:text-white">Fairlx</span>
            </div>

            {/* Navigation Links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                {['About', 'Features', 'Works', 'Career'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`}
                      className="transition-colors hover:text-black dark:hover:text-white dark:text-slate-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  aria-label={label}
                  className="text-slate-500 transition-colors hover:text-black dark:text-slate-300 dark:hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <Separator className="my-6 bg-slate-200 dark:bg-zinc-800" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-300 md:flex-row">
            <p>©2025 Stemlen, Made with ❤️ for better web.</p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="transition-colors hover:text-black dark:text-slate-300 dark:hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-black dark:text-slate-300 dark:hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        
      </Card>
    </footer>
  );
}

export default ModernFooter;
