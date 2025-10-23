import React, { useState, useEffect, useRef } from 'react';
import Logo from '../components/img/bluelogo (2).svg';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Напишите нам',
      details: 'support@ieltsaimentor.com',
      subdetails: 'Отвечаем в течение 24 часов',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Позвоните нам',
      details: '+1 (555) 123-4567',
      subdetails: 'Пн-Пт: 9:00-18:00 EST',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '💬',
      title: 'Онлайн чат',
      details: 'Доступен 24/7',
      subdetails: 'Мгновенная поддержка',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📍',
      title: 'Наш офис',
      details: '123 Education Street',
      subdetails: 'New York, NY 10001',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: "Как быстро я увижу улучшения?",
      answer: "Большинство студентов видят значительные улучшения в течение 4-6 недель постоянной практики.",
      icon: "⚡"
    },
    {
      question: "Предоставляете ли вы гарантию возврата денег?",
      answer: "Да! Мы предлагаем 30-дневную гарантию возврата денег, если вы не удовлетворены нашим сервисом.",
      icon: "🛡️"
    },
    {
      question: "Могу ли я изменить план в любое время?",
      answer: "Абсолютно! Вы можете повысить или понизить свой план в любое время из панели управления.",
      icon: "🔄"
    },
    {
      question: "Предоставляете ли вы официальную сертификацию IELTS?",
      answer: "Мы обеспечиваем подготовку к официальному экзамену IELTS. Официальный тест нужно бронировать отдельно.",
      icon: "🏆"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 font-medium">
            <img src={Logo} alt="English AI Labs" className="w-20 h-17 mr-2" />
             Свяжитесь с нами
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Мы здесь, чтобы 
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              помочь вам
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Есть вопросы о нашей программе подготовки к IELTS? Мы здесь, чтобы помочь вам 
            <span className="font-semibold text-blue-600"> достичь успеха!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mr-4">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Отправьте нам сообщение
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/70 placeholder-gray-400"
                        placeholder="Ваше имя"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/70 placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/70 placeholder-gray-400"
                        placeholder="+1 (555) 123-4567"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Тема *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                      >
                        <option value="">Выберите тему</option>
                        <option value="general">Общие вопросы</option>
                        <option value="pricing">Вопросы по ценам</option>
                        <option value="technical">Техническая поддержка</option>
                        <option value="partnership">Партнерство</option>
                        <option value="feedback">Отзыв</option>
                      </select>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm group-hover:bg-white/70 placeholder-gray-400"
                      placeholder="Расскажите нам о ваших целях IELTS и как мы можем помочь..."
                    ></textarea>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Отправляем...
                      </>
                    ) : (
                      <>
                        📤 Отправить сообщение
                      </>
                    )}
                  </span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-all duration-700"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
                  style={{ 
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{info.title}</h4>
                  <p className="text-gray-700 font-medium">{info.details}</p>
                  <p className="text-gray-500 text-sm">{info.subdetails}</p>
                </div>
              ))}
            </div>

            {/* Enhanced FAQ Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-2xl mr-4">
                  ❓
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                  Часто задаваемые вопросы
                </h3>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="group border-b border-gray-200/50 pb-6 last:border-b-0 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 rounded-xl p-4 -m-4 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-sm flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{faq.question}</h4>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Map Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl mr-4">
                  📍
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent">
                  Наше местоположение
                </h3>
              </div>
              
              <div className="h-48 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl flex items-center justify-center border border-blue-200/30 hover:from-blue-200/50 hover:to-purple-200/50 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-2 animate-bounce">🗺️</div>
                  <p className="text-gray-700 font-medium">Интерактивная карта</p>
                  <p className="text-sm text-gray-500">123 Education Street, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative text-center">
              <div className="text-4xl mb-4">🚀</div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Готовы начать свой путь к IELTS?
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Не ждите! Присоединяйтесь к тысячам успешных студентов, которые достигли 
                <span className="font-bold text-yellow-300"> целевых баллов</span> с нами.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`${process.env.REACT_APP_PLATFORM_URL || 'http://localhost:3001'}/register`}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">🎯 Начать бесплатно</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="#contact"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  📅 Записаться на консультацию
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🎓</span>
                  <span className="text-sm">Экспертное обучение</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span className="text-sm">Быстрые результаты</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  <span className="text-sm">Гарантия успеха</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;