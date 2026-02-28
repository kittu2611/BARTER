import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ icon, label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-white/60 ml-1">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
            {icon}
          </div>
        )}
        <input
          className={`glass-input w-full ${icon ? 'pl-11' : 'pl-4'} ${error ? 'border-red-500/50' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
    </div>
  );
};
