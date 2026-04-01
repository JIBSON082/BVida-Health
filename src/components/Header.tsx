import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    gsap.to(window, { duration: 1, scrollTo: { y: id, offsetY: 80 }, ease: "power3.inOut" });
  };

  const navLinks = [
    { name: 'Home', id: '#home' },
    { name: 'Philosophy', id: '#philosophy' },
    { name: 'Wellness Hub', id: '#wellness-hub' },
    { name: 'Community', id: '#community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#home')}>
          {/* Using the attached logo */}
          <img src="/image_0.png" alt="BVida Health Logo" className="h-10 w-auto rounded-full bg-white" onError={(e) => {
            // Fallback if image is missing in dev environment
            (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/003366/FFFFFF?text=B';
          }} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-bvida-gray hover:text-bvida-blue font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#community')}
            className="bg-bvida-pink text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Join the Community
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-bvida-gray"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-bvida-gray hover:text-bvida-blue font-medium py-2 border-b border-gray-100"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#community')}
            className="bg-bvida-pink text-white px-6 py-3 rounded-full font-medium text-center shadow-md"
          >
            Join the Community
          </button>
        </div>
      )}
    </header>
  );
}
