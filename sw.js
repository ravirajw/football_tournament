const CACHE_NAME = '9to11-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
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
  '/UIComponents/adminLoginModal.js'
];

// Install event: cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
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

// Fetch event: Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Don't intercept Firebase requests or other external APIs unless we want them cached
  // Here we use Network First strategy for everything
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If the fetch is successful, cache the new response
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If network fails, try to return from cache
        return caches.match(event.request);
      })
  );
});
