// name=assets/script.js
// Adds a small reveal-on-scroll helper and re-uses the accessible nav toggle
document.addEventListener('DOMContentLoaded', () => {
  // NAV TOGGLE (already committed) - keep as-is
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (btn && nav) {
    function setExpanded(isOpen) {
      btn.setAttribute('aria-expanded', String(!!isOpen));
      nav.hidden = !isOpen;
      btn.classList.toggle('open', !!isOpen);
    }
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      setExpanded(!open);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        setExpanded(false);
      }
    });
    nav.addEventListener('click', (e) => { if (e.target.matches('a')) setExpanded(false); });
    setExpanded(btn.getAttribute('aria-expanded') === 'true');
  }

  // REVEAL ON SCROLL
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});
    reveals.forEach(el => io.observe(el));
  } else {
    // fallback: show all
    reveals.forEach(el => el.classList.add('show'));
  }
});
