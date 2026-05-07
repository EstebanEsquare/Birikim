const CACHE_NAME = 'siber-kasa-v7';
// Sadece tasarım dosyalarını önbelleğe al, VERİLERİ (API) asla dokunma!
const ASSETS = [
  'index.html',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  // Eğer istek bir API isteği ise (http içeriyorsa), önbelleği atla, doğrudan internete git
  if (e.request.url.includes('http')) {
    return; 
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});