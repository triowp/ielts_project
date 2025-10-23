import React, { useEffect, useRef, useState } from 'react';
import Logo from '../components/img/bluelogo (2).svg';

const TestimonialsSection: React.FC = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Engineering Student",
      country: "🇨🇳 China",
      score: "8.5",
      previousScore: "6.0",
      image: "👩‍🎓",
      quote: "IELTS AI Mentor completely transformed my preparation. The personalized feedback helped me improve from 6.0 to 8.5 in just 3 months!",
      rating: 5,
      gradient: "from-pink-500 to-rose-500",
      delay: "0"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Doctor",
      country: "🇪🇬 Egypt",
      score: "7.5",
      previousScore: "5.5",
      image: "👨‍⚕️",
      quote: "The speaking practice was incredible. I finally gained confidence in expressing my thoughts fluently and achieved my target score for medical registration.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500",
      delay: "100"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Business Analyst",
      country: "🇲🇽 Mexico",
      score: "8.0",
      previousScore: "6.5",
      image: "👩‍💼",
      quote: "I loved the AI feedback on my essays. It was like having a personal tutor available 24/7. The improvement in my writing was remarkable!",
      rating: 5,
      gradient: "from-purple-500 to-indigo-500",
      delay: "200"
    },
    {
      id: 4,
      name: "Raj Patel",
      role: "Software Developer",
      country: "🇮🇳 India",
      score: "7.5",
      previousScore: "6.0",
      image: "👨‍💻",
      quote: "The structured approach and mock tests helped me understand exactly what examiners are looking for. Highly recommend to anyone serious about IELTS!",
      rating: 5,
      gradient: "from-green-500 to-emerald-500",
      delay: "300"
    },
    {
      id: 5,
      name: "Elena Popova",
      role: "Graduate Student",
      country: "🇧🇬 Bulgaria",
      score: "8.0",
      previousScore: "6.5",
      image: "👩‍🔬",
      quote: "The listening practice materials were diverse and challenging. This platform perfectly prepared me for the real exam conditions.",
      rating: 5,
      gradient: "from-orange-500 to-red-500",
      delay: "400"
    },
    {
      id: 6,
      name: "David Kim",
      role: "Marketing Manager",
      country: "🇰🇷 South Korea",
      score: "7.5",
      previousScore: "6.0",
      image: "👨‍💼",
      quote: "Exceptional value for money! The comprehensive study plan and expert guidance were crucial in achieving my immigration goals.",
      rating: 5,
      gradient: "from-teal-500 to-blue-500",
      delay: "500"
    }
  ];

  // Дублируем отзывы для бесконечной прокрутки
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg transition-all duration-300 hover:scale-125 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6 font-medium">
            <img src={Logo} alt="Logo" className="w-20 h-17 mr-2" />
            Student Reviews
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Student Success Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real results from real students. Join thousands who achieved their 
            <span className="font-semibold text-purple-600"> dream IELTS scores</span> with our proven system.
          </p>
        </div>

        {/* Enhanced Success Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { number: "10,000+", label: "Students Trained", icon: "👥", gradient: "from-blue-500 to-cyan-500" },
            { number: "7.8", label: "Average Score", icon: "📊", gradient: "from-green-500 to-emerald-500" },
            { number: "98%", label: "Success Rate", icon: "🎯", gradient: "from-purple-500 to-pink-500" },
            { number: "3 months", label: "Average Time", icon: "⏱️", gradient: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Auto-scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6"
            style={{
              width: `${duplicatedTestimonials.length * 400}px`, // 400px per card
              animation: 'autoScrollTestimonials 60s linear infinite'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-2 flex-shrink-0 w-96 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${testimonial.delay}ms` : '0ms'
                }}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </div>

                {/* Enhanced Score Improvement */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">{testimonial.previousScore}</div>
                      <div className="text-xs text-gray-600 font-medium">Before</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-full`}></div>
                      <span className="text-xl">→</span>
                    </div>
                    <div className="text-center">
                      <div className={`text-xl font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                        {testimonial.score}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">After</div>
                    </div>
                    <div className={`bg-gradient-to-r ${testimonial.gradient} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      +{(parseFloat(testimonial.score) - parseFloat(testimonial.previousScore)).toFixed(1)}
                    </div>
                  </div>
                </div>

                {/* Enhanced Rating */}
                <div className="flex mb-6 group-hover:scale-105 transition-transform duration-300">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Enhanced Quote */}
                <blockquote className="text-gray-700 leading-relaxed italic relative">
                  <div className={`absolute -top-2 -left-2 text-6xl bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent opacity-20 font-bold`}>
                    "
                  </div>
                  <div className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                    {testimonial.quote}
                  </div>
                </blockquote>

                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>


      </div>
      
      {/* CSS Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes autoScrollTestimonials {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${testimonials.length * 400}px);
            }
          }
        `
      }} />
    </section>
  );
};

export default TestimonialsSection;