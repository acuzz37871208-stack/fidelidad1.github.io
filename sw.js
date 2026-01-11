const CACHE_NAME = 'miweb-v2';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/login.html',
  '/register.html',
  '/forgot.html',
  '/premios.html',
  '/scratchandWin.html',
  '/hola.html',
  '/404.html',
  '/offline.html',
  '/css/style.css',
  '/css/style-login.css',
  '/css/style-index.css',
  '/css/style-forgot.css',
  '/css/style-premios.css',
  '/css/admin.css',
  '/css/scratch.css',
  '/tic.css',
  '/js/auth-login.js',
  '/js/auth-register.js',
  '/js/index.js',
  '/js/form-validation.js',
  '/js/firebase-config.js',
  '/js/qrious.min.js',
  '/js/qr.js',
  '/qr.html',
  '/assets/AwkaLiwen.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  // For navigation requests, try network first then fallback to offline page
  if (request.mode === 'navigate' || (request.method === 'GET' && request.headers.get('accept') && request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(request).catch(() => caches.match('/offline.html'))
    );
    return;
  }

  // For other requests, respond with cache-first
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
