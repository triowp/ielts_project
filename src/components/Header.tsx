import React from 'react';
import Button from '../components/Button';
import Logo from './img/bluelogo (2).svg'

const Header: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Roboto:ital,wdth,wght@0,75,100..900;1,75,100..900&display=swap');
          
          .bbh-sans-bogle-regular {
            font-family: "BBH Sans Bogle", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
          
          .login-button {
            background: transparent !important;
            border: 2px solid #2669b5 !important;
            color: #2669b5 !important;
            font-weight: 500 !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            position: relative !important;
            overflow: hidden !important;
          }
          
          .login-button::before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: -100% !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(90deg, transparent, rgba(38, 105, 181, 0.1), transparent) !important;
            transition: left 0.5s !important;
          }
          
          .login-button:hover::before {
            left: 100% !important;
          }
          
          .login-button:hover {
            background: #2669b5 !important;
            color: white !important;
            border-color: #2669b5 !important;
            transform: translateY(-1px) !important;
            box-shadow: 0 10px 20px rgba(38, 105, 181, 0.2) !important;
          }
          
          .signup-button {
            background: linear-gradient(to right, #3b82f6, #8b5cf6) !important;
            border: none !important;
            color: white !important;
            font-weight: 600 !important;
            text-shadow: 0 1px 2px rgba(0,0,0,0.2) !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            overflow: hidden !important;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3) !important;
          }
          
          .signup-button:hover {
            background: linear-gradient(to right, #1d4ed8, #6d28d9) !important;
            transform: translateY(-2px) scale(1.05) !important;
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6), 0 0 20px rgba(139, 92, 246, 0.4) !important;
          }
          
          .nav-link {
            font-size: 1.4rem;
            font-weight: 500;
            color: #32475fff;
            text-decoration: none;
            position: relative;
            transition: all 0.3s ease;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #2669b5;
            transition: width 0.3s ease;
          }
          
          .nav-link:hover {
            color: #3b82f6;
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
            transform: translateY(-1px);
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bbh-sans-bogle-regular">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-white/20">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={Logo} 
                alt="IELTS AI Mentor" 
                className="h-10 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer" 
                onClick={handleLogoClick}
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#all-topics" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#all-topics')}>
                Courses
              </a>
              <a href="#testimonials" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>
                Testimonials
              </a>
              
              <a href="#pricing" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#pricing')}>
                Pricing
              </a>
              <a href="#footer" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#footer')}>
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              
              <Button
                variant="primary"
                size="sm"
                href="http://localhost:3001/register"
                  className="signup-button font-medium px-20 py-3.5 rounded-lg relative z-10 text-lg"
              >
                <span className="relative z-10">
                  <span>Sign Up</span>
                </span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;