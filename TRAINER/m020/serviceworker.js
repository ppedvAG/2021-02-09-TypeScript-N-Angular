"use strict";
const cacheName = 'v1';
const cacheAssets = [
    'main.html',
    'main.css',
    'second.html',
    'main.js'
];
self.addEventListener('install', (e) => {
    console.log('SW installed');
    e.waitUntil(caches
        .open(cacheName)
        .then(cache => {
        cache.addAll(cacheAssets);
        console.log('SW caching files');
    })
        .then(() => self.skipWaiting()));
});

// call activate event
self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

// call fetch event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        // bei misserfolg lade assets vom cache
        fetch(e.request).catch(() => caches.match(e.request))
    )
})
