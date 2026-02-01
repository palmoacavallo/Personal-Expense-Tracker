// Service Worker - Family Expense Tracker
// IMPORTANTE: ogni volta che aggiorna il codice, incrementa il numero di versione della cache
const CACHE_NAME = 'family-expense-v2';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

// Install: cache dei file base
self.addEventListener('install', event => {
  // Forza l'attivazione immediata senza attendere che le pagine esistenti si chiudano
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

// Activate: pulizia vecchie cache
self.addEventListener('activate', event => {
  event.waitUntil(
    // Prendi il controllo di tutte le pagine immediatamente
    self.clients.claim().then(() =>
      caches.keys().then(keys =>
        Promise.all(
          keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        )
      )
    )
  );
});

// Fetch: network-first per index.html, cache-first per gli altri file statici
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Le chiamate esterne (Firebase, CDN, ecc.) vanno sempre sulla rete
  if (url.origin !== self.location.origin) {
    return; // lascia che il browser gestisca direttamente
  }

  // Per index.html usa sempre network-first così prendi sempre la versione più recente
  if (url.pathname === '/' || url.pathname.endsWith('index.html')) {
    event.respondWith(
      fetch(req).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Per tutti gli altri file statici usa cache-first
  event.respondWith(
    caches.match(req).then(res => res || fetch(req))
  );
});
