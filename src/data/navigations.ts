import type { MenuItem } from '../types';

// Menu data using the MenuItem interface
// semua link menu bersifat internal, jadi external = false
export const menuItems: MenuItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];
