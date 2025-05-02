import { useSelector } from "react-redux";
import { DropdownItem } from "../../core/components/Dropdown/DropdownItem";
import { UserOptionsButtons } from "./UserOptionsButton";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
import { UserIcon } from '../../assets/icons/UserIcon';
import { ArrowOutSquareIcon } from '../../assets/icons/ArrowOutSquareIcon';
import { Dropdown } from '../../core/components/Dropdown/Dropdown';
import { UserOptionsByRole } from './UserOptionsByRole';

export const UserOptionsDropdown = () => {
  const userRole = useSelector((state: RootState) => state.auth.role);
  return (
    <Dropdown trigger={<UserOptionsButtons />}>
      <UserOptionsByRole role={userRole} />
      <DropdownItem>
        <Link className='flex gap-2 items-center' to='/profile/1'>
          <UserIcon /> Usuario
        </Link>
      </DropdownItem>
      <DropdownItem>
        <button className='flex gap-2 items-center'>
          <ArrowOutSquareIcon /> Cerrar Sesion
        </button>
      </DropdownItem>
    </Dropdown>
  );
};
