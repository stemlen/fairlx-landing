'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type TextHoverBackgroundProps = {
  text: string;
  className?: string;
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
};

export function TextHoverBackground({
  text,
  className = '',
  textSize = 'lg',
  opacity = 0.1,
}: TextHoverBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const sizeMap = {
    sm: 'text-4xl',
    md: 'text-6xl',
    lg: 'text-8xl',
    xl: 'text-9xl',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCursor({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 grid place-items-center ${sizeMap[textSize]} font-bold text-center text-transparent`}
        style={{
          WebkitTextStroke: `1px rgba(255, 255, 255, ${opacity * 0.8})`,
          opacity: isHovered ? 1 : 0.7,
          transition: 'opacity 0.3s ease',
          background: isHovered 
            ? `radial-gradient(
                circle at ${cursor.x}% ${cursor.y}%,
                rgba(255, 255, 255, ${opacity * 1.5}) 0%,
                rgba(255, 255, 255, ${opacity * 0.8}) 20%,
                rgba(255, 255, 255, ${opacity * 0.5}) 40%,
                transparent 70%
              )`
            : `rgba(255, 255, 255, ${opacity * 0.3})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {text}
      </div>
    </div>
  );
}
