import {} from 'react'
import Savings from './Savings'
import DetailsLinks from '../details/DetailsLinks'
import Transactions from '../Transactions/Transactions'

type Props = {}

function SavingMain({}: Props) {
    return (
        <div className='bg-white flex flex-col gap-1 w-full min-h-[10rem] h-auto shadow-custom rounded-lg p-4'>
        <DetailsLinks />
        <div className='flex flex-col gap-2 md:flex-row md:gap-5'>
          <div className='bg-gray-100 w-full md:max-w-[30rem] h-[6.7rem] md:h-[8.5rem] rounded-lg p-4 flex items-center'>
            <Savings />
          </div>
          <div className='bg-gray-100 w-full md:max-w-[30rem] h-[8.5rem] md:h-[8.5rem] rounded-lg px-2 py-2'>
            <Transactions />
          </div>
        </div>
      </div>
  )
}

export default SavingMain