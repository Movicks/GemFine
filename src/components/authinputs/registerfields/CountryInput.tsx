import React from 'react';
import { useFormContext } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';
import { RiMapPinUserLine } from 'react-icons/ri';

type CountryOption = {
  value: string;
  label: string;
};

const CountryInput = () => {
  const { setValue } = useFormContext();

  const countries: CountryOption[] = [
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "Australia", label: "Australia" },
    { value: "India", label: "India" },
    { value: "Japan", label: "Japan" },
    { value: "China", label: "China" },
    { value: "Brazil", label: "Brazil" },
    { value: "South Africa", label: "South Africa" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Mexico", label: "Mexico" },
    { value: "Russia", label: "Russia" },
    { value: "Italy", label: "Italy" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Spain", label: "Spain" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "South Korea", label: "South Korea" },
  ];

  const handleCountryChange = (selectedOption: SingleValue<CountryOption>) => {
    setValue('country', selectedOption ? selectedOption.value : '');
  };

  return (
    <div className='flex flex-col gap-1 bg-transparent w-full'>
      <label htmlFor="country" className='text-gray-600'>Country</label>
      <div className='h-[2.8rem] border-2 border-red-300 flex items-center gap-3 px-4 rounded-full w-full md:max-w-[18rem] shadow-custom'>
        <RiMapPinUserLine className='text-xl text-red-300' />
        <Select
          id='country'
          options={countries}
          onChange={handleCountryChange}
          classNamePrefix='react-select'
          placeholder="Country"
          isClearable
          className='w-full bg-transparent outline-none text-gray-700'
          styles={{
            control: (base, state) => ({
              ...base,
              backgroundColor: 'transparent',
              borderColor: state.isFocused ? 'none' : 'none', // focus, otherwise
              boxShadow: state.isFocused ? '' : 'none', // Red-300 for focus
              '&:hover': {
                borderColor: 'none', // Red-300 on hover
              },
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: '#fee2e2', // Red-200 for the dropdown menu
              borderRadius: '0.375rem',
              boxShadow: 'none', // Custom shadow
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected ? '#f87171' : state.isFocused ? '#fca5a5' : '#fee2e2', // Red-300 for selected, Red-200 for focused, Red-100 otherwise
              color: state.isSelected ? '#fff' : '#4a4a4a', // White for selected, gray for others
              '&:hover': {
                backgroundColor: '#fca5a5', // Red-200 on hover
              },
            }),
            singleValue: (base) => ({
              ...base,
              color: '#4a4a4a', // Gray-700 for selected value
            }),
            placeholder: (base) => ({
              ...base,
              color: 'gray', // gray for placeholder text
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: '#f87171', // Red-300 for dropdown indicator
            }),
            clearIndicator: (base) => ({
              ...base,
              color: '#f87171', // Red-300 for clear indicator
            }),
          }}
        />
      </div>
    </div>
  );
}

export default CountryInput;
