const PREFIX="learn-agent-", V=PREFIX+"9aa02503b776", FILES=["./", "data.bin", "icon-180.png", "icon-192.png", "icon-512.png", "index.html", "key.json", "manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(PREFIX)&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return; e.respondWith(caches.open(V).then(c=>c.match(e.request,{ignoreSearch:true})).then(r=>r||fetch(e.request))); });
