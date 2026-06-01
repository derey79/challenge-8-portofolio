import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { useTheme } from '@/context/ThemeContext';
import darkHeroImage from '@/assets/dark-HeroImage.png';
import lightHeroImage from '@/assets/light-HeroImage.png';
import Button from '../ui/Button';

export default function HeroSection() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 } as const,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } as const,
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Let's talk details!");
  };

  return (
    <Section
      id='hero'
      className='{`mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4`}'
    >
      <div className='min-h-auto w-full relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='mx-2 px-4 md:px-0 flex flex-col w-auto md:w-160 leading-16 md:absolute mt-16 md:top-24 left-60 gap-4 opacity-100 text-left'
        >
          {/* <div className=''> */}
          <motion.h1
            variants={textVariants}
            className='text-4xl md:text-6xl text-main-color font-bold tracking-tight mb-4 z-10'
          >
            Your Tech Partner for
            <motion.span variants={textVariants} className='text-primary-200'>
              {} Smarter Growth
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className='text-lg text-main-color font-semibold z-10'
          >
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </motion.p>
          {/* </div> */}
          <div className='flex justify-center md:justify-start gap-4 mt-4 w-full'>
            <Button
              variant='primary'
              size='sm'
              onClick={handleClick}
              className='w-full sm:w-48 whitespace-nowrap'
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>
        {/* Right Side: Image Container */}

        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='visible'
          className='w-full md:w-1/2 flex justify-center md:justify-end md:ml-auto py-5 md:py-0'
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              // src={darkHeroImage}
              src={theme === 'dark' ? darkHeroImage : lightHeroImage}
              alt='Hero Image Ilustration'
              className='w-full max-w-md md:max-w-lg h-auto object-cover'
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
