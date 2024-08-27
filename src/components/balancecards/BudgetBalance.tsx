import {} from 'react'
import BalanceCard from './BalanceCard';

const BudgetBalance = () => {
  return (
    <BalanceCard
      bgColor='bg-white'
      textColor='text-red-500'
      subText='text-gray-500'
      balanceTitle='Budgets'
      Balance='700'
      SbtnStyles='w-[14rem] h-[2rem] bg-white shadow-custom rounded-md text-red-500 text-center border-2 border-red-500 '
      SbtnContent={`Add Budget`}
    />
  )
}

export default BudgetBalance