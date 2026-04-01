import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' })
        .fromTo(contentRef.current, 
          { y: 50, scale: 0.95, autoAlpha: 0 },
          { y: 0, scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(1.2)' },
          "-=0.1"
        );
    } else {
      document.body.style.overflow = 'unset';
      
      const tl = gsap.timeline();
      tl.to(contentRef.current, { y: 20, scale: 0.95, autoAlpha: 0, duration: 0.2, ease: 'power2.in' })
        .to(overlayRef.current, { autoAlpha: 0, duration: 0.3, ease: 'power2.in' });
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bvida-blue/80 backdrop-blur-sm invisible opacity-0"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div 
        ref={contentRef}
        className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl relative invisible opacity-0 m-4"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-bvida-gray transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-bvida-blue mb-2">Welcome</h3>
          <p className="text-bvida-gray">Take the first step towards holistic wellness.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-bvida-gray mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bvida-teal focus:border-transparent transition-all"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-bvida-gray mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bvida-teal focus:border-transparent transition-all"
              placeholder="jane@example.com"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-bvida-pink text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-colors shadow-md mt-6"
          >
            Join the Community
          </button>
        </form>
        <p className="text-xs text-center text-gray-400 mt-6">
          By joining, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
