/* ════════════════════════════════════════════════════════════════
   CONFIGURACIÓN — edita aquí
   ════════════════════════════════════════════════════════════════ */

// Tu número de WhatsApp CON código de país y SIN signos
// Ej: Venezuela 584121234567 · Colombia 573001234567 · México 521234567890
const WHATSAPP = "584125385086";

const CURRENCY = "$";

// Catálogo. cat: 'calzado' | 'sombreros'
// Para usar fotos reales agrega: img:"URL_o_data_URI_base64"
const PRODUCTS = [
  { id:"slide-concourse", name:"Concourse Slide",       cat:"calzado",   price:45, tag:"Para después del juego", icon:"slide",   accent:"#c47a45", img:"img/Calzados/Calzado 1.png" },
  { id:"low-grand",       name:"Grand Court Low",        cat:"calzado",   price:89, tag:"Sneaker de cancha",      icon:"sneaker", accent:"#28c2d4", img:"img/Calzados/Calzado 2.png" },
  { id:"bridge-runner",   name:"Bridge Runner",          cat:"calzado",   price:95, tag:"Para el asfalto",        icon:"sneaker", accent:"#8b9197", img:"img/Calzados/Calzado 3.png" },
  { id:"cap-snap",        name:"Skape Snapback",         cat:"sombreros", price:28, tag:"Monograma bordado",      icon:"cap",     accent:"#28c2d4", img:"img/Sombreros/Sombrero 1.png" },
  { id:"beanie-chrome",   name:"Chrome Monogram Beanie", cat:"sombreros", price:24, tag:"Punto acanalado",        icon:"beanie",  accent:"#c47a45", img:"img/Sombreros/Sombrero 2.png" },
  { id:"bucket-skape",    name:"Skape Bucket Hat",       cat:"sombreros", price:30, tag:"Ala ancha, bordado",     icon:"cap",     accent:"#8b9197", img:"img/Sombreros/Sombrero 3.png" },
];

/* ════════════════════════════════════════════════════════════════
   ICONOS SVG de producto
   ════════════════════════════════════════════════════════════════ */
const ICONS = {
  slide:'<path d="M8 28h30c8 0 14 4 18 8 3 3 0 8-4 8H10c-3 0-5-2-5-5v-7c0-2 1-4 3-4z"/><path d="M10 30h26" stroke-width="2.4" opacity=".6"/><path d="M10 34h22" stroke-width="2.4" opacity=".6"/>',
  sneaker:'<path d="M4 38h44c6 0 10-3 9-7-1-5-9-6-16-9-5-2-8-6-12-9-2-2-5-1-5 2v8c-6 0-12 2-15 6-2 2-3 4-3 6 0 2 1 3 5 3z"/><path d="M4 38h53" stroke-width="2.4"/><path d="M24 18c2 3 5 5 9 6" stroke-width="2.2" opacity=".6"/>',
  hoodie:'<path d="M22 8c-4 0-7 3-9 6L6 18c-2 1-3 3-2 5l3 6 5-2v23c0 2 1 3 3 3h22c2 0 3-1 3-3V27l5 2 3-6c1-2 0-4-2-5l-7-4c-2-3-5-6-9-6"/><path d="M22 8c0 4 3 7 6 7s6-3 6-7" stroke-width="2.4"/><path d="M26 30v14M30 30v14" stroke-width="2.2" opacity=".5"/>',
  tee:'<path d="M22 8 12 12l-7 6c-1 1-1 3 0 4l4 5 6-4v24c0 2 1 3 3 3h20c2 0 3-1 3-3V23l6 4 4-5c1-1 1-3 0-4l-7-6L34 8c-1 4-5 6-6 6s-5-2-6-6z"/>',
  shorts:'<path d="M10 12h36v8c0 2-1 4-2 7l-4 20c-1 2-2 3-4 3h-4c-2 0-3-1-3-3l-1-16h-2l-1 16c0 2-1 3-3 3h-4c-2 0-3-1-4-3l-4-20c-1-3-2-5-2-7z"/><path d="M28 19v6" stroke-width="2.2" opacity=".6"/>',
  cap:'<path d="M6 38c0-14 8-24 22-24 9 0 16 5 19 13l8 3c2 1 2 4 0 5l-9 3H8c-1 0-2-1-2-3z"/><path d="M28 14c-3 5-3 16 0 24" stroke-width="2.2" opacity=".5"/>',
  beanie:'<path d="M10 40c-1-18 8-28 18-28s19 10 18 28z"/><path d="M6 40h44c2 0 3 2 3 4s-1 4-3 4H6c-2 0-3-2-3-4s1-4 3-4z"/><path d="M20 14v26M28 12v28M36 14v26" stroke-width="2.2" opacity=".45"/>',
  socks:'<path d="M22 6h12v20c0 2 1 3 3 5l8 8c3 3 3 8 0 11s-8 3-11 0l-9-9c-3-3-5-6-5-11V6z"/><path d="M22 12h12" stroke-width="2.4"/><path d="M22 18h12" stroke-width="2.4" opacity=".6"/>',
  tote:'<path d="M12 20h32l-3 32c0 2-2 3-4 3H19c-2 0-4-1-4-3z"/><path d="M22 20v-3a6 6 0 0 1 12 0v3" stroke-width="2.6"/>',
};

