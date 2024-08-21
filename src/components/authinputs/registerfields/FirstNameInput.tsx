import {} from 'react'
import { useFormContext } from 'react-hook-form'
import { CiUser } from 'react-icons/ci';

const FirstNameInput = () => {
  const { register } = useFormContext();
  return (
    <div className='flex flex-col gap-1 bg-transparent'>
      <label htmlFor="firstName" className='text-gray-600'>First Name</label>
      <div className='h-[2.8rem] border-2 border-red-300 flex items-center gap-3 px-4 rounded-full shadow-custom'>
        <CiUser className='text-xl text-red-300'/>
        <input id='firstName' placeholder='First Name' {...register('firstName')} className='bg-transparent outline-none h-full w-full'/>
      </div>
    </div>
  )
}

export default FirstNameInput