import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyFarz from '@/components/WhyFarz';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-50/30 text-emerald-950 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <Features />
      <WhyFarz />
      <CTA />
      <Footer />
    </main>
  );
}
