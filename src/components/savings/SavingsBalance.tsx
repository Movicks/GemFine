import { } from 'react'
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md'

const SavingsBalance = () => {
  return (
      <div className='flex items-center h-full gap-5'>
          <MdOutlineEnergySavingsLeaf className='text-3xl text-red-500'/>
          <div className='flex flex-col gap-2'>
              <span className='text-md text-gray-500'>Total Saved</span>
              <h1 className='text-[1.6rem]'>$900</h1>
          </div>
    </div>
  )
}

export default SavingsBalance