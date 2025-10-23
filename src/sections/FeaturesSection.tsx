import React, { useEffect, useRef, useState } from 'react';
import Logo from '../components/img/bluelogo (2).svg';

const FeaturesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🤖",
      title: "AI Writing Checker",
      description: "Get instant feedback on your essays with detailed analysis across all IELTS criteria",
      benefits: ["Real-time analysis", "Detailed recommendations", "Progress tracking"],
      color: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      icon: "🎧",
      title: "Listening Practice",
      description: "Train your listening skills with authentic materials and interactive exercises",
      benefits: ["Various accents", "Progressive difficulty", "Detailed statistics"],
      color: "from-purple-500 to-pink-500",
      delay: "100"
    },
    {
      icon: "📖",
      title: "Reading Comprehension",
      description: "Develop reading comprehension skills with diverse texts and tasks",
      benefits: ["Academic texts", "Solution strategies", "Error analysis"],
      color: "from-green-500 to-emerald-500",
      delay: "200"
    },
    {
      icon: "🗣️",
      title: "Speaking Assessment",
      description: "Practice speaking with AI assistant and get objective evaluation",
      benefits: ["Real exam simulation", "Pronunciation analysis", "Personal recommendations"],
      color: "from-orange-500 to-red-500",
      delay: "300"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Track your progress and identify areas for improvement",
      benefits: ["Detailed analytics", "Personal plans", "Score predictions"],
      color: "from-indigo-500 to-purple-500",
      delay: "400"
    },
    {
      icon: "🎯",
      title: "Targeted Practice",
      description: "Focus on your weak points with personalized exercises",
      benefits: ["Adaptive exercises", "Smart recommendations", "Quick results"],
      color: "from-teal-500 to-blue-500",
      delay: "500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" id="features">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 font-medium">
            <img src={Logo} alt="Logo" className="w-20 h-17 mr-2" />
            Premium Features
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              All tools for success in
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              IELTS
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our platform provides comprehensive preparation for all IELTS exam sections 
            using advanced <span className="font-semibold text-blue-600">artificial intelligence</span> technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${feature.delay}ms` : '0ms',
                animationDelay: `${feature.delay}ms`
              }}
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        
      </div>
    </section>
  );
};

export default FeaturesSection;