import React from 'react';

const AurkLogoSVG = ({ className = "", size = 40 }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Abstract Architectural 'A' with a minimalist touch */}
        <path 
            d="M50 15L85 85H70L50 45L30 85H15L50 15Z" 
            fill="currentColor" 
        />
        {/* Elegant crossbar detail */}
        <path 
            d="M38 70H62" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round"
        />
        {/* Subtle geometric accent symbolizing precision/design */}
        <rect x="47" y="10" width="6" height="6" fill="currentColor" opacity="0.8" />
    </svg>
);

export default AurkLogoSVG;
