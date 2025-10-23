import { useEffect } from 'react';
import { useAnalytics, fbPixelEvent } from './analytics';

// Conversion events for the IELTS AI Mentor funnel
export const CONVERSION_EVENTS = {
  // Landing page events
  LANDING_PAGE_VIEW: 'landing_page_view',
  HERO_CTA_CLICK: 'hero_cta_click',
  FEATURES_VIEW: 'features_section_view',
  PRICING_VIEW: 'pricing_section_view',
  PRICING_PLAN_SELECT: 'pricing_plan_select',
  
  // Platform events
  REGISTRATION_START: 'registration_start',
  REGISTRATION_COMPLETE: 'registration_complete',
  ONBOARDING_START: 'onboarding_start',
  ONBOARDING_COMPLETE: 'onboarding_complete',
  
  // Feature usage events
  WRITING_CHECKER_FIRST_USE: 'writing_checker_first_use',
  SPEAKING_CHECKER_FIRST_USE: 'speaking_checker_first_use',
  LESSON_FIRST_VIEW: 'lesson_first_view',
  
  // Subscription events
  SUBSCRIPTION_INTENT: 'subscription_intent',
  SUBSCRIPTION_COMPLETE: 'subscription_complete',
  TRIAL_START: 'trial_start',
  
  // Engagement events
  SESSION_DURATION_5MIN: 'session_duration_5min',
  SESSION_DURATION_15MIN: 'session_duration_15min',
  RETURN_VISITOR: 'return_visitor'
};

export const useConversionTracking = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { trackButtonClick } = useAnalytics();

  const trackConversion = (event: string, additionalData?: any) => {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        event_category: 'conversion',
        event_label: event,
        custom_parameter: additionalData?.source || 'landing',
        ...additionalData
      });
    }

    // Facebook Pixel
    switch (event) {
      case CONVERSION_EVENTS.LANDING_PAGE_VIEW:
        fbPixelEvent('PageView');
        break;
      case CONVERSION_EVENTS.PRICING_PLAN_SELECT:
        fbPixelEvent('InitiateCheckout', additionalData);
        break;
      case CONVERSION_EVENTS.REGISTRATION_START:
        fbPixelEvent('StartTrial');
        break;
      case CONVERSION_EVENTS.REGISTRATION_COMPLETE:
        fbPixelEvent('CompleteRegistration');
        break;
      case CONVERSION_EVENTS.SUBSCRIPTION_COMPLETE:
        fbPixelEvent('Subscribe', additionalData);
        break;
      default:
        fbPixelEvent('CustomEvent', { event_name: event, ...additionalData });
    }

    // Console log for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 Conversion tracked:', event, additionalData);
    }
  };

  const trackUserJourney = (step: string, metadata?: any) => {
    const journeyData = {
      step,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer,
      ...metadata
    };

    // Store journey in localStorage for analysis
    const existingJourney = JSON.parse(localStorage.getItem('user_journey') || '[]');
    existingJourney.push(journeyData);
    
    // Keep only last 20 steps to avoid storage bloat
    if (existingJourney.length > 20) {
      existingJourney.shift();
    }
    
    localStorage.setItem('user_journey', JSON.stringify(existingJourney));
    
    trackConversion(step, journeyData);
  };

  const trackTimeOnPage = () => {
    const startTime = Date.now();
    
    const track5Minutes = setTimeout(() => {
      trackConversion(CONVERSION_EVENTS.SESSION_DURATION_5MIN, {
        duration_seconds: 300
      });
    }, 5 * 60 * 1000);

    const track15Minutes = setTimeout(() => {
      trackConversion(CONVERSION_EVENTS.SESSION_DURATION_15MIN, {
        duration_seconds: 900
      });
    }, 15 * 60 * 1000);

    // Cleanup function
    return () => {
      clearTimeout(track5Minutes);
      clearTimeout(track15Minutes);
      
      const actualDuration = Math.round((Date.now() - startTime) / 1000);
      if (actualDuration > 30) { // Only track if user stayed more than 30 seconds
        trackConversion('session_end', {
          duration_seconds: actualDuration
        });
      }
    };
  };

  return {
    trackConversion,
    trackUserJourney,
    trackTimeOnPage,
    CONVERSION_EVENTS
  };
};

// Hook to automatically track page views and time on page
export const usePageTracking = (pageName: string) => {
  const { trackConversion, trackTimeOnPage } = useConversionTracking();
  
  useEffect(() => {
    // Track page view
    trackConversion(CONVERSION_EVENTS.LANDING_PAGE_VIEW, {
      page_name: pageName,
      timestamp: new Date().toISOString()
    });

    // Check if returning visitor
    const lastVisit = localStorage.getItem('last_visit');
    if (lastVisit) {
      const daysSinceLastVisit = (Date.now() - parseInt(lastVisit)) / (1000 * 60 * 60 * 24);
      if (daysSinceLastVisit > 1) {
        trackConversion(CONVERSION_EVENTS.RETURN_VISITOR, {
          days_since_last_visit: Math.round(daysSinceLastVisit)
        });
      }
    }
    localStorage.setItem('last_visit', Date.now().toString());

    // Track time on page
    const cleanup = trackTimeOnPage();
    
    return cleanup;
  }, [pageName, trackConversion, trackTimeOnPage]);
};