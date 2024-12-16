// Chart.tsx
import BarChart from './BarChart';
import { ChartData } from './type';

interface ChartProps {
  data: ChartData[]; 
}

export default function Chart({ data }: ChartProps) {
  return (
    <div className="text-center flex flex-col justify-end">
      <div className='w-full flex items-center justify-between px-4 pt-2'>
        <h1 className="text-[0.9rem] font-bold my-2 ">Transaction Distribution</h1>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <span className='bg-red-500 w-6 h-3 rounded-full'></span>
            <p className="text-[0.8rem] text-gray-500">Debit</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='bg-[#161a42] w-6 h-3 rounded-full'></span>
            <p className="text-[0.8rem] text-gray-500">Credit</p>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <BarChart data={data} />
      </div>
    </div>
  );
}
