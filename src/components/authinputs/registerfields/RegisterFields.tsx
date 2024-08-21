import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { registerSchema } from '../../../libs/schemas/AuthSchemas';
import FirstNameInput from './FirstNameInput';
import LastNameInput from './LastNameInput';
import EmailInput from './EmailInput';
import UsernameInput from './UsernameInput';
import CountryInput from './CountryInput';
import PasswordInput from './PasswordInput';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import PhoneInput from './PhoneInput';

type RegisterFormInputs = {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    country: string;
    phone: string;
    password: string;
}

const Registerfields: React.FC = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const methods = useForm<RegisterFormInputs>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
        try {
            // 'rememberMe' is not required for registration and 'otherData' is the rest of the form data
            await register(data.email, data.password, {
                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.userName,
                country: data.country,
                phone: data.phone,
            }, false); // rememberMe is not used in registration, it is then set to false
            navigate('/');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <FormProvider {...methods}>
                <>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className='w-full h-full flex flex-col justify-center div-top-animation'>
                        <FirstNameInput />
                        <LastNameInput />
                        <UsernameInput/>
                        <EmailInput />
                        <div className='flex flex-col w-full md:flex-row md:gap-3'>
                            <CountryInput />
                            <PhoneInput/>
                        </div> 
                        <PasswordInput/>
                        <button type="submit" className='bg-redGradient border-2 border-red-300 py-2 shadow-custom mt-5 rounded-full text-white font-bold text-lg w-full'>Sign Up</button>
                    </form>
                    <div className='flex gap-2 w-full justify-center'>
                        <span>Already have an account?</span>
                        <Link to='/login' className='text-red-300'>Login</Link>
                    </div>
                </>
       </FormProvider>
  );
};

export default Registerfields;
