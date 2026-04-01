import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered text animation
    const elements = textRef.current?.children;
    if (elements) {
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2,
      });
    }
  }, { scope: heroRef });

  const scrollToCommunity = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: '#community', offsetY: 80 }, ease: "power3.inOut" });
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-bvida-offwhite">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-bvida-offwhite">
        <img
          src="https://image2url.com/r2/default/images/1775031718816-513c0929-f940-42fd-95ca-aae560920071.jpg"
          alt="Pharmacist consulting with a patient"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110 opacity-100"
          referrerPolicy="no-referrer"
        />
        {/* Gradient overlay to blend seamlessly with the website structure and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bvida-offwhite via-bvida-offwhite/40 to-transparent"></div>
      </div>
      
      {/* Subtle Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full z-0 opacity-30">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#40E0D0" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={textRef}>
        <h1 className="text-5xl md:text-7xl font-bold text-bvida-blue mb-6 leading-tight tracking-tight">
          Empowering You to Live the <span className="text-bvida-pink">Good Life.</span>
        </h1>
        <p className="text-xl md:text-2xl text-bvida-gray mb-10 max-w-2xl mx-auto font-light">
          Discover a holistic approach to wellness. Elevate your physical, emotional, and social well-being with our premium digital health platform.
        </p>
        <div>
          <button
            onClick={scrollToCommunity}
            className="bg-bvida-pink text-white text-lg px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
            aria-label="Join the Community"
          >
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
}
