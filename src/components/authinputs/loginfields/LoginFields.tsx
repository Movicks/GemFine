import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../../libs/schemas/AuthSchemas';
import UsernameInput from '../registerfields/UsernameInput';
import PasswordInput from '../registerfields/PasswordInput';
import { Link } from 'react-router-dom';

type LoginFormInputs = {
    email: string;
    password: string;
};

const Loginfields: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const methods = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const [rememberMe, setRememberMe] = useState(false);

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            await login(data.email, data.password, rememberMe);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className='w-full h-full flex flex-col gap-2 justify-center div-top-animation'>
                <UsernameInput />
                <PasswordInput/>
                <div className='mt-5'>
                    <label className='flex items-center gap-2 bg-transparent'>
                        <input
                            className='w-5 h-5 border-2 border-gray-400 bg-transparent rounded-lg checked:bg-transparent bg-transparent checked:border-red-800'
                            type='checkbox'
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                    </label>
                </div>
                <button type="submit" className='mt-[1rem] bg-redGradient border-2 border-red-300 py-2 shadow-custom mt-5 rounded-full text-white font-bold text-lg w-full'>Login</button>
            </form>
            <div className='flex gap-2 w-full justify-center'>
                <span>Don`t have an account?</span>
                <Link to='/login' className='text-red-300'>Sign Up</Link>
            </div>
        </FormProvider>
    );
};

export default Loginfields;
