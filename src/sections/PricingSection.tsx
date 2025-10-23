import React, { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '../utils/analytics';
import Logo from '../components/img/bluelogo (2).svg';

const PricingSection: React.FC = () => {
  const { trackButtonClick } = useAnalytics();
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

  const handlePlanSelect = (planName: string, price: string) => {
    trackButtonClick(`Select ${planName} Plan`, 'Pricing Section');
    // You can also track this as a potential conversion
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: `${planName} Plan`,
        value: parseFloat(price.replace('$', '')),
        currency: 'USD'
      });
    }
  };

  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Perfect for beginners starting their IELTS journey",
      features: [
        "Basic course materials",
        "Weekly group sessions",
        "Progress tracking",
        "Community support",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      gradient: "from-gray-600 to-gray-700",
      borderGradient: "from-gray-300 to-gray-400",
      popular: false,
      delay: "0"
    },
    {
      id: 2,
      name: "Pro",
      price: "$39",
      period: "/month",
      description: "Popular choice for serious IELTS preparation",
      features: [
        "All Basic features",
        "Personal sessions (2 per month)",
        "AI essay checking",
        "AI Speaking practice",
        "Detailed analytics",
        "Priority support",
        "Exam simulations"
      ],
      buttonText: "Choose Pro",
      gradient: "from-blue-600 to-purple-600",
      borderGradient: "from-blue-400 to-purple-400",
      popular: true,
      delay: "100"
    },
    {
      id: 3,
      name: "Premium",
      price: "$69",
      period: "/month",
      description: "Maximum IELTS preparation support",
      features: [
        "All Pro features",
        "Unlimited personal sessions",
        "Personal study plan",
        "Exam registration assistance",
        "Score guarantee",
        "24/7 support",
        "Custom materials",
        "Interview preparation"
      ],
      buttonText: "Choose Premium",
      gradient: "from-purple-600 to-pink-600",
      borderGradient: "from-purple-400 to-pink-400",
      popular: false,
      delay: "200"
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-24  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 font-medium">
            <img src={Logo} alt="English AI Labs" className="w-20 h-17 mr-2" />
            Transparent Pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Choose your plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Flexible pricing for all needs. Start your journey to <span className="font-semibold text-blue-600">IELTS success today!</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-4 flex flex-col ${
                plan.popular ? 'scale-105 shadow-xl shadow-blue-500/20' : 'hover:scale-105'
              } ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${plan.delay}ms` : '0ms'
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.borderGradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <span className="relative z-10">🔥 Most Popular</span>
                  </div>
                </div>
              )}

              <div className="relative p-8 flex flex-col h-full">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center">
                      <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    </div>
                    
                    {/* Price decoration */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${plan.gradient} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300`}></div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <div className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button 
                  onClick={() => handlePlanSelect(plan.name, plan.price)}
                  className={`relative w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r ${plan.gradient} group-hover:shadow-2xl overflow-hidden`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                </button>
              </div>

              {/* Card shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;