function toggleNav(){const m=document.getElementById('mobileMenu');if(m)m.classList.toggle('open');}
let lbImages=[],lbIdx=0;
function openLightbox(images,idx){lbImages=images;lbIdx=idx;updateLb();document.getElementById('lightbox').classList.add('open');document.body.style.overflow='hidden';}
function closeLb(){document.getElementById('lightbox').classList.remove('open');document.body.style.overflow='';}
function lbNav(d){lbIdx=(lbIdx+d+lbImages.length)%lbImages.length;updateLb();}
function updateLb(){document.getElementById('lbImg').src=lbImages[lbIdx];const c=document.getElementById('lbCount');if(c)c.textContent=(lbIdx+1)+' / '+lbImages.length;}
document.addEventListener('keydown',function(e){if(!document.getElementById('lightbox')?.classList.contains('open'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')lbNav(-1);if(e.key==='ArrowRight')lbNav(1);});
function showTab(groupId,tabId,btn){const g=document.getElementById(groupId);if(!g)return;g.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));g.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));const p=document.getElementById(tabId);if(p)p.classList.add('active');if(btn)btn.classList.add('active');}
function handleForm(e){e.preventDefault();const btn=document.getElementById('formBtn');if(btn){btn.textContent='Odoslané – ozveme sa Vám!';btn.disabled=true;btn.style.background='#1b5e20';}}
