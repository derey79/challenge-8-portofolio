import { useId } from 'react';
import type { TextareaProps } from '@/types';

export default function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 5,
}: TextareaProps) {
  const id = useId();

  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='text-left text-sm font-bold text-main-color'
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='ui-input-base'
      />
    </div>
  );
}
