import { Outlet } from 'react-router-dom';
import { ClientSideBar } from '../components/ClientSideBar';

export const InfoPage = () => {
  return (
    <div className='h-screen flex pt-16'>
      <div className='w-md'>
        <ClientSideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
