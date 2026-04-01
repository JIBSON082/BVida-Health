import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Heart, Users, Brain, Briefcase, Leaf, Sparkles, Coins } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { id: 1, title: 'Physical', icon: Activity, desc: 'Nurturing your body for optimal health and vitality.' },
  { id: 2, title: 'Emotional', icon: Heart, desc: 'Understanding and respecting your feelings and values.' },
  { id: 3, title: 'Social', icon: Users, desc: 'Building supportive relationships and a sense of connection.' },
  { id: 4, title: 'Intellectual', icon: Brain, desc: 'Engaging in creative and mentally-stimulating activities.' },
  { id: 5, title: 'Vocational', icon: Briefcase, desc: 'Finding personal satisfaction and enrichment in your work.' },
  { id: 6, title: 'Environmental', icon: Leaf, desc: 'Living in harmony with your surroundings and nature.' },
  { id: 7, title: 'Spiritual', icon: Sparkles, desc: 'Finding purpose, value, and meaning in your life.' },
  { id: 8, title: 'Financial', icon: Coins, desc: 'Managing your resources to live within your means.' },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = cardsRef.current?.children;
    
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        rotationX: -15,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }
  }, { scope: sectionRef });

  return (
    <section id="philosophy" ref={sectionRef} className="py-24 bg-bvida-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-bvida-teal uppercase mb-3">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-bvida-blue mb-6">The 8 Dimensions of Holistic Health</h3>
          <p className="text-lg text-bvida-gray max-w-2xl mx-auto">
            True wellness extends beyond the physical. We believe in nurturing every aspect of your life to achieve perfect balance and harmony.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-bvida-offwhite rounded-full flex items-center justify-center mb-6 group-hover:bg-bvida-teal/10 transition-colors">
                  <Icon className="text-bvida-teal w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold text-bvida-blue mb-3">{pillar.title} Wellness</h4>
                <p className="text-bvida-gray text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
