import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={`rounded-md border border-platinum px-4 py-2 text-md font-medium leading-none transition duration-150 ease-in-out hover:border-jet-300 focus:border-jet-500 focus:outline-none focus:ring-0 ${className}`}
    {...props}
  />
))