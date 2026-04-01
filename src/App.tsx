import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import WellnessHub from './components/WellnessHub';
import Testimonials from './components/Testimonials';
import CommunityCTA from './components/CommunityCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-bvida-gray overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <WellnessHub />
        <Testimonials />
        <CommunityCTA />
      </main>
      <Footer />
    </div>
  );
}
