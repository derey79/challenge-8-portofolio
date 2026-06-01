import type { TestimonialCardProps } from '../types';
import avatarLee from '@/assets/john-lee.png';
import avatarSarah from '@/assets/sarah-tan.png';
import avatarChan from '@/assets/emily-can.png';

export const testimonialData: TestimonialCardProps[] = [
  {
    id: 1,
    message:
      'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    name: 'John Lee',
    position: 'Creative Director at Innovate Corp',
    avatar: avatarLee,
  },
  {
    id: 2, // Ini kartu nomor 2 yang akan otomatis di tengah saat di-refresh
    message:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    name: 'Sarah Tan',
    position: 'Product Manager at Finovate',
    avatar: avatarSarah,
  },
  {
    id: 3,
    message:
      'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    name: 'Emily Chen',
    position: 'Marketing Head at Tech Solutions',
    avatar: avatarChan,
  },
];
