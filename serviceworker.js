console.log('this is the service worker');

// service-worker.js
importScripts(
  'https://storage.googleapis.com/' + 'workbox-cdn/releases/4.1.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  new RegExp('.*'),
  workbox.strategies.networkFirst()
);
