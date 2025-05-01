import { RouteObject } from 'react-router-dom';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { ProtectedRoute } from '../features/auth/components/ProtectedRoute';
import { BaseLayout } from '../shared/layouts/BaseLayout';
import { AppointmentsPage } from '../features/appointment/pages/AppointmentsPage';

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
        path: '/contact',
        element: <h1>Contact</h1>,
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
]