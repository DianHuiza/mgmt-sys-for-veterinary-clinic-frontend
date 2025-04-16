export const FormField: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={` mb-4 ${className}`} {...props}>
    {children}
  </div>
)