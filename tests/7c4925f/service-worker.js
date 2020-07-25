/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/main.css",
    "revision": "de4ce5f894f032a3fa6c786acecb6ec9"
  },
  {
    "url": "assets/js/app.js",
    "revision": "c8fe9e2ff1ff738218a3208407cb6d95"
  },
  {
    "url": "assets/js/modernizr-custom.js",
    "revision": "0ef2aafb1cab5cf4e796bd96ae318f62"
  },
  {
    "url": "assets/js/stats.min.js",
    "revision": "1613852877d2fc028da3821604aa180a"
  },
  {
    "url": "assets/js/three.min.js",
    "revision": "5228a0bfdc6b150c4ba8c125d105cfec"
  },
  {
    "url": "index.html",
    "revision": "9fc42bb83740f7a3a0d41331ca7aa9fe"
  },
  {
    "url": "assets/img/NZ.2b.png",
    "revision": "7455b3bdf6a181a499bb9d998a3c8234"
  },
  {
    "url": "assets/img/site-headline-inverse.png",
    "revision": "eed9239c264649f05459e724fbdbc42a"
  },
  {
    "url": "assets/img/site-headline-inverse.svg",
    "revision": "7b36d7b27e59a9190910a6b02f09f132"
  },
  {
    "url": "assets/img/site-headline.png",
    "revision": "df5ba91b2b76363e7f8b70a7504c5403"
  },
  {
    "url": "assets/img/site-headline.svg",
    "revision": "44524eba63d11b1039e75b1d98d76613"
  },
  {
    "url": "assets/img/Sky_over_Washington_Monument-1600x1200px.jpg",
    "revision": "97cc0f579bf1fa95d059b099d144b7db"
  },
  {
    "url": "assets/img/Sky_over_Washington_Monument-480x640px.jpg",
    "revision": "3b2edc71895da636cb63d954a91326b7"
  },
  {
    "url": "assets/img/Sky_over_Washington_Monument-800x600px.jpg",
    "revision": "36bf96820c6f22397ebb7e5a9ec37d22"
  },
  {
    "url": "assets/img/social-banner.png",
    "revision": "25cbf11c38232414a0ed47980a909a47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "directoryIndex": "index.html",
  "ignoreURLParametersMatching": [/./]
});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/assets\/fonts/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"webfonts", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/ajax\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"google-typekit-webfontloader", plugins: [] }), 'GET');
