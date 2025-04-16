import { forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  React.HtmlHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => (
  <button className={`px-4 py-2 rounded-sm ${className}`} ref={ref} {...props}>
    {children}
  </button>
));
