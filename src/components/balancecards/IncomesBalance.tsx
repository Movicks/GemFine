import {} from 'react'
import BalanceCard from './BalanceCard'

const IncomesBalance = () => {
  return (
    <BalanceCard
      bgColor='bg-white'
      textColor='text-red-500'
      subText='text-gray-600'
      balanceTitle='Incomes'
      Balance='105,420'
      SbtnStyles=''
      SbtnContent={``}
    />
  )
}

export default IncomesBalance