import { NavLink, NavLinkProps } from 'react-router-dom'

export const AppointmentNavLink: React.FC<NavLinkProps & React.HTMLAttributes<HTMLAnchorElement>> = ({children, ...props}) => {
  return (
    <NavLink {...props} className={({isActive}) => `${isActive ? 'bg-white' : 'bg-inherit'} text-gray-500 hover:text-gray-700 px-3 py-2 rounded-full text-sm font-medium`}>
      {children}
    </NavLink>
  )
}