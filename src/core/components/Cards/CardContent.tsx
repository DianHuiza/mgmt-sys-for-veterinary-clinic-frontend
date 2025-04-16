import { forwardRef } from 'react'

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={` p-6 ${className}`} {...props}>
    {children}
  </div>
))

CardContent.displayName = "CardContent";
