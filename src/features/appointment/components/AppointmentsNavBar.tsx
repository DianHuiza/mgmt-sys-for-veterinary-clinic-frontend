import { AppointmentNavLink } from './AppointmentNavLink'

export const AppointmentsNavBar = () => {
  return (
    <div className='rounded-full p-2 bg-isabelline flex'>
      <AppointmentNavLink to ='today'>Hoy</AppointmentNavLink>
      <AppointmentNavLink to ='pending'>Pendientes</AppointmentNavLink>
      <AppointmentNavLink to ='lost'>Perdidos</AppointmentNavLink>
    </div>
  )
}