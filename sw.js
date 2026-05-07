const CACHE_NAME = 'siber-kasa-v8';
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(['index.html', 'manifest.json'])));
});
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('script.google.com')) return; // Google Proxy'i asla önbelleğe alma
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});