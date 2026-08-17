# Uma_Stone_Crusher — UI updates and asset notes

This repository received a UI overhaul to improve accessibility, typography, layout, and branding.

Summary of recent commits

- feat(ui): integrate logo into header and improve header markup
- feat(ui): modernize styles — responsive header, hero, cards, buttons, and motion
- fix(nav): make hamburger accessible and reliable (aria-expanded, hidden, keyboard)
- feat(ui): add reveal-on-scroll script and keep accessible nav handling
- feat: add generated SVG logo (assets/images/logo.svg)

What I added

- `assets/images/logo.svg` — vector logo added
- `index.html` — header updated to include the logo, hero and CTAs
- `css/styles.css` — refined palette, typography, spacing, buttons, cards, responsive rules
- `assets/script.js` — accessible hamburger toggle and reveal-on-scroll

Placeholders & images

- The repo still contains placeholder SVGs for gravel and owner photos in `assets/images/`.
- Replace these placeholders with your real photos (file names to replace: `gravel1.svg`, `gravel2.svg`, `gravel3.svg`, `owner_main.svg`, `owner1.svg`, `owner2.svg`, `owner3.svg`).
- Recommended sizes:
  - Hero / product images: 1200×800 (or wider), optimized as JPEG/WEBP
  - Owner portraits: square 500×500

How to test locally

1. Pull the repository and run a static server from the repo root:
   - Node: `npx http-server`
   - Python: `python -m http.server 8080`
2. Open http://localhost:8080
3. Verify:
   - Logo displays in the header and scales on smaller screens
   - Navigation opens/closes with the hamburger (aria-expanded updates)
   - Press Escape to close the nav; clicking a nav link closes it
   - Scroll to see reveal-on-scroll animations (disabled if prefers-reduced-motion is set)

Next steps I can take

- Add Unsplash placeholder photos and optimize them for web (I will credit sources).
- Export logo PNGs at 32/64/128px and add them to `assets/images/`.
- Further tune colors or font sizes on request.

— Copilot
