import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const UserOptionsButtons: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth)
  return (
    <button className=' border rounded-full border-jet px-4 py-2 max-w-56 truncate font-semibold'>
      {user.name}
    </button>
  )
}