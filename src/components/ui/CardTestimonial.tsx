import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TestimonialCardProps } from '@/types';
import quoteIcon from '@/assets/quote-filled.png';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  message,
  rating = 5,
  avatar,
  name = 'User',
  position,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // Ditambahkan mb-14 agar avatar yang menjorok ke bawah tidak menabrak elemen di bawah card
      className='relative w-91 md:w-139 h-auto min-h-73 cursor-pointer rounded-2xl p-px flex items-center justify-center m-8 mb-14'
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
                duration: 4,
                ease: 'linear',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kontainer Utama Dalam Card */}
      {/* Catatan: 'overflow-hidden' dihapus dari kontainer ini agar avatar di bawah bisa menjorok keluar */}
      <div className='relative h-full w-full rounded-2xl p-6 pt-12 pb-14 flex flex-col items-center card-base z-10'>
        {/* Quote Icon (Pojok Kiri Atas) */}
        <div className='absolute top-1 left-6 w-12 h-10 -translate-y-1/2 flex items-center justify-center z-20'>
          <img
            src={quoteIcon}
            className='size-full object-contain'
            alt='Quote Icon'
          />
        </div>

        {/* Rating Bintang (Tengah Atas) */}
        <div className='flex gap-1 text-amber-400 mb-4 justify-center'>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-neutral-300 dark:text-neutral-700'}`}
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
          ))}
        </div>

        {/* Isi Testimonial & Identitas */}
        <div className='flex flex-col items-center text-center w-full grow'>
          {/* {title && (
            <h3 className='mb-2 text-lg font-bold tracking-wide text-main-color'>
              {title}
            </h3>
          )} */}

          <p className='text-base text-main-color leading-relaxed font-medium mb-6 max-w-md'>
            "{message}"
          </p>

          <span className='text-lg font-semibold text-main-color block mb-1'>
            {name}
          </span>

          {position && (
            <span className='text-sm font-medium text-primary-200 block'>
              {position}
            </span>
          )}
        </div>

        {/* Avatar Bulat di Tengah Bawah (Menjorok Keluar Border) */}
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20'>
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className='w-16 h-16 rounded-full object-cover border-4 border-neutral-50 dark:border-neutral-950 shadow-md'
            />
          ) : (
            <div className='w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 font-bold text-lg border-4 border-neutral-50 dark:border-neutral-950 shadow-md'>
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
