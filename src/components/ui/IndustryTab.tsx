import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { TabButton } from './TabButton';
import type { IndustryCardProps } from '@/types';

const fadeScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 }, // Subtle scale change prevents layout jarring
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

export const IndustryCard: React.FC<IndustryCardProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <div className='max-w-6xl mx-auto space-y-12'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
        <div className='lg:col-span-4 flex flex-col space-y-4'>
          {tabs.map((tab) => {
            // const isActive = tab.id === activeTabId;
            return (
              <TabButton
                key={tab.id}
                label={tab.label}
                isActive={tab.id === activeTabId}
                onClick={() => onTabChange(tab.id)}
              />
            );
          })}
        </div>

        <div className='lg:col-span-8 space-y-6'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTabId}
              variants={fadeScaleVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='space-y-6 w-full'
            >
              {/* Description Content Block */}
              <p className='text-main-color text-sm md:text-lg leading-relaxed max-w-2xl min-h-12'>
                {activeTab?.description}
              </p>

              <figure className='relative rounded-2xl overflow-hidden aspect-video w-full bg-neutral-100'>
                <img
                  src={activeTab?.imageSrc}
                  alt={activeTab?.imageAlt || activeTab?.label}
                  className='w-full h-full object-cover object-center block'
                />

                <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
              </figure>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
