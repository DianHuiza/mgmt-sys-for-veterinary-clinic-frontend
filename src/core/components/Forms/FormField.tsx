export const FormField: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={` mb-4 flex flex-col gap-2 ${className}`} {...props}>
    {children}
  </div>
)