import { } from 'react'
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md'

const SavingsBalance = () => {
  return (
    <div className='flex items-center justify-between h-full gap-2 w-full'>
      <div className='flex items-center h-full gap-5'>
        <MdOutlineEnergySavingsLeaf className='text-3xl text-red-500'/>
        <div className='flex flex-col gap-2 h-full justify-center'>
            <span className='text-md text-gray-500 w-full max-w-[7rem]'>Total Saved</span>
            <h1 className='text-[1.6rem] text-red-500'>$900</h1>
        </div>
      </div>
      <div className='flex items-end gap-2 h-full justify-end'>
        <button className='py-1 w-[4.5rem] md:w-[5.5rem] md:px-3 bg-gray-900 text-white rounded-md'>+ Add</button>
        <button className='py-1 px-3 md:px-5 bg-red-500 text-gray-100 rounded-md'>Spend</button>
      </div>
    </div>
  )
}

export default SavingsBalance