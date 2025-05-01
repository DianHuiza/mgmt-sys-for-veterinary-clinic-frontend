import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles }) => {
  const role = useSelector((state: RootState) => state.auth.role);
  const status = useSelector((state: RootState) => state.auth.status);
  
  if (status === 'Unauthenticated') {
    return <Navigate to={`/login?redirectTo=${window.location.pathname}`} />;
  }

  if (status === 'Pending') {
    return <div>Loading</div>;
  }

  if (roles.includes(role)) {
    return <>{children}</>;
  }else{
    return <Navigate to={`/login?redirectTo=${window.location.pathname}`}/>
  }
};