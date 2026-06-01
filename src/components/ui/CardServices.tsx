import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { type SolutionCardProps } from '@/types';

export const CardServices: React.FC<SolutionCardProps> = ({
  title,
  description,
  iconImg,
  iconAlt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // animasi border
    <motion.div
      className='relative h-31 md:h-40 w-91 md:w-80 cursor-pointer rounded-2xl p-px flex items-center justify-center m-8'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 20px 40px -15px rgba(59, 130, 246, 0.15)',
      }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute inset-0 rounded-2xl overflow-hidden'
          >
            <motion.div
              className='absolute inset-[-50%] origin-center'
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, transparent 50%, var(--color-primary-200) 75%, var(--color-primary-300) 85%, var(--color-primary-200) 95%, transparent 100%)',
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative h-full w-full rounded-2xl border-2 card-base p-4 pt-10 flex flex-col justify-between  z-10'>
        <div className='absolute top-0 left-2 w-20 h-20 -translate-y-1/2 flex items-center justify-center rounded-xl z-20'>
          <img
            src={iconImg}
            className='size-full object-contain p-2'
            alt={iconAlt}
          />
        </div>

        <div className='flex flex-col items-start mt-4'>
          <h3 className='mb-2 text-xl font-bold tracking-wide text-left text-main-color'>
            {title}
          </h3>
          <p className='text-sm items-start text-content-color leading-relaxed lines-clamp-2 text-left '>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
