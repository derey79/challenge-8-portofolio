import { useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Button from './Button';
import type { ModalPopupProps } from '@/types';

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.4,
      bounce: 0.1,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export default function ModalPopup({
  isOpen,
  onClose,
  iconSrc,
  title,
  description,
  buttonText,
}: ModalPopupProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center p-4'
          role='dialog'
          aria-modal='true'
        >
          {/* Backdrop */}
          <motion.button
            type='button'
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute inset-0 bg-black/40 backdrop-blur-xs cursor-default border-none outline-none'
            onClick={onClose}
            aria-label='Close modal backdrop'
          />

          <motion.div
            initial='hidden'
            animate='visible'
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            variants={containerVariants}
            className='relative w-full max-w-sm rounded-2xl border border-gray-800 bg-[#0F0F0F] p-6 text-center shadow-2xl'
          >
            <motion.div
              variants={fadeInUpVariants}
              className='mx-auto mb-4 flex h-36 w-36 items-center justify-center'
            >
              <img
                src={iconSrc}
                alt=''
                className='h-full w-full object-contain'
              />
            </motion.div>

            <motion.h3
              variants={fadeInUpVariants}
              className='mb-2 text-lg font-semibold text-white'
            >
              {title}
            </motion.h3>

            <motion.p
              variants={fadeInUpVariants}
              className='mb-6 text-xs text-gray-400 leading-relaxed'
            >
              {description}
            </motion.p>

            <motion.div variants={fadeInUpVariants}>
              <Button
                variant='primary'
                size='sm'
                onClick={onClose}
                className='w-full'
              >
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
