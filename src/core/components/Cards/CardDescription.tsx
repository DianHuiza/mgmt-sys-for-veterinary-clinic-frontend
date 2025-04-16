export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p className={`text-md text-platinum-500 ${className}`} {...props}>{children}</p>
  )
}