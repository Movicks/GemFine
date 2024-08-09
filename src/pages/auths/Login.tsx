import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../contexts/AuthContext';
import { loginSchema } from '../../libs/schemas/AuthSchemas';
import { useNavigate, Link } from 'react-router-dom';

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  // Add a state to handle the remember me checkbox
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.email, data.password, rememberMe); // Now passing the rememberMe value as well
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <section className='flex justify-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">Login</button>
        <Link to='/register'>Register Here</Link>
      </form>
    </section>
  );
};

export default Login;
