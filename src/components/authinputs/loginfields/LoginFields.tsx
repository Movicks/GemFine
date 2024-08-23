import React, { useState, useRef, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../../libs/schemas/AuthSchemas';
import UsernameInput from '../registerfields/UsernameInput';
import PasswordInput from '../registerfields/PasswordInput';
import { Link } from 'react-router-dom';
import ToastContainer, { ToastContainerHandle } from '../../error404s/toats/ToastContainer';

type LoginFormInputs = {
    username: string;
    password: string;
};

const Loginfields: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const methods = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const { errors } = methods.formState; // Access errors from formState
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false); // State to manage loading
    const toastRef = useRef<ToastContainerHandle>(null);

    const debounce = (func: Function, delay: number) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const showErrorToast = debounce((message: string) => {
        toastRef.current?.addToast(message, 'error');
    }, 1000);

    useEffect(() => {
        if (errors.username) {
            showErrorToast(errors.username.message || 'Invalid username');
        } else if (errors.password) {
            showErrorToast(errors.password.message || 'Invalid password');
        }
    }, [errors]);

    const onSubmit = async (data: LoginFormInputs) => {
        setLoading(true); // Set loading state to true when form is submitted
        try {
            await login(data.username, data.password, rememberMe);
            methods.clearErrors(); // Clear errors after successful submission
            navigate('/'); // Navigate after login
        } catch (error) {
            toastRef.current?.addToast('Login failed. Please try again.', 'error');
            console.error('Login failed', error);
        } finally {
            setLoading(false); // Set loading state back to false after submission
        }
    };

    return (
        <>
            <ToastContainer ref={toastRef} /> {/* Render the ToastContainer */}

            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500">
                        Loading.......
                    </div>
                </div>
            ) : (
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className='relative w-full h-full flex flex-col gap-2 justify-center div-top-animation'>
                        <UsernameInput />
                        <PasswordInput />

                        <div className='mt-5'>
                            <label className='flex items-center gap-2 bg-transparent text-gray-500'>
                                <input
                                    className='w-5 h-5 border-2 border-gray-400 bg-transparent rounded-lg checked:bg-red-500'
                                    type='checkbox'
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                Remember me
                            </label>
                        </div>
                        <button type="submit"
                            className='mt-[1rem] bg-redGradient border-2 border-red-300 py-2 shadow-custom mt-5 rounded-full text-white font-bold text-lg w-full'
                        >
                            Login
                        </button>
                    </form>
                    <div className='flex gap-2 w-full justify-center'>
                        <span className='text-gray-500'>Don't have an account?</span>
                        <Link to='/register' className='text-red-300'>Sign Up</Link>
                    </div>
                </FormProvider>
            )}
        </>
    );
};

export default Loginfields;
