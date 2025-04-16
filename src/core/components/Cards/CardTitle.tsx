import { forwardRef } from 'react'

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ children, className, ...props }, ref) => (
  <h2 ref={ref} className={`text-3xl font-bold text-center ${className}`} {...props}>{children}</h2>
))