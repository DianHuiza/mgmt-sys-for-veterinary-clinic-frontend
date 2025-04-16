import { forwardRef } from "react";

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col justify-between items-center p-6 ${className}`} {...props}>
    {children}
  </div>
))

CardHeader.displayName = "CardHeader";
