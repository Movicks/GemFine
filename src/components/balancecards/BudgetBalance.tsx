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
      SbtnStyles=''
      SbtnContent={``}
    />
  )
}

export default BudgetBalance