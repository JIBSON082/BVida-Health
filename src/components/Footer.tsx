import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img src="/image_0.png" alt="BVida Health Logo" className="h-12 w-auto mb-6 rounded-full" onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/003366/FFFFFF?text=B';
            }} />
            <p className="text-bvida-gray text-sm leading-relaxed mb-6">
              Empowering you to live the good life through a holistic approach to physical, emotional, and social wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bvida-pink transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-bvida-teal transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-bvida-blue transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-bvida-blue mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-bvida-gray hover:text-bvida-teal transition-colors text-sm">Home</a></li>
              <li><a href="#philosophy" className="text-bvida-gray hover:text-bvida-teal transition-colors text-sm">Philosophy</a></li>
              <li><a href="#wellness-hub" className="text-bvida-gray hover:text-bvida-teal transition-colors text-sm">Wellness Hub</a></li>
              <li><a href="#community" className="text-bvida-gray hover:text-bvida-teal transition-colors text-sm">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-bvida-blue mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-bvida-gray hover:text-bvida-teal transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-bvida-gray hover:text-bvida-teal transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-bvida-gray hover:text-bvida-teal transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-bvida-blue mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-bvida-gray text-sm">
                <Mail size={16} className="mr-2 text-bvida-teal" />
                hello@bvidahealth.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BVida Health. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed for the Good Life.
          </p>
        </div>
      </div>
    </footer>
  );
}
