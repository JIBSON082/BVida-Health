import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from './Modal';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      scale: 0.95,
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section id="community" ref={sectionRef} className="py-32 bg-bvida-offwhite flex items-center justify-center">
      <div 
        ref={contentRef}
        className="max-w-3xl mx-auto px-6 text-center bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-gray-100"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-bvida-blue mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl text-bvida-gray mb-10 font-light">
          Join a community of like-minded individuals dedicated to holistic wellness, growth, and living the good life.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-bvida-pink text-white text-xl px-10 py-5 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 transform w-full md:w-auto"
        >
          Join the Community
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
