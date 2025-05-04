import { NavLink, NavLinkProps } from 'react-router-dom'

export const AdminNavLink: React.FC<NavLinkProps & React.HTMLAttributes<HTMLAnchorElement>> = ({ children, to, ...props }) => {
  return (
    <NavLink to={to} className={({isActive}) => `px-4 py-2 rounded-md font-semibold ${ isActive? 'bg-light-cyan text-caribbean-current ': ''}`}  {...props}>{children}</NavLink>
  )
}