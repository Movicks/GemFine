import {} from 'react'
import BalanceCard from './BalanceCard'

const CurrentAmount = () => {
  return (
    <BalanceCard
      bgColor='bg-redGradient'
      textColor='text-gray-100'
      subText='text-gray-200'
      balanceTitle='Current Balance'
      Balance='9,245'
      SbtnStyles='w-[14rem] h-[2rem] bg-black shadow-custom rounded-md text-gray-200 text-center'
      SbtnContent={`+ Receive`}
    />
  )
}

export default CurrentAmount