import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { TbPasswordMobilePhone } from 'react-icons/tb';

const PasswordInput = () => {
  const { register } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col gap-1 bg-transparent'>
      <label htmlFor="password" className='text-gray-600'>Password</label>
      <div className='h-[2.8rem] border-2 border-red-300 flex items-center gap-3 px-4 rounded-full shadow-custom'>
        <TbPasswordMobilePhone className='text-xl text-red-300'/>
        <input 
          type={showPassword ? 'text' : 'password'} 
          id='password' 
          placeholder='Password' 
          {...register('password')} 
          className='bg-transparent outline-none h-full w-full' 
        />
        <div onClick={togglePasswordVisibility} className='cursor-pointer'>
          {showPassword ? <ImEyeBlocked className='text-xl text-red-300'/> : <ImEye className='text-xl text-red-300'/>}
        </div>
      </div>
    </div>
  )
}

export default PasswordInput;
