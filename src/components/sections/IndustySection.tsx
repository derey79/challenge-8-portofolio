// import { SectionLayout } from '../layout/SectionLayout';
import { useState } from 'react';
import { Section } from '../layout/Section';
import { IndustryCard } from '../ui/IndustryTab';
import { SectionHeader } from '../layout/SectionHeader';
import { industryTabData } from '@/data/industryTabData';

export default function IndustySection() {
  const [activeTab, setActiveTab] = useState('fintech');
  return (
    <Section id='industry' className='min-h-screen text-left px-2 pt-8'>
      <SectionHeader
        title='Built for Your Industry'
        description='We’ve helped companies across industries launch smarter, faster, and
          more securely.'
        className='max-w-5xl mx-auto'
      />

      <div className='max-w-5xl mx-auto flex flex-col gap-3 md:gap-4 pt-8'>
        <IndustryCard
          tabs={industryTabData}
          activeTabId={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </Section>
  );
}
