import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { type CardSolutionProps } from '@/types';

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    // x: -50,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'linear',
      duration: 0.4,
    },
  },
};

export const CardSolution: React.FC<CardSolutionProps> = ({
  title,
  description,
}) => {
  // const { theme } = useTheme();
  return (
    <motion.div
      variants={cardVariants}
      className='flex flex-col items-center justify-center gap-2 size-40 md:size-48 mx-auto rounded-full border card-base shadow-sm text-center transition-transform duration-300 hover:scale-105'
    >
      <div className='w-full flex flex-col items-center justify-center'>
        <h3 className='mb-1 text-4xl font-bold tracking-tight text-primary-200 line-clamp-1'>
          {title}
        </h3>
        <p className='text-xs font-semibold leading-relaxed line-clamp-3 text-main-color'>
          {/* {theme} */}
          {description}
        </p>
      </div>
    </motion.div>
  );
};
