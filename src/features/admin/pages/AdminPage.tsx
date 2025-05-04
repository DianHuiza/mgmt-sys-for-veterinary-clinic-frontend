import { Outlet } from 'react-router-dom'
import { AdminPanelAside } from '../components/AdminPanelAside'

export const AdminPage = () => {
  return (
    <div className='flex h-screen'>
      <AdminPanelAside />
      <Outlet />
    </div>
  )
}