function iconSVG(type){
  return '<svg viewBox="0 0 60 60" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">'+(ICONS[type]||ICONS.tee)+'</svg>';
}

/* ════════════════════════════════════════════════════════════════
   EMBLEMA SKAPE (SVG: balón + rascacielos + puente)
   ════════════════════════════════════════════════════════════════ */
function emblemSVG(){
  return `<svg class="emblem" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Emblema SKAPE">
  <defs>
    <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#c9ced3"/>
      <stop offset=".6" stop-color="#7d848b"/><stop offset=".8" stop-color="#eef1f3"/>
      <stop offset="1" stop-color="#9aa0a6"/>
    </linearGradient>
    <radialGradient id="ball" cx="40%" cy="35%" r="75%">
      <stop offset="0" stop-color="#e2a06a"/><stop offset=".55" stop-color="#c47a45"/>
      <stop offset="1" stop-color="#7c4626"/>
    </radialGradient>
    <linearGradient id="teal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5fe0ee"/><stop offset="1" stop-color="#1a8c99"/>
    </linearGradient>
    <clipPath id="ballClip"><circle cx="72" cy="118" r="34"/></clipPath>
  </defs>

  <!-- aro cromado -->
  <circle cx="100" cy="100" r="90" fill="none" stroke="url(#chrome)" stroke-width="7"/>
  <path d="M100 10 a90 90 0 0 1 78 135" fill="none" stroke="url(#teal)" stroke-width="7" stroke-linecap="round" opacity=".9"/>
  <circle cx="100" cy="100" r="80" fill="none" stroke="#3a322b" stroke-width="1.5" opacity=".7"/>

  <!-- balón -->
  <circle cx="72" cy="118" r="34" fill="url(#ball)"/>
  <g clip-path="url(#ballClip)" fill="none" stroke="#3a2515" stroke-width="2.4" opacity=".85">
    <line x1="72" y1="84" x2="72" y2="152"/>
    <line x1="38" y1="118" x2="106" y2="118"/>
    <path d="M48 88 C60 104 60 132 48 148"/>
    <path d="M96 88 C84 104 84 132 96 148"/>
  </g>
  <circle cx="72" cy="118" r="34" fill="none" stroke="url(#chrome)" stroke-width="2.5"/>

  <!-- rascacielos -->
  <g fill="none" stroke="url(#chrome)" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M104 150 V62 l8 -9 8 9 V150"/>
    <line x1="116" y1="53" x2="116" y2="42"/>
    <path d="M108 80 h16 M108 95 h16 M108 110 h16 M108 125 h16" stroke-width="2.2" opacity=".65"/>
  </g>

  <!-- puente colgante -->
  <g stroke="url(#chrome)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line x1="151" y1="56" x2="151" y2="150"/>
    <path d="M146 80 h10 M146 98 h10" stroke-width="3"/>
    <line x1="120" y1="142" x2="188" y2="142"/>
  </g>
  <g stroke="url(#teal)" stroke-width="2.8" fill="none" stroke-linecap="round" opacity=".95">
    <path d="M120 142 Q138 92 151 56 Q164 92 187 142"/>
    <path d="M131 142 V118 M141 142 V104 M161 142 V104 M172 142 V118" stroke-width="1.5" opacity=".8"/>
  </g>
</svg>`;
}

/* ════════════════════════════════════════════════════════════════
   ESTADO + RENDER
   ════════════════════════════════════════════════════════════════ */
