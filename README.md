# Krishna Kumar M — Portfolio

A premium, recruiter-focused portfolio built with React 19, TypeScript, Vite, Tailwind CSS and
Framer Motion. Dark mode by default, fully responsive, and built around a developer-native
visual language: the hero and section headers are styled like an IDE/terminal, since that's the
world this portfolio is representing.

## 1. Design system at a glance

- **Palette** — deep graphite background (`#0B0E14`) rather than pure black, a cyan→indigo
  "cloud" gradient as the primary accent, and amber reserved for certifications/achievements.
  All tokens live as CSS variables in `src/index.css` and flip automatically for light mode.
- **Type** — Sora (display/headings), Inter (body), JetBrains Mono (labels, tags, the
  terminal-style "// 02 — skills.ts" section eyebrows).
- **Signature element** — the hero renders as a 3-tab code editor window with line numbers and
  a typewriter cycling through your role titles; every section heading echoes that motif as a
  code comment + filename.

## 2. Project structure

```
krishna-portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── PUT_YOUR_RESUME_HERE.txt   ← replace with resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/              # Button, Card, Badge, SectionHeading
│   │   ├── sections/         # Hero, About, Skills, Experience, Projects,
│   │   │                      LearningJourney, Certifications, Achievements, Contact
│   │   ├── Navbar.tsx, Footer.tsx, Loader.tsx, ScrollProgress.tsx,
│   │   │   ThemeToggle.tsx, BackToTop.tsx, AnimatedBackground.tsx
│   ├── data/                 # skills.ts, projects.ts, experience.ts, roadmap.ts, achievements.ts
│   ├── hooks/                 # useTheme, useScrollProgress, useActiveSection
│   ├── lib/utils.ts           # `cn()` className helper
│   ├── types/index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                  # SEO meta tags, OG tags, JSON-LD
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

All content (skills, projects, experience, certifications, roadmap, achievements) lives in
`src/data/*.ts` as plain, typed arrays — edit those files to update the site without touching
any component code.

## 3. Installation

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

Other scripts:

```bash
npm run build      # type-checks with tsc, then builds an optimized production bundle to /dist
npm run preview    # serves the production build locally
npm run lint       # ESLint (flat config, React Hooks + Refresh rules)
```

This build was verified end-to-end before delivery: `npm run build` and `npm run lint` both
pass cleanly with zero errors.

## 4. Before you deploy — personalize these

1. **Resume** — drop your real `resume.pdf` into `/public`, replacing
   `PUT_YOUR_RESUME_HERE.txt`. The Hero's "Download Resume" button already points at `/resume.pdf`.
2. **Real links** — `src/data/projects.ts`, `Contact.tsx` and `Footer.tsx` currently use
   placeholder GitHub/LinkedIn/email addresses (`github.com/krishnakumar`,
   `krishnakumar.dev@gmail.com`, etc). Swap these for your real handles.
3. **Domain** — `index.html` and `public/sitemap.xml` reference `https://krishnakumar.dev` as a
   placeholder canonical URL. Replace it with your real deployed domain once you have one.
4. **OG image** — `index.html` references `/og-cover.png` for social-share previews. Add a
   1200×630 image at `public/og-cover.png` (a screenshot of the hero works well).
5. **Project screenshots (optional)** — project cards currently use a stylized code-folder
   placeholder rather than real screenshots, to avoid shipping fake imagery. If you want real
   project screenshots, drop images into `src/assets/` and swap the placeholder block in
   `src/components/sections/Projects.tsx` for an `<img>`.

### Connecting the contact form

The contact form validates input and shows a success state, but doesn't send email yet —
wiring that up requires a backend or third-party form endpoint. The fastest options:

- **Formspree** (no backend): create a form at formspree.io, then change the `handleSubmit`
  function in `src/components/sections/Contact.tsx` to `fetch` your Formspree endpoint instead
  of just setting local state.
- **EmailJS**: similar drop-in approach, sends straight from the browser.
- **A serverless function** (Vercel/Netlify function or a small Express/Spring Boot endpoint)
  if you'd rather route it through your own backend.

## 5. Deploying to Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow prompts (framework preset: Vite)
vercel --prod # promote to production
```

**Option B — Git integration (recommended)**

1. Push this project to a GitHub repository.
2. In Vercel, click "Add New Project" → import the repo.
3. Vercel auto-detects Vite. Confirm: Build Command `npm run build`, Output Directory `dist`.
4. Deploy. Every push to `main` will auto-redeploy.

Once deployed, update the canonical URL, sitemap, and OG tags in `index.html` /
`public/sitemap.xml` to match your real Vercel (or custom) domain, then redeploy.

## 6. Performance notes

- Below-the-fold sections (`About` through `Contact`) are code-split with `React.lazy` +
  `Suspense` in `App.tsx`, so the initial bundle only needs the Hero and Navbar.
- `framer-motion` is its own chunk (`manualChunks` in `vite.config.ts`) so it's cached
  independently of app code.
- Animations respect `prefers-reduced-motion` globally (see `src/index.css`).
- Fonts are loaded via `<link rel="preconnect">` + a single Google Fonts request with
  `display=swap` to avoid invisible-text flashes.
- For further gains: run `npm run build -- --report` style bundle analysis if you add more
  heavy dependencies, and compress `og-cover.png` before adding it.

## 7. Accessibility

- A "Skip to content" link is focusable as the first tab stop.
- All interactive elements have visible focus rings (`:focus-visible` in `index.css`).
- The scroll-progress bar exposes `role="progressbar"` with live `aria-valuenow`.
- Color contrast was chosen to hold up in both the dark and light themes — verify with your
  browser's accessibility audit after you swap in real photography/branding, since custom
  images can shift contrast on overlaid text.

## 8. Tech stack

React 19 · TypeScript · Vite 6 · Tailwind CSS 3 · Framer Motion · Lucide Icons · React Icons
(available, not all are used in the starter set) · GSAP (installed and ready — currently the
build leans on Framer Motion for scroll reveals, but GSAP is included for any timeline-heavy
animation you want to add, e.g. a hero canvas effect).

---

Built for Krishna Kumar M — Java Developer & Cloud Engineer.
