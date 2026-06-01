// import React from 'react';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import { OurProcessSection } from './OurProcessSection';
import { dataTimeLine } from '@/data/timeline';
import { CardServices } from '../ui/CardServices';
import { serviceCardData } from '@/data/servicecard';

export default function ServicesSection() {
  return (
    <Section id='service' className='text-center'>
      <SectionHeader
        title='Our Process'
        description='Clear steps. Smart execution. Results you can count on.'
      />

      <div className='min-h-screen  py-10'>
        <OurProcessSection items={dataTimeLine} />
      </div>

      <SectionHeader
        title='Smart IT Solutions That Grow With You'
        description='Tailored tech to boost efficiency, security, and results.'
        className='pt-28'
      />

      <div className='mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 rounded pb-10'>
        {serviceCardData.map((service) => (
          <CardServices
            key={service.id}
            iconImg={service.icon}
            title={service.title}
            description={service.desc}
          />
        ))}
      </div>
    </Section>
  );
}