const $ = s => document.querySelector(s);
const cart = {};

const money = n => CURRENCY + n.toLocaleString("es");

function labelCat(c){ return {calzado:"Calzado",sombreros:"Sombreros"}[c]||c; }

function mediaInner(p){
  if(p.img) return `<img class="prod-img" src="${p.img}" alt="${p.name}">`;
  return `<div class="mono">S</div><div class="pic" style="color:${p.accent}">${iconSVG(p.icon)}</div>`;
}

/* ════════════════════════════════════════════════════════════════
   CARRUSEL
   ════════════════════════════════════════════════════════════════ */
/* ════════════════════════════════════════════════════════════════
   LIGHTBOX
   ════════════════════════════════════════════════════════════════ */
let lbIdx = 0, lbScale = 1;
const LB_MIN = 1, LB_MAX = 3, LB_STEP = 0.5;

function openLightbox(productId){
  const idx = PRODUCTS.findIndex(p => p.id === productId);
  if(idx < 0) return;
  lbIdx = idx; lbScale = 1;
  lbUpdate();
  $("#lbOverlay").classList.add("open");
  document.body.classList.add("locked");
}

function closeLightbox(){
  $("#lbOverlay").classList.remove("open");
  if(!$("#cart").classList.contains("open") && !$("#mobileMenu").classList.contains("open"))
    document.body.classList.remove("locked");
}

function lbUpdate(){
  const p = PRODUCTS[lbIdx];
  const img = $("#lbImg");
  img.src = p.img || ""; img.alt = p.name;
  img.style.transform = `scale(${lbScale})`;
  $("#lbTitle").textContent = p.name;
  $("#lbCounter").textContent = `${lbIdx+1} de ${PRODUCTS.length}`;
  $("#lbZoomPct").textContent = Math.round(lbScale*100)+"%";
  $("#lbImgWrap").classList.toggle("zoomed", lbScale > 1);
  $("#lbZoomOut").disabled = lbScale <= LB_MIN;
  $("#lbZoomIn").disabled  = lbScale >= LB_MAX;
  $("#lbPrev").disabled = lbIdx === 0;
  $("#lbNext").disabled = lbIdx === PRODUCTS.length - 1;
}

function lbSetZoom(s){
  lbScale = Math.min(LB_MAX, Math.max(LB_MIN, s));
  lbUpdate();
}

function lbNav(dir){
  const next = lbIdx + dir;
  if(next < 0 || next >= PRODUCTS.length) return;
  lbIdx = next; lbScale = 1; lbUpdate();
}

/* ── carrusel ── */
let carIdx = 0;
const CAR_GAP = 20;

function visibleCount(){
  if(window.innerWidth < 560) return 1;
  if(window.innerWidth < 880) return 2;
  return 3;
}
function maxIdx(){ return Math.max(0, PRODUCTS.length - visibleCount()); }

