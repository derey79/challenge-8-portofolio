import React from 'react';
import type { SectionHeaderProps } from '@/types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={` ${className}`}>
      <h2 className='px-2 py-4 text-section-title text-fluid-title text-main-color font-bold'>
        {title}
      </h2>
      <p className='px-2 pb-4 text-sm md:text-lg text-content-color'>
        {description}
      </p>
    </div>
  );
};
