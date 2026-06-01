import Checkbox from './Checkbox';
import type { CheckboxGroupProps } from '@/types';

export default function CheckboxGroup({
  label,
  options,
  selectedValues,
  onChange,
}: CheckboxGroupProps) {
  return (
    <div className='space-y-3.5 pt-2'>
      <span className='block text-left text-sm font-bold text-main-color'>
        {label}
      </span>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3'>
        {options.map((option) => (
          <Checkbox
            key={option}
            label={option}
            isChecked={selectedValues.includes(option)}
            onChange={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}
