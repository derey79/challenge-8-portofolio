// import { type SolutionCard } from '../types';
import type { ServiceCardItem } from '../types';
import webIcon from '@/assets/web-development.png';
import phoneIcon from '@/assets/mobile-app.png';
import uxIcon from '@/assets/UX-design.png';
import cloudIcon from '@/assets/cloud-solution.png';
import swIcon from '@/assets/software-development.png';
import itIcon from '@/assets/it-Infrastructure.png';
import cyberIcon from '@/assets/icon-cyber.png';
import qnaIcon from '@/assets/qna-Icon.png';
import itconsIcon from '@/assets/it-consulting.png';

export const serviceCardData: ServiceCardItem[] = [
  {
    id: 1,
    title: 'Web Development',
    desc: 'Build fast, scalable, and SEO-friendly websites.',
    icon: webIcon,
  },
  {
    id: 2,
    title: 'Mobile App Development',
    desc: 'Native & cross-platform apps tailored to user needs.',
    icon: phoneIcon,
  },
  {
    id: 3,
    title: 'UI/UX Product Design',
    desc: 'Delight users with intuitive and beautiful interfaces',
    icon: uxIcon,
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    desc: 'Secure and flexible cloud infrastructure for your growth.',
    icon: cloudIcon,
  },
  {
    id: 5,
    title: 'Software Development',
    desc: 'Custom solutions built around your business logic.',
    icon: swIcon,
  },
  {
    id: 6,
    title: 'IT Infrastructure',
    desc: 'Scale your backend with reliable tech foundations.',
    icon: itIcon,
  },
  {
    id: 7,
    title: 'Cybersecurity Services',
    desc: 'Stay protected with enterprise-grade security.',
    icon: cyberIcon,
  },
  {
    id: 8,
    title: 'QA Solutions',
    desc: 'Custom solutions built around your business logic.',
    icon: qnaIcon,
  },
  {
    id: 9,
    title: 'IT Consulting & Support',
    desc: 'Make smarter tech decisions with expert guidance.',
    icon: itconsIcon,
  },
];
