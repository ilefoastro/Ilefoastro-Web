// ---- Edit these two lines ----
var WHATSAPP_NUMBER = "2348102372318"; // e.g. 2348012345678
var WHATSAPP_TEXT = "Hello Ilefoastro Web, I would like a website for my business.";
// ------------------------------
document.querySelectorAll('[data-wa]').forEach(function(a){
  a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_TEXT);
  a.target = "_blank"; a.rel = "noopener";
});
fetch('content/portfolio.json').then(function(r){return r.json()}).then(function(d){
  var box = document.getElementById('projects'); var items = (d && d.projects) || [];
  if(!items.length) return; box.innerHTML = '';
  items.forEach(function(p){
    var c = document.createElement('div'); c.className = 'card';
    if(p.image){var i=document.createElement('img');i.src=p.image;i.alt=p.title||'';i.loading='lazy';c.appendChild(i);}
    var h=document.createElement('h3');h.textContent=p.title||'';c.appendChild(h);
    var t=document.createElement('p');t.textContent=p.summary||'';c.appendChild(t);
    if(p.link){var a=document.createElement('a');a.href=p.link;a.textContent='View';a.rel='noopener';c.appendChild(a);}
    box.appendChild(c);
  });
}).catch(function(){});
var f=document.getElementById('contactForm');
f.addEventListener('submit',function(e){e.preventDefault();var m=document.getElementById('formMsg');m.textContent='Sending…';
 fetch(f.action,{method:'POST',body:new FormData(f)}).then(function(r){return r.json()}).then(function(j){
  m.textContent=j.success?'Thank you. We will reply soon.':'Sorry, it did not send. Please use WhatsApp.';if(j.success)f.reset();
 }).catch(function(){m.textContent='Sorry, it did not send. Please use WhatsApp.';});});
