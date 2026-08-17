// assets/script.js — theme toggle, nav, and simple lightbox
(function(){
  // Theme handling
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');

  function applyTheme(theme){
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', theme==='dark');
    toggle.textContent = theme==='dark' ? '☀️' : '🌙';
  }

  if(saved){
    applyTheme(saved);
  } else {
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggle.addEventListener('click', ()=>{
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'flex';
      if(!expanded){
        nav.style.flexDirection = 'column';
      }
    });
  }

  // Lightbox for gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const imgButtons = document.querySelectorAll('.img-btn');

  function openLightbox(src, alt){
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox(){
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  imgButtons.forEach(btn=>{
    btn.addEventListener('click', ()=> openLightbox(btn.dataset.src, btn.getAttribute('aria-label')));
    btn.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(btn.dataset.src, btn.getAttribute('aria-label')); } });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });

  // Improve focus styles for keyboard users
  document.body.addEventListener('keyup', (e)=>{
    if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  }, { once: true });
})();
