// Accessible nav toggle + small UX helpers
// Replaces inline display toggling with aria/hidden handling and keyboard support
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!btn || !nav) return;

  function setExpanded(isOpen) {
    btn.setAttribute('aria-expanded', String(!!isOpen));
    nav.hidden = !isOpen;
    btn.classList.toggle('open', !!isOpen);
  }

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    setExpanded(!open);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setExpanded(false);
    }
  });

  // Close when clicking a nav link
  nav.addEventListener('click', (e) => {
    if (e.target.matches('a')) setExpanded(false);
  });

  // Initialize state from attribute
  setExpanded(btn.getAttribute('aria-expanded') === 'true');
});
