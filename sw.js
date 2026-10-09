// Guarda a página do checklist no celular para abrir mesmo sem internet.
// Página (index.html): tenta a internet primeiro (sempre pega a versão nova) e, sem sinal, usa a cópia guardada.
// Biblioteca do banco e fontes: usa a cópia guardada e atualiza em segundo plano.
// Dados das lojas (Supabase) NÃO passam por aqui: o próprio site guarda as lojas e a fila de alterações.
const CACHE = "checklist-offline-v1";
const EXTERNOS = ["https://cdn.jsdelivr.net/", "https://api.fontshare.com/", "https://cdn.fontshare.com/"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.add(new Request("./", { cache: "reload" })); }).catch(function(){}));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  const req = e.request;
  if(req.method !== "GET") return;
  const url = req.url;
  // página: internet primeiro, cópia guardada se estiver sem sinal
  if(req.mode === "navigate"){
    e.respondWith(fetch(req).then(function(res){
      const copia = res.clone(); caches.open(CACHE).then(function(c){ c.put("./", copia); });
      return res;
    }).catch(function(){ return caches.match("./"); }));
    return;
  }
  // biblioteca do banco e fontes: cópia guardada, atualizando em segundo plano
  if(EXTERNOS.some(function(p){ return url.indexOf(p) === 0; })){
    e.respondWith(caches.open(CACHE).then(function(c){
      return c.match(req).then(function(guardado){
        const daRede = fetch(req).then(function(res){ if(res && (res.ok || res.type === "opaque")) c.put(req, res.clone()); return res; }).catch(function(){ return guardado; });
        return guardado || daRede;
      });
    }));
  }
});
