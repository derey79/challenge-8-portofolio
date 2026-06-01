import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../layout/Section';
import { faqData } from '@/data/faqData';
import Button from '../ui/Button';
import plusIconBlack from '@/assets/add-black.png';
import plusIconWhite from '@/assets/add-white.png';
import minIconBlack from '@/assets/minus-bl.png';
import minIconWhite from '@/assets/minus-white.png';
import imgConsultMeeting from '@/assets/consultation-Image.png';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('You click consultation button!');
  };

  return (
    <Section id='faq' className='w-full py-12 md:py-16'>
      <div className='max-w-5xl mx-auto px-4 pb-10 w-full'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-end border-b border-neutral-100 dark:border-neutral-800 pb-8 mb-12 gap-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-main-color tracking-tight'>
            Need Help? Start
            <br />
            Here.
          </h2>
          <p className='text-lg md:text-base text-content-color max-w-58 md:text-right'>
            Everything you need to know — all in one place.
          </p>
        </div>

        {/* Grid Content Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full'>
          {/* Accordion Column */}
          <div className='lg:col-span-7 flex flex-col w-full divide-y divide-gray-100 dark:divide-neutral-800'>
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className='py-5 first:pt-0 last:pb-0 w-full'>
                  <button
                    type='button'
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                    className='flex justify-between items-center w-full text-left gap-4 group cursor-pointer'
                  >
                    <span
                      className={`text-base md:text-lg font-semibold text-main-color transition-colors duration-200 
                      ${isOpen ? 'text-main-color' : 'group-hover:text-content-color'}`}
                    >
                      {item.question}
                    </span>

                    <span className='select-none w-6 h-6 flex items-center justify-center shrink-0'>
                      {isOpen ? (
                        <>
                          <img
                            src={minIconBlack}
                            alt='Collapse'
                            className='w-full h-full object-contain dark:hidden'
                          />
                          <img
                            src={minIconWhite}
                            alt='Collapse'
                            className='w-full h-full object-contain hidden dark:block'
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={plusIconBlack}
                            alt='Expand'
                            className='w-full h-full object-contain dark:hidden'
                          />
                          <img
                            src={plusIconWhite}
                            alt='Expand'
                            className='w-full h-full object-contain hidden dark:block'
                          />
                        </>
                      )}
                    </span>
                  </button>

                  {/* Animated Dropdown Answer Frame */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className='overflow-hidden'
                      >
                        <p className='pt-3 text-sm md:text-base text-gray-500 dark:text-neutral-400 leading-relaxed max-w-2xl'>
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className='lg:col-span-5 w-full flex justify-center lg:justify-end'>
            <div className='w-full max-w-80 bg-primary-300 rounded-3xl p-8 flex flex-col text-white shadow-sm'>
              <h3 className='text-2xl md:text-3xl font-bold leading-tight mb-2'>
                Let's talk it
                <br />
                through
              </h3>
              <p className='text-sm text-base-white leading-relaxed mb-6'>
                book a free consultation with our team.
              </p>

              <figure className='w-full aspect-4/3 rounded-2xl overflow-hidden mb-6'>
                <img
                  src={imgConsultMeeting}
                  alt='team meeting consulting'
                  className='w-full h-full object-cover'
                />
              </figure>

              <Button
                variant='outline'
                size='sm'
                onClick={handleClick}
                className='whitespace-nowrap'
              >
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
