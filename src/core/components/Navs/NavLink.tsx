import { isPending } from '@reduxjs/toolkit'
import { NavLinkProps, NavLink } from 'react-router-dom'

export const NavigationLink: React.FC<NavLinkProps> = ({children, ...props}) => {
  return (
    <NavLink className={({isActive}) => `py-4 px-2 border-b-4 ${isActive ? 'border-caribbean-current ' : 'border-b-transparent'}`} {...props}>
      {children}
    </NavLink>
  )
}