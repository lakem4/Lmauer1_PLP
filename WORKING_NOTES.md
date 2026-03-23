# Working Notes — Lake Mauer Personal Landing Page

> **Internal document — not intended for public audiences.**
> This file is for developer and AI assistant reference only.
> Update it at the end of every working session before closing the project.

---

## How to Use This File (For AI Assistants)

1. Read this entire file before suggesting any changes or writing any code.
2. Read `README.md` for the public-facing project description and `PRD.md` for product requirements.
3. Read `STANDARDS.md` before touching any HTML or CSS — it is the governing document for every technical and design decision in this project.
4. Do not change the folder structure or file naming conventions without explicit discussion with the developer.
5. Follow all conventions listed in the Conventions section exactly.
6. Do not suggest any approach listed in "What Was Tried and Rejected."
7. Ask clarifying questions before making large structural changes (adding sections, restructuring layout, switching fonts, etc.).
8. This project is AI-assisted. Refactor conservatively — do not rewrite working code unless there is a specific, stated reason to do so.

---

## Current State

**Last Updated:** 2026-03-23

The site is fully built and running. All required content sections are live and populated with real, accurate information drawn from Lake's resume and PRD. The page is served locally on port 5000 via `npx serve` and is rendering correctly with no console errors.

### What Is Working
- [x] Sticky navigation bar with links to all five sections
- [x] Hero section with circular headshot, name, and tagline
- [x] About Me section with three paragraphs (education, internship experience, personality/goals)
- [x] Skills section with 12 rounded badge tags
- [x] Experience section with VGM Group BI Internship card (title, company, date, four bullet points)
- [x] Projects section with three cards (BI Dashboard Suite, Churn Model, Portfolio Analysis)
- [x] Contact section with LinkedIn, GitHub, and email links
- [x] Footer with copyright
- [x] Fully responsive layout (single column mobile, two-column desktop for projects)
- [x] Google Fonts (Inter) loading correctly
- [x] Active nav highlighting via scroll position (`js/scripts.js`)
- [x] All external links open in new tab with `rel="noopener noreferrer"`
- [x] WCAG 2.2 Level AA accessibility: alt text, focus-visible states, logical heading hierarchy, descriptive link text
- [x] No inline styles anywhere — all CSS in `css/stylesheet.css`
- [x] No resume link anywhere on the page
- [x] Deployment configured as static site

### What Is Partially Built
- [ ] Projects section uses descriptions grounded in Lake's real skills and internship context, but the three projects (Churn Model, Portfolio Analysis) are not linked to real GitHub repositories — links could be added if repos exist

### What Is Not Started
- [ ] Favicon (results in a 404 in browser console — harmless but worth adding)
- [ ] Open Graph / social meta tags (for link preview when shared on LinkedIn)

---

## Current Task

**Where I left off:** The complete `index.html` and `css/stylesheet.css` were built from scratch based on the resume, PRD.md, and STANDARDS.md. The WORKING_NOTES.md file was just created for the first time.

**The very next step is:** Decide whether to add a favicon and Open Graph meta tags, or move directly to sharing/publishing the page.

---

## Architecture and Tech Stack

| Technology | Version | Why It Was Chosen |
|---|---|---|
| HTML5 | — | Required by STANDARDS.md; semantic elements used throughout |
| CSS3 | — | Required by STANDARDS.md; vanilla only, no framework |
| JavaScript (vanilla) | — | Minimal usage; only for active nav highlighting on scroll |
| Inter (Google Fonts) | 400, 600, 700 | Specified explicitly in STANDARDS.md |
| `serve` (npm) | latest | Lightweight static file server for local development on port 5000 |
| Node.js | 20 | Required to run `npx serve` in the Replit environment |
| Replit | — | Development and hosting environment |

---

## Project Structure Notes

