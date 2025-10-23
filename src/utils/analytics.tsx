import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    fbq: (command: string, event: string, parameters?: any) => void;
  }
}

// Google Analytics
export const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_location: url,
    });
  }
};

// Track events
export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Facebook Pixel events
export const fbPixelEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Analytics Component
export const Analytics: React.FC = () => {
  useEffect(() => {
    // Load Google Analytics
    if (GA_TRACKING_ID) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_title: 'IELTS AI Mentor',
          custom_map: {'custom_parameter': 'value'}
        });
      `;
      document.head.appendChild(script2);
    }

    // Load Facebook Pixel (replace with your pixel ID)
    const FB_PIXEL_ID = process.env.REACT_APP_FB_PIXEL_ID;
    if (FB_PIXEL_ID) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
  }, []);

  return null;
};

// Hook for tracking user interactions
export const useAnalytics = () => {
  const trackButtonClick = (buttonName: string, location: string) => {
    event('click', 'Button', `${buttonName} - ${location}`);
    fbPixelEvent('ButtonClick', { button_name: buttonName, page_location: location });
  };

  const trackFormSubmit = (formName: string) => {
    event('submit', 'Form', formName);
    fbPixelEvent('Lead', { form_name: formName });
  };

  const trackSignUp = () => {
    event('sign_up', 'User', 'Registration');
    fbPixelEvent('CompleteRegistration');
  };

  const trackSubscription = (planName: string, price: number) => {
    event('purchase', 'Subscription', planName, price);
    fbPixelEvent('Subscribe', { plan_name: planName, value: price, currency: 'USD' });
  };

  return {
    trackButtonClick,
    trackFormSubmit,
    trackSignUp,
    trackSubscription,
  };
};