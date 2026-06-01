import iconCheck from '@/assets/icon-checked.png';
interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

export default function Checkbox({
  label,
  isChecked,
  onChange,
}: CheckboxProps) {
  return (
    <label className='flex items-center gap-3 cursor-pointer text-sm text-gray-300 select-none'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
        className='hidden'
      />
      {/* Custom UI Box */}
      <div
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all duration-150 ${
          isChecked
            ? 'border-[#FF6C4E] bg-[#FF6C4E]'
            : 'border-gray-700 bg-transparent'
        }`}
      >
        {/* Menggunakan aset gambar kustom menggantikan SVG bawaan */}
        {isChecked && (
          <img
            src={iconCheck}
            alt='Checked'
            className='h-2.5 w-2.5 object-contain'
          />
        )}
      </div>
      <span className='text-md font-medium text-neutral-950 dark:text-neutral-25 '>
        {label}
      </span>
    </label>
  );
}
