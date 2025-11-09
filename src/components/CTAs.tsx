"use client";

import React, { useState } from "react";
import { Rocket, Github, ArrowRight } from "lucide-react";

// Mock analytics hook - replace with actual implementation
const useAnalytics = () => {
  return {
    track: (event: string) => {
      try {
        console.log(`Analytics event: ${event}`);
        // Replace with actual analytics call
        // window.gtag?.('event', event);
      } catch (error) {
        console.error('Analytics tracking failed:', error);
      }
    }
  };
};

interface CTAProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  as?: "button" | "a";
  isLoading?: boolean;
  className?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

export function PrimaryCTA({
  children,
  onClick,
  href,
  as = "button",
  isLoading = false,
  className = "",
  icon,
  ariaLabel,
}: CTAProps) {
  const Tag = as === "a" ? "a" : "button";
  
  return (
    <Tag
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={isLoading}
      className={`
        inline-flex items-center justify-center gap-2 
        px-6 py-3 rounded-lg font-semibold text-lg
        bg-[#1E90FF] text-white 
        hover:bg-[#1873CC] active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
        focus-visible:ring-[#1E90FF] focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900
        transition-all duration-200 shadow-lg shadow-blue-500/20
        disabled:opacity-50 disabled:cursor-not-allowed
        w-full sm:w-auto min-w-[180px] h-[48px] flex-shrink-0
        ${className}
      `}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon}
      {children}
    </Tag>
  );
}

export function OutlineCTA({
  children,
  onClick,
  href,
  as = "button",
  isLoading = false,
  className = "",
  icon,
  ariaLabel,
  target,
  rel,
}: CTAProps) {
  const Tag = as === "a" ? "a" : "button";
  
  return (
    <Tag
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      disabled={isLoading}
      className={`
        inline-flex items-center gap-2 px-6 py-3 rounded-[14px]
        border-2 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white font-semibold text-lg
        hover:border-slate-400 dark:hover:border-white/40 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
        focus-visible:ring-slate-400 dark:focus-visible:ring-white/50 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon}
      {children}
    </Tag>
  );
}

export function TextCTA({
  children,
  onClick,
  className = "",
  ariaLabel,
}: CTAProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        inline-flex items-center gap-2 text-slate-600 dark:text-white/80 font-medium
        hover:text-slate-900 dark:hover:text-white hover:gap-3
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
        focus-visible:ring-slate-400 dark:focus-visible:ring-white/50 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900
        transition-all duration-200 rounded-md px-2 py-1
        ${className}
      `}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}

// Pre-configured CTA components with analytics
export function StartFreeCTA({ isLoading = false }: { isLoading?: boolean }) {
  const analytics = useAnalytics();
  
  const handleClick = () => {
    analytics.track('cta_start_free');
  };
  
  return (
    <PrimaryCTA
      onClick={handleClick}
      ariaLabel="Start Free trial"
      icon={<Rocket className="w-5 h-5" />}
      isLoading={isLoading}
    >
      Start Free
    </PrimaryCTA>
  );
}

export function ViewGitHubCTA() {
  const analytics = useAnalytics();
  const [isHovered, setIsHovered] = React.useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    analytics.track('cta_view_github');
    
    // Open GitHub in a new tab
    window.open('https://github.com/stemlen/Fairlx', '_blank');
    
    // Show star prompt after a short delay
    setTimeout(() => {
      const starPrompt = window.confirm('⭐ Enjoying Fairlx? Help us grow by starring the repository on GitHub!');
      if (starPrompt) {
        window.open('https://github.com/stemlen/Fairlx/stargazers', '_blank');
      }
    }, 1000);
  };
  
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative inline-flex items-center justify-center
        px-6 py-3 rounded-lg font-semibold text-lg
        transition-all duration-200 ease-in-out
        ${isHovered 
          ? 'bg-amber-50 dark:bg-amber-50/10 border-amber-300 dark:border-amber-500/50' 
          : 'bg-white dark:bg-white/5 border-amber-200 dark:border-amber-500/30'
        }
        border-2 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-amber-900/20
        focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-900
        w-full sm:w-auto min-w-[180px] h-[48px] flex-shrink-0
      `}
      aria-label="Star Fairlx on GitHub"
    >
      <div className="flex items-center justify-center gap-2 w-full">
        <svg 
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isHovered ? 'scale-110 text-amber-600 dark:text-amber-400' : 'scale-100 text-amber-500 dark:text-amber-500'}`} 
          viewBox="0 0 16 16" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z" 
          />
        </svg>
        <span className={`font-semibold whitespace-nowrap ${isHovered ? 'text-amber-700 dark:text-amber-300' : 'text-amber-600 dark:text-amber-400'}`}>
          Star on GitHub
        </span>
      </div>
      {isHovered && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          Give us a star! ⭐
        </span>
      )}
    </button>
  );
}

export function LearnMoreCTA() {
  const analytics = useAnalytics();
  
  const handleClick = () => {
    analytics.track('cta_learn_more');
    // Smooth scroll to features section
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <TextCTA
      onClick={handleClick}
      ariaLabel="Learn more about Fairlx"
    >
      Learn More About Fairlx
    </TextCTA>
  );
}
