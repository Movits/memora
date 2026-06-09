/* Service worker do Memora.
   Estratégia: network-first para manter o conteúdo fresco quando online,
   com fallback para o cache quando offline. */
var CACHE = "memora-v17";
var SHELL = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.webmanifest",
  "decks/exemplo.js",
  "decks/pessoa-idosa.js",
  "decks/teorias-ri.js",
  "decks/teorias-contemporaneas-ri.js",
  "decks/diplomacia-ri.js",
  "decks/formacao-economica.js",
  "decks/economia-brasileira.js",
  "decks/comercio-exterior.js",
  "decks/metodologia.js",
  "decks/estatistica.js",
  "decks/desenvolvimento-sustentavel.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(SHELL.map(function (url) {
      return c.add(url).catch(function () {});
    }));
  }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        return hit || caches.match("index.html");
      });
    })
  );
});
