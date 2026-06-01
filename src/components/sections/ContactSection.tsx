import React from 'react';
import { useState } from 'react';
import { Section } from '../layout/Section';
import { SectionHeader } from '../layout/SectionHeader';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import CheckboxGroup from '../ui/CheckboxGroup';
import Button from '../ui/Button';
import ModalPopup from '../ui/ModalPopup';
import iconSentSuccess from '@/assets/sent-success.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Web Development',
  ]);

  // State untuk mengontrol visibilitas modal popup
  const [isOpen, setIsOpen] = useState(false); /*true*/

  // Array servis
  const serviceOptions = [
    'Web Development',
    'Cloud Solutions',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'Other',
  ];

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const finalData = { ...formData, services: selectedServices };
    console.log('Data dikirim:', finalData);

    setIsOpen(true);

    setFormData({ name: '', email: '', message: '' });
    setSelectedServices(['Web Development']);
  };

  return (
    <Section id='' className='text-center'>
      <SectionHeader
        title='Ready to Start? Let’s Talk.'
        description='Tell us what you need, and we’ll get back to you soon.'
      />

      <div className='flex flex-col items-center justify-center px-4 py-16 text-white font-sans'>
        <div className='w-full max-w-2xl'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Input Nama */}
            <div className='flex flex-col gap-2'>
              <Input
                label='Name'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
              />
            </div>

            {/* Input Email */}
            <div className='flex flex-col gap-2'>
              <Input
                label='Email'
                type='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
              />
            </div>

            {/* Input Message */}
            <Textarea
              label='Message'
              name='message'
              required
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter your message'
            />

            {/* Service */}
            <div className='space-y-3 pt-2'>
              <CheckboxGroup
                label='Services'
                options={serviceOptions}
                selectedValues={selectedServices}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className='pt-4'>
              <Button
                type='submit'
                variant='primary'
                size='sm'
                className='w-full whitespace-nowrap'
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        {/* Modal Popup Komponen */}
        <ModalPopup
          isOpen={isOpen}
          title='Message Received!'
          description='Thanks for reaching out — we’ll get back to you as soon as possible.'
          onClose={() => setIsOpen(false)}
          iconSrc={iconSentSuccess}
          buttonText='Back to Home'
        />
      </div>
    </Section>
  );
}
