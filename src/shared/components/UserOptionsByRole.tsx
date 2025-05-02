import { Link } from "react-router-dom";
import { DropdownItem } from "../../core/components/Dropdown/DropdownItem";
import { EditorIcon } from "../../assets/icons/EditorIcon";
import { ShieldCheckIcon } from "../../assets/icons/ShieldCheckIcon";
import { UsersIcon } from '../../assets/icons/UsersIcon';

interface UserOptionsByRoleProps {
  role: string;
}

export const UserOptionsByRole: React.FC<UserOptionsByRoleProps> = ({
  role,
}) => {
  return (
    <>
      {role === "ADMIN" && (
        <DropdownItem>
          <Link className='flex gap-2 items-center' to='/admin'>
            <ShieldCheckIcon /> Panel de Administrador
          </Link>
        </DropdownItem>
      )}
      {["DOCTOR", "ADMIN"].includes(role) && (
        <>
          <DropdownItem>
            <Link className='flex gap-2 items-center' to='/info'>
              <EditorIcon />
              Editor de Historial Medico
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className='flex gap-2 items-center' to='/rooms'>
              <UsersIcon />
              Iniciar Sala
            </Link>
          </DropdownItem>
        </>
      )}
    </>
  );
};
