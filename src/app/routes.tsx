import { RouteObject } from 'react-router-dom';
import { LoginPage } from '../features/auth/pages/loginPage';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: '/about',
    element: <h1>About</h1>,
  },
  {
    path: '/contact',
    element: <h1>Contact</h1>,
  },
]