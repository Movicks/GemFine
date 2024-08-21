import {} from 'react'
import { useFormContext } from 'react-hook-form';
import { LuUserCircle } from 'react-icons/lu';

const UsernameInput = () => {
  const { register } = useFormContext();
  return (
    <div className='flex flex-col gap-1 bg-transparent'>
      <label htmlFor="username" className='text-gray-600'>Username</label>
      <div className='h-[2.8rem] border-2 border-red-300 flex items-center gap-3 px-4 rounded-full shadow-custom'>
        <LuUserCircle className='text-xl text-red-300'/>
         <input id='username' placeholder='Username' {...register('username')} className='bg-transparent outline-none h-full w-full'/>
      </div>
      
    </div>
  )
}

export default UsernameInput