# Progressive Web App (PWA) Implementation Plan

> **PWA Preview Link:** [https://football-tournament-12d9e--pwa-test-lgvw0dhl.web.app](https://football-tournament-12d9e--pwa-test-lgvw0dhl.web.app)  
> **Expires:** 2026-04-27 17:06:19

## Goal Description
Convert the "Football Tournament Manager" into a Progressive Web App (PWA). This will allow users to install the app directly on their mobile home screens, use it seamlessly without an internet connection, and enjoy a faster, native app-like experience.

## User Review Required

> [!IMPORTANT]
> Converting to a PWA requires adding app icons. I will need to either generate a generic placeholder icon (e.g., a football graphic) or use one if you already have it.

## Open Questions

> [!WARNING]
> 1. **App Icons**: Do you have a specific logo/icon image you'd like to use, or should I generate a generic football icon to use for the home screen?
> 2. **Short Name**: What should the app be called on the mobile home screen? The full name is "Football Tournament Manager", but home screens usually require a shorter name (e.g., "Football Mgr", "Tourney", or "FTM").

## Proposed Changes

### PWA Configuration

#### [NEW] manifest.json
Create a Web App Manifest to provide metadata for installation.
- Set `name` to "Football Tournament Manager"
- Set `short_name` to your preferred short name (e.g., "Football Mgr")
- Set `display` to "standalone" to hide the browser UI
- Set `background_color` to `#ffffff`
- Set `theme_color` to `#667eea` (the app's primary purple/blue gradient color)
- Define icon paths for `192x192` and `512x512` sizes.

#### [NEW] sw.js (Service Worker)
Create a Service Worker to handle offline caching and fast loading.
- **Pre-caching**: Cache all core assets on install (`index.html`, all `js/*` files, and `UIComponents/*` files).
- **Fetch Strategy**: Use a "Cache First" strategy for static assets (HTML/JS/CSS) to ensure the app loads instantly, and a "Network First" strategy for external resources if needed.

#### [NEW] assets/icons/
- Create or add the required app icons (`icon-192x192.png` and `icon-512x512.png`).

---

### Core Application Files

#### [MODIFY] index.html
Update the main HTML file to wire up the PWA features.
- Add `<link rel="manifest" href="/manifest.json">`
- Add `<meta name="theme-color" content="#667eea">`
- Add `<link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png">` for iOS support.
- Add a `<script>` block at the bottom to register `sw.js` if the browser supports `navigator.serviceWorker`.

#### [MODIFY] js/firebase-config.js
Enable Firebase's built-in offline persistence so data works offline.
- Add `firebase.firestore().enablePersistence()` initialization.
- This ensures that if the user modifies tournament data while offline, Firebase will cache it locally and automatically sync it to the cloud once the connection is restored.

## Verification Plan

### Automated Tests
- None applicable for PWA setup.

### Manual Verification
1. Run the app locally or deploy it.
2. Open Chrome DevTools -> Application tab -> Manifest, and verify the manifest is correctly detected.
3. Open Chrome DevTools -> Application tab -> Service Workers, and verify `sw.js` is registered and active.
4. **Offline Test**: In the Network tab, set throttling to "Offline" and refresh the page. Verify the app still loads completely and data is visible.
5. **Install Test**: Verify the "Install App" prompt appears in the browser's address bar.

## 2026-04-21: Audit & Fixes Implementation

### Findings from Codebase Audit
Following the initial deployment, a comprehensive audit revealed a few critical misses and areas for optimization:
1. **Missing Icons in Pre-cache:** The app icons (`icon-192x192.png` and `icon-512x512.png`) were missing from the `ASSETS_TO_CACHE` array in `sw.js`.
2. **Missing Firebase SDKs in Pre-cache:** The Firebase JS libraries (`firebase-app-compat.js` and `firebase-firestore-compat.js`) from Google's CDN were not pre-cached. This breaks the app on full offline loads.
3. **Suboptimal Caching Strategy:** The implemented `sw.js` used a **"Network First"** strategy for everything, contradicting the planned "Cache First" strategy. This causes the app to stall on slow connections ("Lie-Fi").
4. **Firestore API Interference Risk:** The Service Worker needs to explicitly **ignore** requests to `firestore.googleapis.com` because Firestore handles its own offline caching (`enablePersistence`), and SW interference can cause sync bugs.

### Executed Fixes

#### [MODIFY] sw.js
- **Update `ASSETS_TO_CACHE`**: Added the icon paths and Firebase CDN URLs.
- **Change Fetch Strategy**: Implemented a **"Stale-While-Revalidate"** pattern for static assets (ensures instant loading from cache while updating in the background).
- **Add Firestore Exclusion**: Added explicit bypass for `firestore.googleapis.com`.
- **Allow Cross-Origin Caching**: Updated caching logic to handle `cors` requests for external CDNs.
