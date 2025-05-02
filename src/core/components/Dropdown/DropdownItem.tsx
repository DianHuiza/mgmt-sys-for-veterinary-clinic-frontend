interface DropdownItemProps {
  children: React.ReactNode
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return (
    <div className='py-2 px-4 hover:bg-platinum'>
      {children}
    </div>
  )
}