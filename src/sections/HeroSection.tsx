import React from 'react';
import ElectricBorder from '../components/ElectricBorder';
import Iridescence from '../components/Iridescence';
import ASCIIText from '../components/ASCIIText';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Iridescence Background */}
      <div className="absolute inset-0">
        <Iridescence
          color={[0.5, 0.9, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      {/* Background decorative elements */}
      
      {/* Wide transparent block with glass morphism style */}
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="w-[900px] mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center justify-center py-20 px-10">
          <h1
            className="text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-700 bg-clip-text text-transparent drop-shadow-lg mb-6"
            style={{ letterSpacing: '2px', filter: 'brightness(0.85)' }}
          >
            Welcome to IELTS AI Mentor
          </h1>
          <p
            className="text-2xl text-center text-white/80 mb-10 animate-pulse"
            style={{ textShadow: '0 0 16px #7df9ff, 0 0 2px #fff' }}
          >
            Your AI-powered partner for mastering the IELTS exam
          </p>
          <button
            className="signup-button font-semibold px-16 py-4 rounded-lg relative z-10 text-lg"
            style={{
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              color: 'white',
              fontWeight: 600,
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              border: 'none',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(to right, #1d4ed8, #6d28d9)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6), 0 0 20px rgba(139, 92, 246, 0.4)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(to right, #3b82f6, #8b5cf6)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
            }}
          >

            
            <span className="relative z-10">
              Get Started
            </span>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;