const VERSION='vanta-static-v1.0.0';
const FILES=['./','./index.html','./styles.css','./manifest.webmanifest','./assets/icon.svg','./assets/apple-touch-icon.png','./assets/icon-192.png','./assets/icon-512.png','./js/app.js','./js/core.js','./js/data.js','./js/store.js','./js/market.js','./js/analyst.js','./js/icons.js','./js/charts.js'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('vanta-static-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;const scope=new URL(self.registration.scope);const relative=url.pathname.slice(scope.pathname.length);if(!FILES.some(file=>file.replace(/^\.\//,'')===relative)&&event.request.mode!=='navigate')return;
  event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(VERSION).then(cache=>cache.put(event.request,copy));}return response;}).catch(()=>caches.match(event.request).then(cached=>cached||(event.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
