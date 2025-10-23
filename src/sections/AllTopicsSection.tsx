import React from 'react';

const AllTopicsSection: React.FC = () => {
  const topics = [
    {
      id: 1,
      title: "IELTS Speaking",
      description: "Master the art of fluent English conversation with our expert tutors",
      icon: "🗣️",
      features: ["Mock interviews", "Pronunciation training", "Fluency exercises", "Topic practice"],
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "IELTS Writing",
      description: "Learn to write compelling essays and reports that score high",
      icon: "✍️",
      features: ["Task 1 & 2 training", "Grammar improvement", "Vocabulary building", "Structure guidance"],
      bgColor: "from-green-100 to-green-200",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "IELTS Reading",
      description: "Develop speed and accuracy in reading comprehension",
      icon: "📚",
      features: ["Skimming techniques", "Detail understanding", "Time management", "Question strategies"],
      bgColor: "from-purple-100 to-purple-200",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      title: "IELTS Listening",
      description: "Enhance your listening skills with authentic materials",
      icon: "🎧",
      features: ["Audio practice", "Note-taking skills", "Accent training", "Prediction techniques"],
      bgColor: "from-orange-100 to-orange-200",
      textColor: "text-orange-600"
    },
    {
      id: 5,
      title: "Grammar Mastery",
      description: "Perfect your English grammar for all IELTS sections",
      icon: "📖",
      features: ["Tense mastery", "Complex structures", "Error correction", "Practice exercises"],
      bgColor: "from-red-100 to-red-200",
      textColor: "text-red-600"
    },
    {
      id: 6,
      title: "Vocabulary Builder",
      description: "Expand your vocabulary for academic and general contexts",
      icon: "💭",
      features: ["Academic words", "Topic vocabulary", "Collocations", "Usage examples"],
      bgColor: "from-indigo-100 to-indigo-200",
      textColor: "text-indigo-600"
    }
  ];

  // Дублируем карточки для бесконечной прокрутки
  const duplicatedTopics = [...topics, ...topics];

  return (
    <section id="all-topics" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IELTS preparation covering all four skills with expert guidance and proven strategies
          </p>
        </div>

        {/* Auto-scrolling Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6"
            style={{
              width: `${duplicatedTopics.length * 320}px`, // 320px = w-80 (20rem)
              animation: 'autoScroll 40s linear infinite'
            }}
          >
            {duplicatedTopics.map((topic, index) => (
              <div
                key={`${topic.id}-${index}`}
                className="w-80 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex-shrink-0"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${topic.bgColor} p-4 text-center`}>
                  <div className="text-3xl mb-2">{topic.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{topic.title}</h3>
                  <p className="text-gray-700 text-xs">{topic.description}</p>
                </div>

                {/* Features */}
                <div className="p-4">
                  <ul className="space-y-2">
                    {topic.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div className="mt-4">
                    <button className={`w-full py-2 px-3 rounded-lg font-semibold transition-all duration-200 ${topic.textColor} bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-sm`}>
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes autoScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${topics.length * 320}px);
            }
          }
        `
      }} />
    </section>
  );
};

export default AllTopicsSection;