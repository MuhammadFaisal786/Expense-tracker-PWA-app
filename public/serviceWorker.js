const cacheName = 'appv';



const cacheAssets = [
  './',
  './static/css/main.f95d1124.chunk.css',
  './index.html',
  './static/js/2.c7367c9a.chunk.js',
  './static/js/main.e506733e.chunk.js'
 


];


self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});





self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      .then(response => {
        
        return caches.open(cacheName).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });

    }).catch(error => {

        console.log("error in loading pages")

    })
  );
});





self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheAllowlist = [cacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});





