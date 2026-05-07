const CACHE_NAME = 'siber-kasa-v6'; 
const ASSETS = ['index.html', 'manifest.json', 'https://cdn.jsdelivr.net/npm/chart.js'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))));