const V="hl-v8",SHELL=["./","index.html","data.js","cover.webp","logo.webp","shatadal.webp","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=="hl-fonts").map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET")return;
 if(u.hostname.includes("fonts.g")){e.respondWith(caches.open("hl-fonts").then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(n=>{c.put(e.request,n.clone());return n}))));return}
 if(u.origin===location.origin)e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
