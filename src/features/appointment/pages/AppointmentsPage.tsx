import { Outlet } from 'react-router-dom';
import { AppointmentsNavBar } from '../components/AppointmentsNavBar';

export const AppointmentsPage = () => {
  return (
    <div className=' grid grid-cols-4 gap-4 mx-4 pt-20 min-h-screen'>
      <div>
        <div className='p-4 bg-white rounded-md'>
          <p className=' text-xl font-semibold'>Salas</p>
        </div>
      </div>
      <div className='col-span-2'>
        <div className='p-4 bg-white rounded-md'> 
          <p className=' text-xl font-semibold'>Turnos</p>
          <AppointmentsNavBar/>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
