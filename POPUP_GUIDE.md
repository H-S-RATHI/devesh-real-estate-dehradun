# 🎯 Instant Popup Form - Complete Guide

## 📋 Problem Fixed
**Issue**: Popup was showing only once per browser session due to `sessionStorage` usage.  
**Solution**: Created a smart popup system with multiple strategies including "show on every refresh".

## 🚀 Current Configuration
Your popup is now set to **show on every page refresh** after 3.5 seconds.

## ⚙️ How to Change Popup Behavior

### Quick Changes
Edit the file: `lib/popup-config.ts`

```typescript
export const POPUP_CONFIG = {
  STRATEGY: 'EVERY_REFRESH', // ← Change this line
  DELAY_SECONDS: 3.5,        // ← Change timing here
  // ... other settings
};
```

### Available Strategies

1. **`'EVERY_REFRESH'`** ✅ **(Currently Active)**
   - Shows popup on every page refresh
   - What you requested - popup appears every time

2. **`'TIME_BASED'`**
   - Shows popup again after X minutes
   - Good for returning visitors
   - Configure: `TIME_BETWEEN_POPUPS_MINUTES: 30`

3. **`'ENGAGEMENT_BASED'`**
   - Shows popup based on user engagement
   - Only shows if user scrolls, moves mouse, or stays on page
   - Most user-friendly approach

4. **`'ONCE_PER_SESSION'`**
   - Shows popup only once per browser session
   - Original behavior (what was causing your issue)

### Quick Presets
You can also use predefined presets:

```typescript
// In lib/popup-config.ts
import { POPUP_PRESETS } from '@/lib/popup-config';

// Replace POPUP_CONFIG with one of these:
export const POPUP_CONFIG = POPUP_PRESETS.AGGRESSIVE;  // Every refresh, 2 seconds
export const POPUP_CONFIG = POPUP_PRESETS.BALANCED;   // Every 15 minutes
export const POPUP_CONFIG = POPUP_PRESETS.GENTLE;     // Based on engagement
export const POPUP_CONFIG = POPUP_PRESETS.MINIMAL;    // Once per session
```

## 🎨 Customizing Content

All popup text can be changed in `lib/popup-config.ts`:

```typescript
TITLE: "🎁 Special Offer!",
SUBTITLE: "Get FREE site visit & legal consultation worth ₹5,000",
URGENCY_MESSAGE: "Only 5 plots left at current prices! Price increases next month.",
SUCCESS_MESSAGE: "Thank you! We will call you back within 15 minutes during business hours.",
PRO_TIP: "Mention this popup for extra 2% discount!",
```

## 🛠️ Testing & Debugging

### Development Mode
When running `npm run dev`, you'll see:
- Debug panel in bottom-right corner
- Current strategy displayed in popup
- Reset buttons for testing

### Testing Different Strategies
1. Change `STRATEGY` in `lib/popup-config.ts`
2. Save the file
3. Refresh browser
4. Wait for popup to appear

### Reset Popup for Testing
- Click the "🐛 Debug Popup" button (bottom-right in development)
- Click "Reset All Settings"
- Refresh page

## 📧 Email Integration

The popup uses your existing EmailJS setup with these additions:
- Form source: "Instant Popup Form"
- Message prefix: "[POPUP CALLBACK REQUEST]"
- Strategy tracking: Shows which popup strategy was used

## 📱 Mobile & Desktop

The popup works on both mobile and desktop with:
- Responsive design
- Touch-friendly buttons
- Proper mobile animations
- Configurable mobile/desktop showing

## 🎯 Current Setup Summary

✅ **Active**: Shows on every page refresh  
✅ **Timing**: 3.5 seconds delay  
✅ **Fields**: Name (required), Phone (required), Budget (optional)  
✅ **Tracking**: Facebook Pixel + EmailJS  
✅ **Design**: Professional with animations  
✅ **Mobile**: Fully responsive  

## 🔄 Quick Actions

### To make popup less frequent:
```typescript
STRATEGY: 'TIME_BASED',
TIME_BETWEEN_POPUPS_MINUTES: 60, // Once per hour
```

### To make popup more engaging:
```typescript
STRATEGY: 'ENGAGEMENT_BASED',
MIN_SCROLL_PIXELS: 100,
MIN_TIME_ON_PAGE_SECONDS: 10,
```

### To change timing:
```typescript
DELAY_SECONDS: 5, // Show after 5 seconds instead of 3.5
```

## 🚨 Important Notes

- **Current behavior**: Popup shows on EVERY page refresh
- **No session storage**: Won't remember if user saw it before
- **Fresh start**: Every page load is treated as new visit
- **Testing**: Use debug panel in development mode

Your popup is now working exactly as requested - it will appear on every page refresh after 3.5 seconds! 🎉