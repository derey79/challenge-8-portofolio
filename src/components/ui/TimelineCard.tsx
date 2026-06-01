import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import type { TimelineCardProps } from '@/types';
import iconChevron from '@/assets/chevron-down.png';
import iconChevronBlack from '@/assets/chevron-down-bl.png';

export default function TimelineCard({
  title,
  description,
}: TimelineCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const iconSrc = theme === 'dark' ? iconChevron : iconChevronBlack;
  return (
    <div className='w-full max-w-111'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`
        w-full text-left rounded-2xl card-base border-none text-white
        flex flex-col justify-center transition-all duration-300 ease-in-out cursor-pointer
        ${isOpen ? 'h-29' : 'h-20'}
      `}
      >
        {/* Header Row */}
        <div className='flex items-center justify-between w-full'>
          <span className='text-main-color font-semibold tracking-wide sm:text-lg'>
            {title}
          </span>

          {/* icon */}
          <img
            src={iconSrc}
            alt='Chevron Icon'
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        {/* description */}
        <div
          className={`
          w-full transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'opacity-100 mt-2 max-h-10' : 'opacity-0 max-h-0'}
        `}
        >
          <p className='text-sm text-content-color font-normal line-clamp-1'>
            {description}
          </p>
        </div>
      </button>
    </div>
  );
}
