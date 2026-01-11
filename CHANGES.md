# Changelog — UI/UX & Accessibility improvements

Date: 2025-12-18

Summary:
- Standardized button styles and variables across the project (.btn, .btn--primary, .btn--danger).
- Improved accessibility: added ARIA attributes (aria-pressed, aria-expanded, aria-controls, aria-live), `role` annotations and focus-visible styles.
- Converted non-form buttons to `type="button"` to prevent accidental form submits.
- Added `.form-control` helper and applied to inputs/selects (login, register, forgot, qr, catalogo).
- Improved carousel spacing, controls, dots and keyboard/touch accessibility.
- Standardized modal/panel behaviors (cart, more-categories), and updated JS to toggle ARIA attributes.
- Responsive tweaks: touch target sizes, media queries, layout fixes for scratch, index and catalog pages.

Files changed (high-level):
- HTML: `index.html`, `catalogo.html`, `login.html`, `register.html`, `forgot.html`, `qr.html`, `premios.html`, `scratchandWin.html`, `assets/fidelidad.html`.
- CSS: `css/style.css`, `css/style-index.css`, `css/catalogo.css`, `css/style-login.css`, `css/style-forgot.css`, `css/scratch.css`, `css/style-premios.css`.
- JS: `js/catalogo.js` (carousel dots, aria toggles, cart rendering improvements).

Notes:
- Accessibility and semantics prioritized: adding labels, roles and ARIA; focus states tested.
- If you want, I can run a quick Lighthouse accessibility audit and provide the report as follow-up.
