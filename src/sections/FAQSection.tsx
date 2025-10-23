
import React, { useState, useRef, useEffect } from 'react';
import Logo from '../components/img/bluelogo (2).svg';



const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How does AI essay analysis work?",
      answer: "Our system uses advanced GPT-4 algorithms to analyze your essays across all IELTS criteria: Task Achievement/Response, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy. You receive detailed feedback with specific recommendations for improvement.",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      question: "How much time do I need to prepare for IELTS?",
      answer: "Preparation time depends on your current level and target score. On average, students achieve their desired results in 2-4 months of regular practice with our platform. Our system adapts the study plan to your individual needs.",
      icon: "⏱️",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      question: "What materials are included in the subscription?",
      answer: "Premium subscription includes: unlimited Writing checks, access to all modules (Listening, Reading, Speaking, Writing), personalized study plan, detailed progress analytics, priority support, and regularly updated materials.",
      icon: "📚",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      question: "Can I try the platform for free?",
      answer: "Yes! We offer a free tier with limited monthly checks. This allows you to evaluate the quality of our AI analysis and understand if our methodology suits you.",
      icon: "🆓",
      gradient: "from-orange-500 to-red-500"
    },
    {
      question: "How accurate is AI analysis compared to IELTS examiners?",
      answer: "Our AI system is trained on thousands of real essays scored by certified IELTS examiners. Analysis accuracy is 95%+ for overall band score and 90%+ for individual criteria. We continuously improve algorithms based on feedback.",
      icon: "🎯",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      question: "Does the platform support both Academic and General Training?",
      answer: "Yes, our platform supports both IELTS Academic and General Training formats. Materials and tasks are adapted to the specifics of each format, ensuring maximum relevant preparation.",
      icon: "📋",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 30-day money-back guarantee. If within the first month of use you don't see progress or aren't satisfied with the quality of learning, we'll refund the full subscription cost.",
      icon: "🛡️",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel your subscription anytime through your account settings. After cancellation, you'll retain access to premium features until the end of your paid period, then the account automatically switches to the free tier.",
      icon: "🔄",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 font-medium">
            <img src={Logo} alt="English AI Labs" className="w-20 h-17 mr-2" />
            Helpful Information
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Frequently asked{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Answers to the most popular questions about our <span className="font-semibold text-blue-600">AI platform</span>
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              
              <button
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-inset group-hover:bg-white/30 transition-all duration-300"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pr-4 group-hover:text-blue-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`flex-shrink-0 transform transition-all duration-300 ${
                      openItems.includes(index) ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                    }`}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${faq.gradient} rounded-full flex items-center justify-center`}>
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className={`border-t border-gradient-to-r ${faq.gradient} border-opacity-20 pt-4`}>
                    <div className="relative">
                      <div className={`absolute -left-2 top-0 w-1 h-full bg-gradient-to-b ${faq.gradient} rounded-full`}></div>
                      <p className="text-gray-700 leading-relaxed pl-6 group-hover:text-gray-900 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact CTA */}
        
      </div>
    </section>
  );
};

export default FAQSection;