function renderCarousel(){
  const track = $("#carouselTrack");
  track.innerHTML = PRODUCTS.map(p => `
    <article class="card car-card" data-cat="${p.cat}">
      <div class="card-media" style="background:linear-gradient(150deg, ${p.accent}22, #1d1714 70%)" data-lb-id="${p.id}">
        <span class="badge">${labelCat(p.cat)}</span>
        ${mediaInner(p)}
        ${p.img ? `<span class="lb-hint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg></span>` : ""}
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="tagline">${p.tag}</p>
        <div class="card-foot">
          <span class="price"><span>${CURRENCY}</span>${p.price.toLocaleString("es")}</span>
          <button class="add" data-add="${p.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            Agregar
          </button>
        </div>
      </div>
    </article>`).join("");
  carIdx = 0;
  renderDots();
  moveCarousel();
  observeReveals();
}

function moveCarousel(){
  const track = $("#carouselTrack");
  const first = track.querySelector('.car-card');
  if(!first) return;
  const w = first.getBoundingClientRect().width;
  track.style.transform = `translateX(-${carIdx * (w + CAR_GAP)}px)`;
  const prev = $("#prevBtn"), next = $("#nextBtn");
  if(prev) prev.disabled = carIdx === 0;
  if(next) next.disabled = carIdx >= maxIdx();
  document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i === carIdx));
}

function renderDots(){
  const dots = $("#carouselDots");
  if(!dots) return;
  dots.innerHTML = Array.from({length: maxIdx()+1}, (_,i) =>
    `<button class="dot${i===0?' active':''}" data-dot="${i}" aria-label="Producto ${i+1}"></button>`
  ).join("");
}

/* ── modal "ya en carrito" ── */
let pendingId = null;
let modalMode = null; // "add" | "del"

function showModal(id, mode){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  pendingId = id;
  modalMode = mode;
  const pic = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover">`
    : `<div style="width:100%;height:100%;display:grid;place-items:center;color:${p.accent};background:linear-gradient(150deg,${p.accent}22,#14110f)">${iconSVG(p.icon)}</div>`;
  $("#modalPic").innerHTML = pic;
  if(mode === "del"){
    $("#modalTitle").textContent = "¿Eliminar del carrito?";
    $("#modalMsg").textContent = `¿Quieres quitar "${p.name}" de tu pedido?`;
    $("#modalConfirm").textContent = "Sí, eliminar";
  } else {
    const qty = cart[id]||0;
    $("#modalTitle").textContent = "Ya está en tu carrito";
    $("#modalMsg").textContent = `"${p.name}" ya tienes ${qty} en el carrito. ¿Quieres agregar una más?`;
    $("#modalConfirm").textContent = "Sí, agregar una más";
  }
  $("#modalOverlay").classList.add("open");
  document.body.classList.add("locked");
}

function hideModal(){
  $("#modalOverlay").classList.remove("open");
  pendingId = null;
  modalMode = null;
  if(!$("#cart").classList.contains("open") && !$("#mobileMenu").classList.contains("open"))
    document.body.classList.remove("locked");
}

/* ── carrito ── */
function cartBtnShake(){
  const btn = $("#openCart");
  btn.classList.remove("shake");
  void btn.offsetWidth;
  btn.classList.add("shake");
  btn.addEventListener("animationend",()=>btn.classList.remove("shake"),{once:true});
}

function addToCart(id){
  if(cart[id]){ showModal(id, "add"); return; }
  doAddToCart(id);
}

function showToast(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const wrap = $("#toastWrap");
  const t = document.createElement("div");
  t.className = "toast";
  const pic = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover">`
    : `<div style="background:linear-gradient(150deg,${p.accent}22,#14110f);color:${p.accent}">${iconSVG(p.icon)}</div>`;
  t.innerHTML = `
    <div class="toast-icon">${pic}</div>
    <div class="toast-body">
      <div class="toast-lbl">Agregado al carrito</div>
      <div class="toast-name">${p.name}</div>
    </div>
    <button class="toast-x" aria-label="Cerrar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>`;
  wrap.appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("in")));
  const timer = setTimeout(()=>closeToast(t), 6000);
  t.querySelector(".toast-x").addEventListener("click",()=>closeToast(t));
  t._timer = timer;
}

function closeToast(t){
  clearTimeout(t._timer);
  t.classList.remove("in");
  t.classList.add("out");
  t.addEventListener("transitionend",()=>t.remove(),{once:true});
}

function doAddToCart(id){
  cart[id] = (cart[id]||0)+1;
  syncCart();
  cartBtnShake();
  showToast(id);
  const btn = document.querySelector(`[data-add="${id}"]`);
  if(btn){
    btn.classList.add("added");
    btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Añadido';
    setTimeout(()=>{
      btn.classList.remove("added");
      btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg> Agregar';
    },1100);
  }
}

function removeFromCart(id){
  showModal(id, "del");
}

function doRemoveFromCart(id){
  delete cart[id];
  syncCart();
  renderCart();
}

function clearCart(){
  Object.keys(cart).forEach(id=>delete cart[id]);
  syncCart();
  renderCart();
}

function setQty(id, d){
  cart[id] = (cart[id]||0)+d;
  if(cart[id]<=0) delete cart[id];
  syncCart();
  renderCart();
}

function syncCart(){
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  const el = $("#cartCount");
  el.textContent = count;
  el.dataset.empty = count===0;
}

function cartTotal(){
  return Object.entries(cart).reduce((sum,[id,q])=>{
    const p = PRODUCTS.find(x=>x.id===id);
    return sum + (p ? p.price*q : 0);
  },0);
}