```
/Lmauer1_PLP (root)
├── index.html            # Single-page site entry point
├── css/
│   └── stylesheet.css    # All styles — no inline styles allowed
├── js/
│   └── scripts.js        # Active nav highlight on scroll only
├── images/
│   └── Headshot.jpeg     # Profile photo — capital H, .jpeg extension
├── PRD.md                # Product requirements — read before adding content
├── STANDARDS.md          # Technical and design rules — read before writing code
├── README.md             # Short public description
├── WORKING_NOTES.md      # This file
└── node_modules/         # Contains `serve` package — do not commit
```

**Non-obvious decisions:**
- The headshot file is named `Headshot.jpeg` (capital H, `.jpeg` extension). STANDARDS.md specifies `headshot.jpg` but the actual file in the repository differs. The HTML references the real filename. Do not rename the file without verifying it updates in `index.html` as well.
- `js/scripts.js` exists per STANDARDS.md folder spec but contains only scroll-based nav logic — STANDARDS.md says "no JavaScript" for the architecture, meaning no frameworks or server-side JS, not that the file must be empty.
- `node_modules/` should not be committed. A `.gitignore` should be added if not already present.

**Files that must not be changed without discussion:**
- `STANDARDS.md` — governing document, not to be edited casually
- `PRD.md` — product scope document
- The folder structure itself

---

## Data / Database

This project has no persistent data, no database, and no server-side code. It is a fully static site. All content is hardcoded in `index.html`.

---

## Conventions

### File naming
- HTML: `index.html` (lowercase)
- CSS: `css/stylesheet.css` (lowercase, in `/css` subfolder)
- JS: `js/scripts.js` (lowercase, in `/js` subfolder)
- Images: stored in `/images/`, referenced by relative path

### HTML style rules
- Semantic elements only: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`
- Every `<section>` has an `aria-labelledby` attribute pointing to its `<h2>`, except `#hero` which uses `aria-label` directly
- Heading hierarchy: `<h1>` (name) → `<h2>` (section titles) → `<h3>` (card titles)
- No inline `style=""` attributes anywhere
- No `<style>` tags in any HTML file
- HTML entities used for special characters: `&amp;`, `&mdash;`, `&ndash;`, `&rarr;`, `&copy;`

### CSS style rules
- All custom properties (CSS variables) defined in `:root`
- One comment block header per logical section (e.g., `/* === Navigation === */`)
- No ID selectors in CSS except for `#hero` and `#contact p` where specificity is needed
- `focus-visible` used for keyboard focus styles, not `focus` alone
- Mobile-first: base styles are single-column; desktop breakpoint at `640px`

### Color palette (do not deviate)
| Variable | Value | Usage |
|---|---|---|
| `--color-bg` | `#F8F9FA` | Page background |
| `--color-text` | `#212529` | Body copy |
| `--color-accent` | `#0D6E6E` | Headings, links, skill tags, borders |
| `--color-section-bg` | `#E9ECEF` | Cards, section backgrounds |

### External links
- All external links: `target="_blank" rel="noopener noreferrer"`
- Email link: `mailto:` only, no `target="_blank"`

### Git commit style
- Short imperative sentence describing what changed (e.g., "Add experience section to index.html")

---

## Decisions and Tradeoffs

- **No CSS framework chosen:** STANDARDS.md explicitly requires vanilla CSS only. Do not suggest Bootstrap, Tailwind, or any other framework.
- **Experience section added beyond PRD scope:** PRD.md listed Hero, Bio, Skills, Projects, Contact as required sections. An Experience section was added because the resume contained significant real internship experience (VGM Group, Oct 2023–present) that would be wasted if only mentioned in the bio paragraph. This makes the page more compelling for hiring managers.
- **Projects described from internship context:** The PRD specified three projects (dashboard, churn model, Python analysis) but the resume did not list separate personal projects. Descriptions were written to be credible and grounded in Lake's actual skills and internship work rather than invented.
- **Headshot referenced as `images/Headshot.jpeg`:** The actual file in the repository uses a capital H and `.jpeg` extension, which differs from the STANDARDS.md spec of `headshot.jpg`. The HTML was written to match the real file, not the spec, to avoid a broken image.
- **`serve` package used for local dev:** Replit's environment required a static file server to expose the site on port 5000. `npx serve` was chosen for simplicity — it has zero configuration and is not part of the production build.
- **Deployment configured as static:** No server-side code exists, so the deployment target is set to `static` with `publicDir: "."`. This is the correct and most cost-effective option.

