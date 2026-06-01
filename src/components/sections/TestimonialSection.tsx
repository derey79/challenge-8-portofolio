import { useState, useRef, useEffect } from 'react';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { TestimonialCard } from '../ui/CardTestimonial';
import { testimonialData } from '@/data/testimonialData';

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = container.children;

      if (children.length > 1) {
        setTimeout(() => {
          const targetCard = children[1] as HTMLElement;
          const containerCenter = container.clientWidth / 2;
          const cardCenter = targetCard.offsetLeft + targetCard.clientWidth / 2;

          container.scrollLeft = cardCenter - containerCenter;
        }, 100);
      }
    }
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const targetCard = container.children[index] as HTMLElement;

      if (targetCard) {
        const containerCenter = container.clientWidth / 2;
        const cardCenter = targetCard.offsetLeft + targetCard.clientWidth / 2;

        container.scrollTo({
          left: cardCenter - containerCenter,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const card = child as HTMLElement;
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  return (
    <Section id='testimonials' className='text-center'>
      <SectionHeader
        title='What Partners Say About Working With Us'
        description='Trusted voices. Real experiences. Proven results.'
      />
      <div className='relative w-full max-w-6xl mx-auto py-12 px-4 flex flex-col items-center'>
        <div className='relative w-full overflow-hidden'>
          <div className='absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white via-white/70 to-transparent dark:from-neutral-950 dark:via-neutral-950/70 dark:to-transparent z-30 pointer-events-none hidden md:block' />

          <div className='absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white via-white/70 to-transparent dark:from-neutral-950 dark:via-neutral-950/70 dark:to-transparent z-30 pointer-events-none hidden md:block' />

          {/*  Scroll Card */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className='flex overflow-x-auto gap-2 px-6 md:px-32 scrollbar-none scroll-smooth snap-x snap-mandatory'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialData.map((item, index) => (
              <div key={item.id} className='snap-center shrink-0'>
                <TestimonialCard
                  id={index}
                  message={item.message}
                  name={item.name}
                  position={item.position}
                  avatar={item.avatar}
                />
              </div>
            ))}
          </div>
        </div>

        {/* button navigasi */}
        <div className='flex gap-3 mt-8 z-40 items-center justify-center'>
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-orange-500'
                  : 'bg-orange-500/30 dark:bg-orange-500/20 hover:bg-orange-500/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialSection;
