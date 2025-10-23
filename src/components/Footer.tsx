import React from 'react';
import Logo from './img/bluelogo (2).svg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const footerLinks = {
    product: [
      { name: 'Home', href: '#top' },
      { name: 'Features', href: '#features' },
      { name: 'All Topics', href: '#all-topics' },
      { name: 'Success Story', href: '#testimonials' },
      { name: 'Pricing', href: '#pricing' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Help Center', href: '#help' },
      { name: 'Student Guide', href: '#guide' },
      { name: 'FAQ', href: '#faq' },
      
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Refund Policy', href: '#refund' }
    ]
  };



  return (
    <footer id="footer" className="bg-gray-50 text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center mb-4">
              <img src={Logo} alt="IELTS AI Mentor" className="w-30 h-19 mb-3" />
              <h3 className="text-xl font-semibold">IELTS AI Mentor</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md text-center">
              Master your IELTS exam with AI-powered personalized learning. 
              Join thousands of successful students who achieved their target scores with our proven system.
            </p>
          </div>

          {/* Product Links */}
          <div className="mt-20">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="mt-20">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="mt-20">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} IELTS AI Mentor. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>🌍 Available worldwide</span>
              <span>🔒 SSL Secured</span>
              <span>⭐ 4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;