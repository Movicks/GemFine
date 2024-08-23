import { } from 'react';

type BalanceCardProps = {
    bgColor: string;
    textColor: string;
    subText: string;
    Balance: string;
    balanceTitle: string;
};

function BalanceCard({ bgColor, textColor, subText, Balance, balanceTitle }: BalanceCardProps) {
  return (
    <div
      className={`Card w-full min-w-[7rem] max-w-[50rem] md:max-w-[20rem] p-4 flex flex-col justify-between itmes-center shadow-custom rounded-lg h-[94.4px] ${bgColor}`}
    >
          <span className={`${subText} text-md`}>{balanceTitle}</span>
          <h1 className={`text-[1.6rem] ${textColor} w-full`}>${Balance}</h1>
    </div>
  );
}

export default BalanceCard;