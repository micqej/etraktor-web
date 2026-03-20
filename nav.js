function toggleNav() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

// Lightbox
let lbImages = [], lbIdx = 0;

function openLightbox(images, idx) {
  lbImages = images; lbIdx = idx;
  updateLb();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbNav(d) {
  lbIdx = (lbIdx + d + lbImages.length) % lbImages.length;
  updateLb();
}
function updateLb() {
  document.getElementById('lbImg').src = lbImages[lbIdx];
  const c = document.getElementById('lbCount');
  if (c) c.textContent = `${lbIdx+1} / ${lbImages.length}`;
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox')?.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});

// Slider
function initSlider(id) {
  const wrap = document.getElementById(id);
  if (!wrap) return;
  const track = wrap.querySelector('.slider-track');
  const slides = wrap.querySelectorAll('.slide-img');
  const dots = wrap.querySelectorAll('.slider-dot');
  let cur = 0;
  function go(n) {
    cur = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d,i) => d.classList.toggle('active', i===cur));
  }
  wrap.querySelector('.slider-prev')?.addEventListener('click', () => go(cur-1));
  wrap.querySelector('.slider-next')?.addEventListener('click', () => go(cur+1));
  dots.forEach((d,i) => d.addEventListener('click', () => go(i)));
  // Auto
  setInterval(() => go(cur+1), 5000);
}

// Tabs
function showTab(groupId, tabId) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  group.querySelector('#' + tabId)?.classList.add('active');
  event.target.classList.add('active');
}

// Form submit
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('formBtn');
  if (btn) { btn.textContent = 'Odoslané – ozveme sa Vám!'; btn.disabled = true; btn.style.background = '#1b5e20'; }
}
