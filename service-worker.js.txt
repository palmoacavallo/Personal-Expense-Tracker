const CACHE_NAME = 'family-expense-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './service-worker.js',
  './icon-192.png',
  './icon-512.png',
  // aggiungi qui anche i tuoi file locali se li hai (CSS separati, ecc.)
];

// Install: cache dei file base
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

// Activate: pulizia vecchie cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
});

// Fetch: offline-first per i file statici
self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(res => res || fetch(req))
  );
});
