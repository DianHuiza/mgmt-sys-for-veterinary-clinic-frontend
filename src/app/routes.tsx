import { RouteObject } from 'react-router-dom';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
import { BaseLayout } from '../shared/layouts/BaseLayout';
import { AppointmentsPage } from '../features/appointment/pages/AppointmentsPage';
import { InfoPage } from '../features/client/pages/InfoPage';
import { AdminPage } from '../features/admin/pages/AdminPage';
import { RoomPanelPage } from '../features/admin/pages/RoomPanelPage';
import { ClientPanelPage } from '../features/admin/pages/ClientPanelPage';

export const routes: RouteObject[] = [
  {
    element: <ProtectedRoute roles={['ADMIN', 'DOCTOR', 'RECEPTIONIST']}><BaseLayout /></ProtectedRoute>,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>
      },
      {
        path: '/appointments',
        element: <AppointmentsPage />,
        children: [
          {
            path: 'today',
            element: <h1>Today</h1>,
          },
          {
            path: 'pending',
            element: <h1>Tomorrow</h1>,
          },
          {
            path: 'lost',
            element: <h1>Lost</h1>,
          },
        ]
      },
      {
        path: '/info',
        element: <InfoPage />,
        children: [
          {
            path: 'client/:id',
            element: <h1>Client</h1>,
          }
        ]
      },
    ]
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: 'appointments',
        element: <div>turnos</div>
      },
      {
        path: 'clients',
        element: <ClientPanelPage />
      },
      {
        path: 'users',
        element: <div>Usuarios</div>
      },
      {
        path: 'rooms',
        element: <RoomPanelPage/>
      },
      {
        path: 'records',
        element: <div>Historail Clinico</div>
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
]