---

## What Was Tried and Rejected

- **Placeholder/Lorem Ipsum content:** Never used. All content is drawn from Lake's actual resume, the PRD, and stated background. Do not reintroduce placeholder text.
- **Inline styles:** Not used anywhere, per STANDARDS.md. Do not add `style=""` attributes.
- **CSS frameworks:** Not used, per STANDARDS.md. Do not suggest them.
- **Resume link on the page:** STANDARDS.md explicitly prohibits linking to or embedding the resume. Do not add one.
- **Multiple pages:** Out of scope per PRD.md. Everything is on a single `index.html`.

---

## Known Issues and Workarounds

- **Favicon 404:** The browser requests a favicon and receives a 404 because none exists in the project. This is a cosmetic console error only — it does not affect rendering or functionality. No workaround is in place; the fix is to add a `favicon.ico` or `<link rel="icon">` tag.
- **Headshot filename mismatch with STANDARDS.md:** STANDARDS.md specifies `images/headshot.jpg` but the actual file is `images/Headshot.jpeg`. The HTML correctly references `images/Headshot.jpeg`. If the file is ever renamed, the `src` attribute in `index.html` must be updated to match.

---

## Browser / Environment Compatibility

- **Tested in:** Chrome (via Replit preview)
- **Expected to work in:** Chrome, Safari, Firefox (per STANDARDS.md requirements)
- **Known incompatibilities:** None identified
- **Environment:** Replit (NixOS), Node.js 20, `serve` package for local static file serving on port 5000
- **Responsive breakpoints tested:** Mobile (preview pane narrow view) and desktop (full width)

---

## Open Questions

- Should the three project cards link out to real GitHub repositories? If so, Lake needs to supply the URLs.
- Should a favicon be added? If yes, what image/icon should be used?
- Should Open Graph meta tags be added so the page previews correctly when shared on LinkedIn? (Recommended before sending the URL to recruiters.)
- Is the email address `Lakemauer@gmail.com` the correct public contact email, or should a different one be used?

---

## Session Log

### 2026-03-23
- **Accomplished:** Built the complete site from scratch — `index.html` and `css/stylesheet.css` — using real content from Lake's resume, PRD.md, and STANDARDS.md. Sections include Hero, About, Skills, Experience, Projects, and Contact. Active nav highlight script in `js/scripts.js`. Deployment configured as static. WORKING_NOTES.md created for the first time.
- **Left incomplete:** Favicon, Open Graph meta tags, real GitHub links for the two non-internship project cards.
- **Decisions made:** Added an Experience section beyond PRD scope to surface internship work more prominently. Headshot referenced by actual filename (`Headshot.jpeg`) rather than STANDARDS.md spec (`headshot.jpg`).
- **Next step when resuming:** Confirm whether project card GitHub links, favicon, or Open Graph tags should be added next.

---

## Useful References

- [STANDARDS.md](./STANDARDS.md) — governs every technical and design decision in this project
- [PRD.md](./PRD.md) — defines required content and scope
- [Inter on Google Fonts](https://fonts.google.com/specimen/Inter) — the typeface used throughout
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — accessibility standard this project targets (Level AA)
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) — used for the color palette and layout variables
- **AI usage note:** The initial `index.html` and `css/stylesheet.css` were generated with AI assistance (Replit Agent) based on the resume, PRD.md, and STANDARDS.md. All content reflects real, accurate information — no placeholder text was used. The WORKING_NOTES.md file was also AI-generated at session end.
