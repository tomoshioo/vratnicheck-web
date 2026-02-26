import Hero from '@/components/sections/Hero';
import ProductsOverview from '@/components/sections/ProductsOverview';
import Benefits from '@/components/sections/Benefits';
import Statistics from '@/components/sections/Statistics';
import HowItWorks from '@/components/sections/HowItWorks';
import Partners from '@/components/sections/Partners';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsOverview />
      <Benefits />
      <Statistics />
      <HowItWorks />
      <Partners />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;