function renderCart(){
  const items = $("#cartItems");
  const clearBtn = $("#clearCart");
  const ids = Object.keys(cart);
  if(clearBtn) clearBtn.style.display = ids.length ? "" : "none";
  if(!ids.length){
    items.innerHTML = `<div class="cart-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
      <p>Tu carrito está vacío.<br>Agrega piezas del catálogo.</p></div>`;
    $("#cartTotal").textContent = money(0);
    return;
  }
  items.innerHTML = ids.map(id=>{
    const p = PRODUCTS.find(x=>x.id===id);
    const q = cart[id];
    const pic = p.img
      ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover">`
      : `<span style="color:${p.accent}">${iconSVG(p.icon)}</span>`;
    return `<div class="ci">
      <div class="ci-pic" style="background:linear-gradient(150deg, ${p.accent}33, #14110f)">${pic}</div>
      <div class="ci-info">
        <h4>${p.name}</h4>
        <div class="ci-price">${money(p.price)} c/u · <strong style="color:var(--chrome)">${money(p.price*q)}</strong></div>
      </div>
      <div class="ci-right">
        <button class="ci-del" data-del="${id}" aria-label="Eliminar ${p.name}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
        </button>
        <div class="qty">
          <button data-q="${id}" data-d="-1" aria-label="Quitar uno">−</button>
          <span class="q">${q}</span>
          <button data-q="${id}" data-d="1" aria-label="Agregar uno">+</button>
        </div>
      </div>
    </div>`;
  }).join("");
  $("#cartTotal").textContent = money(cartTotal());
}

/* ── checkout WhatsApp ── */
function checkout(){
  const ids = Object.keys(cart);
  if(!ids.length){ alert("Agrega al menos un producto antes de pedir."); return; }
  let msg = "*Pedido — SKAPE From the Bronx*%0A%0A";
  ids.forEach(id=>{
    const p = PRODUCTS.find(x=>x.id===id);
    const q = cart[id];
    msg += `• ${q}× ${p.name} — ${money(p.price*q)}%0A`;
  });
  msg += `%0A*Total: ${money(cartTotal())}*%0A%0A¡Hola SKAPE! Quisiera hacer este pedido y consultar disponibilidad. ¿Pueden confirmarme? 🙏`;
  const num = WHATSAPP.replace(/\D/g,"");
  window.open(`https://wa.me/${num}?text=${msg}`,"_blank");
}

/* ── drawer + scroll lock ── */
function openCart(){
  $("#cart").classList.add("open");
  $("#overlay").classList.add("open");
  $("#cart").setAttribute("aria-hidden","false");
  document.body.classList.add("locked");
  renderCart();
}

function closeCart(){
  $("#cart").classList.remove("open");
  $("#overlay").classList.remove("open");
  $("#cart").setAttribute("aria-hidden","true");
  if(!$("#mobileMenu").classList.contains("open")) document.body.classList.remove("locked");
}

/* ── menú móvil ── */
function toggleMenu(force){
  const m = $("#mobileMenu"), t = $("#menuToggle");
  const open = force!==undefined ? force : !m.classList.contains("open");
  m.classList.toggle("open",open);
  t.setAttribute("aria-expanded",open);
  document.body.classList.toggle("locked",open);
}

/* ── reveal on scroll ── */
let io;
function observeReveals(){
  if(!io){
    io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }});
    },{threshold:.12});
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el=>io.observe(el));
}

/* ── specular que sigue al cursor ── */
function initSpecular(){
  const stage = $("#emblemStage"), spec = $("#specular");
  if(!stage || !spec) return;
  stage.addEventListener("pointermove", e=>{
    const r = stage.getBoundingClientRect();
    spec.style.left = ((e.clientX - r.left)/r.width*100)+"%";
    spec.style.top  = ((e.clientY - r.top )/r.height*100)+"%";
  });
}

