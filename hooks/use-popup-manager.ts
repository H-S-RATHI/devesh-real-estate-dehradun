"use client"

import { useState, useEffect } from 'react';

interface PopupSettings {
  hasSeenPopup: boolean;
  hasSubmittedForm: boolean;
  lastPopupDate: string | null;
}

export function usePopupManager() {
  const [settings, setSettings] = useState<PopupSettings>({
    hasSeenPopup: false,
    hasSubmittedForm: false,
    lastPopupDate: null,
  });

  useEffect(() => {
    // Load settings from sessionStorage on component mount
    const hasSeenPopup = sessionStorage.getItem('popupSeen') === 'true';
    const hasSubmittedForm = sessionStorage.getItem('formSubmitted') === 'true';
    const lastPopupDate = sessionStorage.getItem('lastPopupDate');

    setSettings({
      hasSeenPopup,
      hasSubmittedForm,
      lastPopupDate,
    });
  }, []);

  const markPopupSeen = () => {
    sessionStorage.setItem('popupSeen', 'true');
    sessionStorage.setItem('lastPopupDate', new Date().toISOString());
    setSettings(prev => ({
      ...prev,
      hasSeenPopup: true,
      lastPopupDate: new Date().toISOString(),
    }));
  };

  const markFormSubmitted = () => {
    sessionStorage.setItem('formSubmitted', 'true');
    setSettings(prev => ({
      ...prev,
      hasSubmittedForm: true,
    }));
  };

  const resetPopupSettings = () => {
    sessionStorage.removeItem('popupSeen');
    sessionStorage.removeItem('formSubmitted');
    sessionStorage.removeItem('lastPopupDate');
    setSettings({
      hasSeenPopup: false,
      hasSubmittedForm: false,
      lastPopupDate: null,
    });
  };

  const shouldShowPopup = () => {
    // Don't show if user has already submitted a form or seen popup in this session
    if (settings.hasSubmittedForm || settings.hasSeenPopup) {
      return false;
    }

    // Additional logic can be added here for more complex rules
    // e.g., show popup again after X days, different popups for return visitors, etc.
    
    return true;
  };

  return {
    settings,
    markPopupSeen,
    markFormSubmitted,
    resetPopupSettings,
    shouldShowPopup,
  };
}