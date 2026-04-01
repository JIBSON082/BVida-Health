import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    category: 'Nutrition',
    title: '3 Quick Recipes for Busy Mornings',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600',
    readTime: '5 min read'
  },
  {
    id: 2,
    category: 'Rest',
    title: 'Sleep Optimization Tips for Deep Recovery',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=600',
    readTime: '8 min read'
  },
  {
    id: 3,
    category: 'Mental',
    title: 'Understanding Mindfulness in the Modern World',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
    readTime: '6 min read'
  },
  {
    id: 4,
    category: 'Fitness',
    title: 'Functional Movements for Everyday Strength',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600',
    readTime: '7 min read'
  }
];

export default function WellnessHub() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Simple reveal animation for the section header
    gsap.from('.hub-header', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    // Horizontal scroll animation for cards on desktop
    const cards = gsap.utils.toArray('.hub-card');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: 'top 85%',
      },
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    });

  }, { scope: sectionRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (!img) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    gsap.to(img, {
      x: x * -20,
      y: y * -20,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (!img) return;
    gsap.to(img, {
      scale: 1.1,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (!img) return;
    gsap.to(img, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <section id="wellness-hub" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between hub-header">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold tracking-widest text-bvida-pink uppercase mb-3">Knowledge Base</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-bvida-blue mb-4">Wellness Hub</h3>
          <p className="text-lg text-bvida-gray">
            Curated insights and practical advice to elevate your daily routine.
          </p>
        </div>
        <div className="mt-6 md:mt-0 hidden md:flex items-center text-bvida-teal font-medium cursor-pointer hover:text-bvida-blue transition-colors">
          <span>View all articles</span>
          <ArrowRight className="ml-2 w-5 h-5" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)]">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-12 pr-6 no-scrollbar snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="hub-card min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start group cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-3"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-shadow duration-500">
                <div className="absolute inset-0 bg-bvida-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-bvida-blue uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-bvida-blue mb-2 group-hover:text-bvida-teal transition-colors">
                {article.title}
              </h4>
              <p className="text-bvida-gray text-sm flex items-center">
                {article.readTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
