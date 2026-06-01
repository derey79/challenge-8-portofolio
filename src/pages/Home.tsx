import { Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Komponen yang langsung terlihat di layar (Above the fold)
import HeroSection from '../components/sections/HeroSection';

// Lazy load untuk komponen di bawah layar (Below the fold)
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const ServicesSection = lazy(
  () => import('../components/sections/ServicesSection')
);
const IndustrySection = lazy(
  () => import('../components/sections/IndustySection')
);
const ProjectSection = lazy(
  () => import('../components/sections/ProjectSection')
);
const TestimonialSection = lazy(
  () => import('../components/sections/TestimonialSection')
);

const FAQSection = lazy(() => import('../components/sections/FAQSection'));

const ContactSection = lazy(
  () => import('../components/sections/ContactSection')
);

// Komponen Loading sederhana (bisa diganti dengan skeleton UI)
const SectionLoader = () => (
  <div className='w-full h-32 flex items-center justify-center bg-base-white dark:bg-base-black text-lg font-light text-main-color'>
    Loading section...
  </div>
);
const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='grow'>
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <ServicesSection />
          <IndustrySection />
          <ProjectSection />
          <TestimonialSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
