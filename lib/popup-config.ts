// Popup Configuration
// Change these settings to control how your popup behaves

export const POPUP_CONFIG = {
  // ===== POPUP STRATEGY =====
  // Choose one of these options:
  // 'EVERY_REFRESH' - Shows popup on every page refresh (what you requested)
  // 'TIME_BASED' - Shows popup again after X minutes
  // 'ENGAGEMENT_BASED' - Shows popup based on user engagement (scroll, mouse movement, time)
  // 'ONCE_PER_SESSION' - Shows popup only once per browser session
  STRATEGY: 'EVERY_REFRESH' as 'EVERY_REFRESH' | 'TIME_BASED' | 'ENGAGEMENT_BASED' | 'ONCE_PER_SESSION',
  
  // ===== TIMING SETTINGS =====
  DELAY_SECONDS: 3.5, // How long to wait before showing popup
  TIME_BETWEEN_POPUPS_MINUTES: 30, // For TIME_BASED strategy only
  
  // ===== ENGAGEMENT SETTINGS =====
  // For ENGAGEMENT_BASED strategy only
  MIN_SCROLL_PIXELS: 100, // User must scroll at least this much
  MIN_MOUSE_MOVEMENTS: 10, // User must move mouse at least this many times
  MIN_TIME_ON_PAGE_SECONDS: 5, // User must stay on page for at least this long
  
  // ===== POPUP CONTENT =====
  TITLE: "🎁 Special Offer!",
  SUBTITLE: "Get FREE site visit & legal consultation worth ₹5,000",
  URGENCY_MESSAGE: "Only 5 plots left at current prices! Price increases next month.",
  SUCCESS_MESSAGE: "Thank you! We will call you back within 15 minutes during business hours.",
  PRO_TIP: "Mention this popup for extra 2% discount!",
  
  // ===== BEHAVIOR SETTINGS =====
  SHOW_ON_MOBILE: true, // Show popup on mobile devices
  SHOW_ON_DESKTOP: true, // Show popup on desktop
  CLOSE_ON_OUTSIDE_CLICK: true, // Allow closing by clicking outside
  SHOW_DEBUG_INFO: false, // Show debug information in development
};

// Quick presets for common use cases
export const POPUP_PRESETS = {
  AGGRESSIVE: {
    ...POPUP_CONFIG,
    STRATEGY: 'EVERY_REFRESH' as const,
    DELAY_SECONDS: 2,
  },
  
  BALANCED: {
    ...POPUP_CONFIG,
    STRATEGY: 'TIME_BASED' as const,
    DELAY_SECONDS: 5,
    TIME_BETWEEN_POPUPS_MINUTES: 15,
  },
  
  GENTLE: {
    ...POPUP_CONFIG,
    STRATEGY: 'ENGAGEMENT_BASED' as const,
    DELAY_SECONDS: 10,
    MIN_SCROLL_PIXELS: 200,
    MIN_MOUSE_MOVEMENTS: 20,
    MIN_TIME_ON_PAGE_SECONDS: 15,
  },
  
  MINIMAL: {
    ...POPUP_CONFIG,
    STRATEGY: 'ONCE_PER_SESSION' as const,
    DELAY_SECONDS: 8,
  },
};

// Usage: 
// To use a preset, import it and change the strategy:
// import { POPUP_PRESETS } from '@/lib/popup-config';
// const config = POPUP_PRESETS.BALANCED;