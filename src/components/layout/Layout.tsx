import React from 'react';
import { type LayoutProps } from '@/types';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='mx-auto min-h-screen max-w-5xl overflow-hidden bg-amber-200 border-2'>
      {children}
    </div>
  );
};
