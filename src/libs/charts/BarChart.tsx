import React from "react";

interface BarChartProps {
  data: {
    label: string;
    cost: number;
    income: number;
  }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const containerHeight = 300; // Container height in pixels
  const maxYAxisValue = Math.max(...data.map(d => Math.max(d.cost, d.income))); // Dynamic Y-axis max
  const steps = 7; // Number of steps on the Y-axis
  const stepValue = maxYAxisValue / steps; // Value per step

  return (
    <div className="flex w-full lg:max-w-[500px] mx-auto bg-transparent py-4 pr-2">
      {/* Y-axis */}
      <div className="flex flex-col justify-between items-end w-12 pr-2 pb-6">
        {Array.from({ length: steps + 1 }).map((_, index) => {
          const value = maxYAxisValue - stepValue * index;
          return (
            <div key={index} className="text-xs text-gray-700">
              {value >= 1000 ? `${Math.round(value / 1000)}k` : value}
            </div>
          );
        })}
      </div>

      {/* Chart Container */}
      <div className="flex items-end justify-around flex-1 border-l h-[250px] pl-1">
        {data.map((item, index) => {
          const incomeHeight = (item.income / maxYAxisValue) * containerHeight;
          const costHeight = (item.cost / maxYAxisValue) * containerHeight;

          return (
            <div
              key={index}
              className="flex flex-col items-center h-[250px] flex-1 space-y-2 justify-end"
            >
              <div className="w-5 md:w-6 flex flex-col h-full justify-end pt-8 gap-[2px]">
                {/* Income Section */}
                <div
                  className="bg-[#26273a] relative group rounded-md"
                  style={{ height: `${incomeHeight}px` }}
                >
                  <div className="hidden group-hover:flex absolute top-[-20px] z-60 left-1/2 transform -translate-x-1/2 bg-[#161a42] text-red-200 px-2 py-1 text-xs rounded-md">
                    ${item.income}
                  </div>
                </div>
                {/* Cost Section */}
                <div
                  className="bg-red-500 relative group rounded-md"
                  style={{ height: `${costHeight}px` }}
                >
                  <div className="hidden group-hover:flex absolute top-[-20px] z-60 left-1/2 transform -translate-x-1/2 bg-red-300 text-gray-800 px-2 py-1 text-xs rounded-md">
                    ${item.cost}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-700 rotate-[-45deg] border-t">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
