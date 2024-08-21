import {} from 'react'
import { useFormContext } from 'react-hook-form';
import { SiAmazonsimpleemailservice } from 'react-icons/si';

const EmailInput = () => {
  const { register } = useFormContext();
  return (
    <div className='flex flex-col gap-1 bg-transparent'>
      <label htmlFor="email" className='text-gray-600'>Email</label>
      <div className='h-[2.8rem] border-2 border-red-300 flex items-center gap-3 px-4 rounded-full shadow-custom'>
        <SiAmazonsimpleemailservice className='text-xl text-red-300'/>
        <input id='email' placeholder='Email' {...register('email')} className='bg-transparent outline-none h-full w-full'/>
      </div> 
    </div>
  )
}

export default EmailInput