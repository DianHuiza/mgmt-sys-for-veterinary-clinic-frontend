import { forwardRef } from 'react'

export const Card= forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={`rounded-lg shadow-sm border border-platinum ${className}`} {...props}>
    {children}
  </div>
))

Card.displayName = "Card";
