"use strict";
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./serviceworker.js')
            .then(reg => console.log('SW registered', reg))
            .catch(err => console.log(`SW: Error: ${err}`));
    });
}
