import { NavigationLink } from "../../core/components/Navs";
import { UserOptionsDropdown } from './UserOptDropdown';

export const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between bg-white px-8 bg-gray-100 fixed top-0 w-full shadow-md shadow-platinum-100'>
      <div className='flex flex-1 items-center gap-2'>
        <img src='/loginLogo.png' alt='logo' className='size-12' />
        <h2 className='text-4xl font-semibold'>CVDC</h2>
      </div>
      <div className='flex items-center'>
        <NavigationLink to='/'>Inicio</NavigationLink>
        <NavigationLink to='/appointments'>Citas</NavigationLink>
        <NavigationLink to='/info'>Informacion</NavigationLink>
      </div>
      <div className='flex-1 flex justify-end'>
        <UserOptionsDropdown/>
      </div>
    </header>
  );
};
