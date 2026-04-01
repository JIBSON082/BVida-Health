import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "BVida changed my approach to wellness. It's not just about working out anymore; it's about finding balance in every aspect of my life.",
    name: "Sarah Jenkins",
    role: "Community Member",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    quote: "I finally found a supportive community that understands the importance of mental and emotional health alongside physical fitness.",
    name: "David Chen",
    role: "Wellness Advocate",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    quote: "The 8 dimensions philosophy gave me a framework to actually improve my life, not just set unrealistic goals. Highly recommended.",
    name: "Elena Rodriguez",
    role: "Holistic Coach",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  useEffect(() => {
    // Animate slide change
    if (slideRef.current) {
      gsap.fromTo(slideRef.current, 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section ref={containerRef} className="py-32 bg-bvida-blue text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bvida-teal rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bvida-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Quote className="w-16 h-16 text-bvida-pink mx-auto mb-10 opacity-50" />
        
        <div ref={slideRef} className="min-h-[250px] flex flex-col justify-center">
          <p className="text-2xl md:text-4xl font-light leading-relaxed mb-12">
            "{testimonials[currentIndex].quote}"
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={testimonials[currentIndex].avatar} 
              alt={testimonials[currentIndex].name} 
              className="w-16 h-16 rounded-full object-cover border-2 border-bvida-teal"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
              <p className="text-bvida-teal text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-8 mt-16">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-bvida-pink w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
