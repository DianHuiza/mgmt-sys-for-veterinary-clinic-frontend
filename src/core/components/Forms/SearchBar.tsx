import { Glassicon } from '../../../assets/icons/Glassicon'

interface SearchBarProps {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void
  placeholder?: string
  className?: string
}

export const SearchBar = ({onSearch, placeholder = 'Buscar...', className}: SearchBarProps) => {
  return (
    <form action="" onSubmit={onSearch} className={`border-platinum rounded-md border px-4 py-2 flex ${className}`}>
      <input type="text" placeholder={placeholder} className='flex-1 focus:outline-none'/>
      <button type="submit"><Glassicon/></button>
    </form>
  )
}