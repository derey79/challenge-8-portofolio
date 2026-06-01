import { type ReactNode } from 'react';
/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// 💡 LAYOUT
// ==========================================
export interface LayoutProps {
  children: React.ReactNode;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Interface untuk Header setiap Section
export interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

// ==========================================
// 💡 THEME
// ==========================================

// ==========================================
// Navigation Types
// ==========================================

/**
 * Navigation menu item
 */
// export interface NavItem {
//   label: string;
//   href: string;
//   external?: boolean;
// }
export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

// ==========================================
// 🎨 UI & TAILWIND CSS COMPONENT INTERFACES
// ==========================================
// *** CONTEXT ***
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
// Type definition
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  // onClick?: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number';
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  required?: boolean;
}

export interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export interface CheckboxGroupProps {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

// ==========================================
// 📦 Section Data Types
// ==========================================

// * Section About
export interface BrandLogo {
  src: string;
  alt: string;
}

export interface CardSolutionProps {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}

// Section Timeline
export interface TimelineItem {
  id: number;
  text: string;
  description: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export interface TimelineCardProps {
  title: string;
  description: string;
}

export interface SolutionCard {
  title?: string;
  description?: string;
  iconImg?: string;
  iconAlt?: string;
}

// export interface SolutionCardProps {
//   items: SolutionCard[];
// }

export interface ServiceCardItem {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

// Industry Section //
export interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface SolutionCardProps {
  title: string;
  description: string;
  iconImg: string;
  iconAlt?: string;
}

export interface IndustryTab {
  id: string;
  label: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface IndustryCardProps {
  tabs: IndustryTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
}

// Testimonial /

export interface TestimonialCardProps {
  id: number;
  name: string;
  position: string;
  message: string;
  avatar?: string;
  rating?: number;
}

export interface projectItem {
  id: number;
  name: string;
  desc: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Form contact Modal //
export interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  iconSrc: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

// Footer //
export interface SocialMedia {
  icon: string;
  alt?: string;
  href?: string;
}

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon?: string;
//   image?: string;
// }

/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }

/**
 * Example: Testimonial
 */
// export interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   message: string;
//   avatar?: string;
//   rating?: number;
// }

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Contact form data
 */
// export interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
