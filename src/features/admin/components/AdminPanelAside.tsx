import { useSelector } from 'react-redux'
import { AvatarPlaceholder } from '../../../core/components/Avatar/AvatarPlaceholder'
import { AdminNavLink } from './AdminNavLink'
import { RootState } from '../../../store'
import { ArrowOutSquareIcon } from '../../../assets/icons/ArrowOutSquareIcon'
import { HomeIcon } from '../../../assets/icons/HomeIcon'
import { Link } from 'react-router-dom'

export const AdminPanelAside = () => {
  const user = useSelector((state: RootState) => state.auth)
  
  return (
    <div className='w-sm h-[calc(1vh,-1rem)] bg-white flex flex-col p-2 m-2 rounded-lg'>
      <div className='flex items-center gap-4 p-4'>
        <div className='size-12'>
          <AvatarPlaceholder name={user.name} />
        </div>
        <div>
          <p className='font-bold'>{user.name}</p>
          <p className='text-platinum-600'>Administrador</p>
        </div>

      </div>
      <div className='flex flex-col p-4 gap-2 flex-1'>
        <AdminNavLink to='users'>Usuarios</AdminNavLink>
        <AdminNavLink to='rooms'>Salas</AdminNavLink>
        <AdminNavLink to='clients'>Clientes</AdminNavLink>
        <AdminNavLink to='appointments'>Citas</AdminNavLink>
        <AdminNavLink to='records'>Historiales Medicos</AdminNavLink>
      </div>
      <div className='mx-4 py-4 flex flex-col gap-2 border-t-4 border-platinum-200 rounded-sm'>
        <button className=' text-left p-2 flex gap-2'> <ArrowOutSquareIcon /> Cerrar Sesion</button>
        <Link to='/' className=' text-left p-2 flex gap-2'> <HomeIcon/> Ir a la página de inicio</Link>
      </div>
    </div>
  )
}