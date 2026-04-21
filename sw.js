const CACHE_NAME = '9to11-cache-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png',
  '/js/config.js',
  '/js/utils.js',
  '/js/tournamentSummary.js',
  '/js/firebase-config.js',
  '/js/firebase-storage.js',
  '/js/player-database.js',
  '/UIComponents/headerView.js',
  '/UIComponents/containerView.js',
  '/UIComponents/teamCardView.js',
  '/UIComponents/teamSetupView.js',
  '/UIComponents/pointsTableView.js',
  '/UIComponents/matches.js',
  '/UIComponents/whatsappMessageView.js',
  '/UIComponents/headerWithAdminControls.js',
  '/UIComponents/adminPasswordModal.js',
  '/UIComponents/keeperModal.js',
  '/UIComponents/tournamentWinnerBanner.js',
  '/UIComponents/modalView.js',
  '/UIComponents/adminLoginModal.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js'
];

// Install event: pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      // Use cache.addAll, but wrap in individual try-catches if needed, 
      // though addAll is fine since these are reliable URLs.
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Stale-While-Revalidate strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // EXPLICITLY IGNORE FIRESTORE API CALLS
  // Firestore handles its own offline persistence and caching. 
  // Intercepting it in the SW can cause sync conflicts and bugs.
  if (event.request.url.includes('firestore.googleapis.com')) {
    return; // Pass through to network natively
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // The fetch promise runs in the background to update the cache
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Only cache valid responses (status 200). 
        // Note: For opaque responses (status 0), we could cache them, but it's safer to only cache 200s for known assets.
        // Firebase CDN returns proper CORS headers, so status will be 200.
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch((err) => {
        console.log('Network request failed, relying on cache if available:', err);
      });

      // Return the cached response IMMEDIATELY if we have it (instant loading).
      // Otherwise, wait for the network response.
      return cachedResponse || fetchPromise;
    })
  );
});
