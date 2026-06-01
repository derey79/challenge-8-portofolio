// import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { projectData } from '@/data/projectData';

// Explicitly type the fading variants mapping block
const staggerFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      // Dynamic index-based math calculation drives the cascade delay order
      delay: index * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function ProjectSection() {
  return (
    <Section id='projects' className='text-center'>
      <SectionHeader
        title='From Vision to Launch! Projects We’re Proud Of'
        description='Take a closer look at our recent work powering startups, enterprises, and everything in between.'
      />
      <div className='max-w-5xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
          {projectData.map((porto, index) => (
            <div
              key={porto.id}
              className='w-full max-w-93 flex flex-col group overflow-hidden '
            >
              {/* Fixed Square Image */}
              <div className='w-full aspect-square overflow-hidden rounded-2xl'>
                <motion.img
                  custom={index}
                  variants={staggerFadeVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.1 }}
                  src={porto.image}
                  alt={porto.name}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              {/* Text Details */}
              <p className='pt-3 text-left text-sm font-semibold text-primary-200 leading-relaxed mb-1'>
                {porto.desc}
              </p>

              {/* 2. porto.name */}
              <span className='text-left text-lg font-b text-main-color block'>
                {porto.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
