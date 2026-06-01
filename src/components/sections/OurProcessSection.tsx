import React from 'react';
import { motion } from 'framer-motion';
import { type TimelineProps } from '@/types';
import TimelineCard from '../ui/TimelineCard';

export const OurProcessSection: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className='w-full max-w-5xl mx-auto p-4 flex flex-col gap-4'>
      {items.map((item, index) => {
        const isEven = index % 2 === 1;
        const isLast = index === items.length - 1;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center w-full relative '
          >
            {/* ====== DESKTOP ====== */}
            <div
              className={`
              hidden md:flex flex-col rounded-2xl card-base w-card-half h-card-row px-4 md:order-1 shrink-0
              ${isEven ? 'invisible pointer-events-none' : ''}
            `}
            >
              <TimelineCard title={item.text} description={item.description} />
            </div>

            {/* ====== ICON Number ====== */}
            <div className='flex justify-center items-center md:order-2 z-10 relative h-full w-16 md:w-32'>
              {!isLast && (
                <div className='absolute top-1/2 h-full w-0 border border-neutral-100 dark:border-neutral-900 left-1/2 -translate-x-1/2 z-0' />
              )}

              {/* Lingkaran Ikon */}
              <div className='w-12 h-12 rounded-full bg-primary-200 text-white flex items-center justify-center font-bold text-lg shadow-md relative z-10 shrink-0'>
                {item.id}
              </div>
            </div>

            {/* ====== MOBILE ====== */}
            <div
              className={`
                flex flex-col justify-center px-4 rounded-2xl card-base
                h-card-row w-full md:w-card-half md:order-3 shrink-0
                ${isEven ? '' : 'md:invisible md:pointer-events-none'}
              `}
            >
              <TimelineCard title={item.text} description={item.description} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
