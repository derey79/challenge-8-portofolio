import React from 'react';
// import icon1 from '../../assets/mobile-app.png';

interface SolutionCardProps {
  title: string;
  description: string;
  iconUrl: string; // Mengubah tipe data menjadi string untuk menampung path/URL gambar PNG
  iconAlt?: string;
}

export const Card: React.FC<SolutionCardProps> = ({
  title,
  description,
  iconUrl,
  iconAlt,
}) => {
  return (
    <div className='relative mt-8 flex h-38 w-full flex-col justify-end rounded-2xl border border-natural-900 bg-base-black p-6 pt-12 shadow-md'>
      {/* Container Icon PNG */}
      <div className='absolute top-0 left-6 -mt-4 flex size-14 items-center justify-center rounded-xl shadow-lg shadow-orange-950/20 border-2'>
        <img
          src={iconUrl}
          alt={iconAlt || title}
          className='size-full object-contain'
        />
      </div>

      {/* Kontainer Teks */}
      <div className='flex flex-col gap-2 overflow-hidden'>
        <h3 className='truncate text-xl font-semibold text-white tracking-wide'>
          {title}
        </h3>
        <p className='line-clamp-2 text-sm text-zinc-400 leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  );
};
