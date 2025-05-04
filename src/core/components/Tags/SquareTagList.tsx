interface SquareTagListProps {
  children: React.ReactNode
  className?: string
}

export const SquareTagList: React.FC<SquareTagListProps> = ({children, className}) => {
  return (
    <div className={`flex gap-2 p-1 rounded-lg ${className}`}>
      {children}
    </div>
  )
}