/* ════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded",()=>{
  renderCarousel();
  syncCart();
  initSpecular();
  $("#year").textContent = new Date().getFullYear();

  const num   = WHATSAPP.replace(/\D/g,"");
  const waUrl = `https://wa.me/${num}?text=${encodeURIComponent("¡Hola SKAPE! Quiero consultar disponibilidad de sus productos. 👟🧢")}`;
  $("#waFloat").href = waUrl;
  $("#waLink").href  = waUrl;

  // Flechas del carrusel
  $("#prevBtn").addEventListener("click",()=>{ if(carIdx>0){ carIdx--; moveCarousel(); }});
  $("#nextBtn").addEventListener("click",()=>{ if(carIdx<maxIdx()){ carIdx++; moveCarousel(); }});

  // Dots
  $("#carouselDots").addEventListener("click",e=>{
    const b = e.target.closest("[data-dot]"); if(!b) return;
    carIdx = +b.dataset.dot; moveCarousel();
  });

  // Click en cards del carrusel
  $("#carouselTrack").addEventListener("click",e=>{
    const b = e.target.closest("[data-add]"); if(b){ addToCart(b.dataset.add); return; }
    const lb = e.target.closest("[data-lb-id]"); if(lb) openLightbox(lb.dataset.lbId);
  });

  // Lightbox
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbZoomIn").addEventListener("click", ()=>lbSetZoom(lbScale + LB_STEP));
  $("#lbZoomOut").addEventListener("click", ()=>lbSetZoom(lbScale - LB_STEP));
  $("#lbPrev").addEventListener("click", ()=>lbNav(-1));
  $("#lbNext").addEventListener("click", ()=>lbNav(1));
  // Click en imagen → alternar zoom 1x / 2x
  $("#lbImgWrap").addEventListener("click", ()=>lbSetZoom(lbScale > 1 ? LB_MIN : 2));
  // Scroll para zoom (desktop)
  $("#lbStage").addEventListener("wheel", e=>{
    e.preventDefault();
    lbSetZoom(lbScale + (e.deltaY < 0 ? LB_STEP : -LB_STEP));
  }, {passive:false});
  // Swipe táctil para navegar (móvil)
  let lbTouchX = null;
  $("#lbStage").addEventListener("touchstart", e=>{ lbTouchX=e.touches[0].clientX; },{passive:true});
  $("#lbStage").addEventListener("touchend", e=>{
    if(lbTouchX===null) return;
    const diff = lbTouchX - e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){ diff>0 ? lbNav(1) : lbNav(-1); }
    lbTouchX = null;
  },{passive:true});

  // Swipe táctil
  let touchX = null;
  $("#carouselTrack").addEventListener("touchstart",e=>{ touchX=e.touches[0].clientX; },{passive:true});
  $("#carouselTrack").addEventListener("touchend",e=>{
    if(touchX===null) return;
    const diff = touchX - e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){
      if(diff>0 && carIdx<maxIdx()){ carIdx++; moveCarousel(); }
      else if(diff<0 && carIdx>0){ carIdx--; moveCarousel(); }
    }
    touchX = null;
  },{passive:true});

  // Resize
  window.addEventListener("resize",()=>{
    carIdx = Math.min(carIdx, maxIdx());
    renderDots();
    moveCarousel();
  });

  $("#cartItems").addEventListener("click",e=>{
    const q = e.target.closest("[data-q]"); if(q){ setQty(q.dataset.q, +q.dataset.d); return; }
    const d = e.target.closest("[data-del]"); if(d) removeFromCart(d.dataset.del);
  });

  $("#openCart").addEventListener("click",openCart);
  $("#closeCart").addEventListener("click",closeCart);
  $("#overlay").addEventListener("click",closeCart);
  $("#checkout").addEventListener("click",checkout);
  $("#clearCart").addEventListener("click",clearCart);

  // Modal
  $("#modalConfirm").addEventListener("click",()=>{
    if(!pendingId) return;
    if(modalMode === "del"){
      doRemoveFromCart(pendingId);
      hideModal();
    } else {
      doAddToCart(pendingId);
      hideModal();
      openCart();
    }
  });
  $("#modalCancel").addEventListener("click",hideModal);
  $("#modalOverlay").addEventListener("click",e=>{ if(e.target===$("#modalOverlay")) hideModal(); });

  $("#menuToggle").addEventListener("click",()=>toggleMenu());
  $("#mobileMenu").addEventListener("click",e=>{ if(e.target.tagName==="A") toggleMenu(false); });

  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){ closeLightbox(); closeCart(); toggleMenu(false); hideModal(); }
    if(!$("#lbOverlay").classList.contains("open")) return;
    if(e.key==="ArrowLeft")  lbNav(-1);
    if(e.key==="ArrowRight") lbNav(1);
    if(e.key==="+"||e.key==="=") lbSetZoom(lbScale+LB_STEP);
    if(e.key==="-")              lbSetZoom(lbScale-LB_STEP);
    if(e.key==="0")              lbSetZoom(LB_MIN);
  });
});
