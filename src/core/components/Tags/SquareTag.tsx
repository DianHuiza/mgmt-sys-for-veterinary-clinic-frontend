interface SquareTagProps {
  onClick?: () => void
  label: string
  classname?: string
  icon?: React.ReactNode
}

export const SquareTag: React.FC<SquareTagProps> = ({ onClick, label, classname, icon }) => {
  return (
    <button className={`flex items-center gap-2 rounded-md px-2 text-sm ${classname }`} onClick={onClick}>
      {icon} 
      <span>{label}</span>
    </button>
  )
}