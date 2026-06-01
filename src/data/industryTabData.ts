import { type IndustryTab } from '../types';
import imgFinctech from '@/assets/industry-image-container1.png';
import imgEcommerce from '@/assets/industry-image-container2.png';
import imgHealthcare from '@/assets/industry-image-container3.png';

export const industryTabData: IndustryTab[] = [
  {
    id: 'fintech',
    label: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    imageSrc: imgFinctech,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    imageSrc: imgEcommerce,
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    imageSrc: imgHealthcare,
  },
];
