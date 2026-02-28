import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "bg-transparent hover:bg-white/5 text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${glow ? 'animate-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
