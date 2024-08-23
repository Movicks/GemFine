import {} from 'react';
import CurrentAmount from '../../components/balancecards/CurrentAmount';
import IncomesBalance from '../../components/balancecards/IncomesBalance';
import BudgetBalance from '../../components/balancecards/BudgetBalance';
import DetailsLinks from '../../components/details/DetailsLinks';
import Savings from '../../components/savings/Savings';

// type HomeProps = {};

const Home = () => {
  return (
    <div className='h-auto lg:h-screen md-px-2 pb-4 flex flex-col'>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-3 h-auto'>
              <section className='w-full flex flex-col gap-3 md:p-3'>
                  <section className='Section-1 w-full flex flex-col md:flex-row md:gap-4'>
                        <div className='cards-wrapper w-full flex flex-col md:flex-row gap-2 md:gap-4'>
                          <CurrentAmount />
                          <IncomesBalance />
                          <BudgetBalance /> 
                        </div>
                  </section>
                  <div className='bg-white flex flex-col gap-1 w-full min-h-[10rem] h-auto shadow-custom rounded-lg p-4'>
                      <DetailsLinks />
                      <div className='flex flex-col gap-2 md:flex-row md:gap-5'>
                          <div className='bg-gray-100 w-full md:max-w-[30rem] h-[6.7rem] rounded-lg p-4'>
                              <Savings/>
                          </div>
                          <div className='bg-gray-100 w-full md:max-w-[30rem] h-[6.7rem] rounded-lg px-4'>2</div>
                      </div>
                  </div>
              </section>
              <div className='bg-blue-500 w-full lg:max-w-[25rem]'>
                  SET
              </div>
          </div>
    </div>
  );
};

export default Home;
