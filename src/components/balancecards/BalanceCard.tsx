import { } from 'react';

type BalanceCardProps = {
    bgColor: string;
    textColor: string;
    subText: string;
    Balance: string;
    balanceTitle: string;
    SbtnStyles: string;
    SbtnContent: string;
};

function BalanceCard({ bgColor, textColor, subText, Balance, balanceTitle, SbtnStyles, SbtnContent }: BalanceCardProps) {
  return (
    <div
      className={`Card w-full min-w-[7rem] md:max-w-[20rem] p-4 flex flex-col justify-between itmes-center shadow-custom rounded-lg h-[6.8rem] ${bgColor}`}
    > 
      <div className='flex items-center justfy-between w-full min-w-[19.5rem] md:min-w-[16.5rem] pr-2 md:pr-0'>
        <span className={`${subText} text-md w-full`}>{balanceTitle}</span>
      </div>
      <div className='Content-container flex items-center justfy-between w-full min-w-[13rem] md:min-w-[16.5rem] pr-2 md:pr-0'>
        <h1 className={`text-[1.6rem] ${textColor} w-full`}>${Balance}</h1>
        <button className={`${SbtnStyles}`}>{SbtnContent}</button>
      </div>   
    </div>
  );
}

export default BalanceCard;