const staticCitySpotter = "cityspotter-v1";

const assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/styles/style.css",
  "/js/app.js",
  "/images/icon-city_spotter-128x128.png",
  "/images/icon-city_spotter-152x152.png",
  "/images/icon-city_spotter-192x192.png",
  "/images/icon-city_spotter-256x256.png",
  "/images/icon-city_spotter-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCitySpotter).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});