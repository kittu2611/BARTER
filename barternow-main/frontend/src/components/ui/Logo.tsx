import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center ${className} overflow-hidden`}>
      <svg 
        className="h-full w-auto" 
        viewBox="0 0 400 120" 
        preserveAspectRatio="xMinYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="luminanceToAlpha">
            {/* 
                The matrix below:
                1. Turns every pixel white (R=1, G=1, B=1)
                2. Sets Alpha based on (1 - average(R,G,B)).
                This makes the white background transparent and black text white.
            */}
            <feColorMatrix 
              type="matrix" 
              values="0 0 0 0 1  
                      0 0 0 0 1  
                      0 0 0 0 1  
                      -1 -1 -1 1 0" 
            />
          </filter>
        </defs>
        <image 
          href="/logo.jpeg" 
          width="400" 
          height="120" 
          filter="url(#luminanceToAlpha)" 
          preserveAspectRatio="xMinYMid meet"
        />
      </svg>
    </div>
  );
};

export default Logo;
