import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "100%" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Refined Geometric Arc */}
      <path 
        d="M 370 100 A 190 190 0 1 1 130 100" 
        stroke="currentColor" 
        strokeWidth="28" 
        strokeLinecap="round" 
        fill="none"
      />
      
      {/* Brand Red Signature Bar - Explicitly colored for visibility */}
      <rect 
        x="236" 
        y="15" 
        width="28" 
        height="110" 
        rx="14" 
        fill="#e11d48" 
      />
      
      {/* Main Brand Initials - Montserrat Bold */}
      <text 
        x="50%" 
        y="255" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fill="currentColor" 
        fontFamily="Montserrat, system-ui, sans-serif" 
        fontWeight="800" 
        fontSize="170"
        letterSpacing="-0.02em"
      >ED</text>
      
      {/* Brand Subtitle - Ella's Diensten 23pt */}
      <text 
        x="50%" 
        y="340" 
        textAnchor="middle" 
        fill="currentColor" 
        fontFamily="Montserrat, system-ui, sans-serif" 
        fontWeight="700" 
        fontSize="23"
        letterSpacing="0.25em"
      >ELLA'S DIENSTEN</text>
    </svg>
  );
};

export default Logo;