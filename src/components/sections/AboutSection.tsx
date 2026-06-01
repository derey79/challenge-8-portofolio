// import { Section } from '../layout/Section';
import { motion, type Transition, type Variants } from 'framer-motion';
import { Section } from '../layout/Section';
import { CardSolution } from '../ui/CardSolution';
import { type BrandLogo } from '@/types';
import { servicesData } from '@/data/service';
import { doubleLogos } from '@/data/logo';

const marqueeAnimation = {
  animate: { x: [0, '-50%'] },
  transition: {
    ease: 'linear',
    duration: 20,
    repeat: Infinity,
  } as Transition, // Changed to "as Transition" for broader compiler compatibility
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      /* Memberikan jeda 0.25 detik sebelum kartu berikutnya mulai memudar (fade-in) */
      staggerChildren: 0.25,
    },
  },
};

export default function AboutSection() {
  return (
    <Section id='about' className='text-center'>
      <div className='max-w-6xl mx-auto px-4 pt-4 pb-6'>
        <h2 className='text-lg md:text-3xl xl:text-2xl font-bold text-main-color'>
          Trusted by Global Innovators & Leading Brands
        </h2>

        <div className='h-32 md:h-50 w-full flex items-center text-main-color overflow-hidden relative mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]'>
          <motion.div
            className='flex whitespace-nowrap gap-16 items-center pr-16'
            animate={marqueeAnimation.animate}
            transition={marqueeAnimation.transition}
            // Controls the pause smoothly via Framer Motion's state system
            whileHover={{ animationPlayState: 'paused' }}
          >
            {doubleLogos.map((logo: BrandLogo) => (
              <img
                key={`${logo.alt}-Math.random()`}
                src={logo.src}
                alt={logo.alt}
                className='h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0 cursor-pointer'
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto max-h-170 md:max-h-150 h-screen px-4 pt-12'>
        <div className='flex flex-col gap-3 md:gap-4'>
          <h2 className='text-fluid-title font-bold text-main-color tracking-wider leading-9'>
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className='pb-12 text-sm md:text-lg text-content-color'>
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='pt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 justify-items-center max-w-4xl mx-auto w-full h-72'
        >
          {/* Looping data array ke komponen Card */}
          {servicesData.map((item) => (
            <CardSolution title={item.title} description={item.desc} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
