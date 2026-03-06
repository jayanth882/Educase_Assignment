import React, { useId } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export function FloatingInput({ label, error, registration, className = '', ...props }: Props) {
  const id = useId();
  return (
    <div className={`relative mt-6 ${className}`}>
      <input
        id={id}
        {...registration}
        {...props}
        className={`peer w-full border ${
          error ? 'border-red-500' : 'border-[#E0E0E0]'
        } rounded-lg px-4 py-3.5 text-[15px] font-medium text-gray-900 bg-white focus:outline-none focus:border-[#6C25FF] focus:ring-1 focus:ring-[#6C25FF] transition-all`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-3 px-1 transition-all bg-white pointer-events-none
          peer-placeholder-shown:top-[15px] peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-400
          peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#6C25FF] peer-focus:font-medium
          -top-2.5 text-xs font-medium text-[#6C25FF] ${error ? 'text-red-500 peer-focus:text-red-500' : ''}`}
      >
        {label}{props.required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {error && <p className="text-xs text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  );
}
