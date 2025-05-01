import { useState } from 'react';
import { FormField, Input, Label } from '../../../core/components/Forms';
import { SubmitButton } from '../../../core/components/Forms/SubmitButton';
import { loginService } from '../services/login';
import { formatFormData } from '../../../shared/utils/formatFormData';
import { loginSchema } from '../utils/authSchema';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/slices/auth.slice';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const AuthForm = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsPending(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = formatFormData(formData, loginSchema);
    try {
      const user = await loginService(data.email, data.password);
      dispatch(login(user));
    } catch (error) {
      console.log(error);
    }
    setIsPending(false);
    navigate(redirectTo || '/');

  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <FormField>
        <Label>Email</Label>
        <Input type='email' placeholder='example@example.com' name='email' />
      </FormField>
      <FormField>
        <Label>Contraseña</Label>
        <Input type='password' placeholder='********' name='password' />
      </FormField>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='remember'
            name='remember'
            className='h-4 w-4 rounded'
          />
          <label htmlFor='remember' className='ml-2'>
            Recordarme
          </label>
        </div>
        <a className='text-caribbean-current' href=''>
          Olvide mi contraseña
        </a>
      </div>
      <SubmitButton label='Iniciar Sesion' isSubmitting={isPending} />
    </form>
  );
};
