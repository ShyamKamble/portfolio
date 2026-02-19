import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import JoinSection from '../components/JoinSection';
import FeaturesSection from '../components/FeaturesSection';
import AllInOneSection from '../components/AllInOneSection';
import BeautifulSection from '../components/BeautifulSection';
import WebMobileSection from '../components/WebMobileSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <JoinSection />
      <FeaturesSection />
      <AllInOneSection />
      <BeautifulSection />
      <WebMobileSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}