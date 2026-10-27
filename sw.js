const CACHE_NAME = "mdnrkn-portfolio-v15";
const APP_SHELL = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./css/design-system.css",
  "./js/main.js",
  "./assets/favicon.svg",
  "./pages/design-system.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .open(CACHE_NAME)
        .then((cache) =>
          cache.addAll(APP_SHELL.map((url) => new Request(url, { cache: "reload" }))),
        ),
      self.skipWaiting(),
    ]),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) =>
        cacheNames
          .filter(
            (cacheName) =>
              cacheName.startsWith("mdnrkn-portfolio-") && cacheName !== CACHE_NAME,
          )
          .map((cacheName) => caches.delete(cacheName)),
      ),
      self.clients.claim(),
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    (async () => {
      const cachePromise = caches.open(CACHE_NAME);
      const cachedResponsePromise = cachePromise.then((cache) =>
        cache.match(request, { ignoreSearch: true }),
      );

      if (request.mode !== "navigate") {
        const refreshPromise = cachePromise.then(async (cache) => {
          const networkResponse = await fetch(request, { cache: "no-cache" });

          if (networkResponse.ok) {
            await cache.put(request, networkResponse.clone());
          }

          return networkResponse;
        });

        event.waitUntil(
          refreshPromise.catch((error) => {
            if (self.navigator.onLine) {
              console.error("Could not refresh an offline resource:", error);
            }
          }),
        );
        const cachedResponse = await cachedResponsePromise;
        if (cachedResponse) return cachedResponse;

        return refreshPromise;
      }

      try {
        const networkResponse = await fetch(request, { cache: "no-cache" });

        if (networkResponse.ok) {
          const cache = await cachePromise;
          await cache.put(request, networkResponse.clone());
        }

        return networkResponse;
      } catch {
        const cachedResponse = await cachedResponsePromise;
        if (cachedResponse) return cachedResponse;

        const cache = await cachePromise;
        const offlinePage = await cache.match(
          new URL("./index.html", self.registration.scope),
        );
        if (offlinePage) return offlinePage;

        throw new Error("Offline page is not available in the cache.");
      }
    })(),
  );
});
