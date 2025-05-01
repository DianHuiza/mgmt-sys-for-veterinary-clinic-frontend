import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "../../../core/components/Cards";
import { AuthForm } from '../components/AuthForm';

export const LoginPage = () => {
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Card className='bg-white'>
        <CardHeader>
          <img src="/loginLogo.png" alt="logo" className='w-24 h-24 mb-2 opacity-60'/>
          <CardTitle>Bienvenido</CardTitle>
          <CardDescription>
            {" "}
            Introduzca sus credenciales para iniciar la sesion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm />
        </CardContent>
      </Card>
    </div>
  );
};
