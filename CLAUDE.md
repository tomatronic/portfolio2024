# Portfolio 2.0 — Claude Context

## Project
Tom Spencer's portfolio site. Next.js 15 + Tailwind CSS v4 + Framer Motion.
Live dev server: `npm run dev` → `http://localhost:3000`

Project root: `/Users/thomasspencer/Documents/Portfolio2.0/portfolio2.0/`

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (`globals.css` — uses `@import "tailwindcss"`, no PostCSS config needed)
- **Animation**: Framer Motion
- **Icons**: Lucide React (`lucide-react`)
- **Fonts**: DM Sans (body, `--font-dm-sans`) + Fraunces (headings, `--font-fraunces`) via `next/font/google`
- **Deployment**: Vercel (Analytics integrated)

## Key files
```
src/app/
  layout.js                   — root layout: Navigation, Footer, ThemeProvider, PageBackground, FOUC script
  page.js                     — home page: Hero + CasestudyShowcase + AboutMeSection + ExampleGallery
  globals.css                 — Tailwind v4 config, dark mode variant, base styles, btn-violet-3d utility
  components/
    hero.js                   — hero: Fraunces headline + DM Sans subtext + violet CTA button (smooth scroll to #work)
    casestudyShowcase.js      — work cards: full-width 2-col, CardImageStack right, text left, "Read case study" link
    navigation.js             — top nav: just_me.webp avatar + "Tom Spencer" in Fraunces text-2xl, desktop links, Resume pill, mobile full-screen menu
    PageBackground.js         — sets body bg from theme context only (no pathname logic)
    AboutMeSection.js         — open editorial layout: large Fraunces headline + 2 body paragraphs + "More about me →" text link (no card, no image)
    examples.js               — ExampleGallery: hover-expand 4-image grid ("Extra Pixels" section)
    CardImageStack.js         — fanned/spread image stack, shared by casestudyShowcase + OtherCaseStudies
    ThemeProvider.js          — context for dark/light theme; reads/writes localStorage
    ThemeToggle.js            — pill toggle (Sun/Moon icons) in footer
    OtherCaseStudies.js       — compact cards at bottom of each case study (title left, image stack right)
    footer.js                 — footer with ThemeToggle + copyright
  casestudy/                  — 6 individual case study pages
  @modal/
    default.js                — null default for modal slot
    (.)casestudy/[slug]/
      page.js                 — intercepts /casestudy/* navigation, renders content in modal
      CaseStudyModal.js       — modal shell: spring slide-up, sticky close button, violet-tinted bg
  about/
  resume/
public/
  just_me.webp                — nav avatar + favicon
  bio.jpeg                    — about page photo
  resume.pdf
  prompt_1.png, prompt_2.png, prompt_3.png  — Prompt case study card images
  acj_1.png, acj_2.png, acj_3.png          — ACJ case study card images
```

## Production home page
- **Background**: `#fafafa` light / `#0a0a0a` dark (set by PageBackground.js on body, theme-only)
- **Hero**: Centred Fraunces headline → DM Sans subtext (max-w-xl) → violet `btn-violet-3d` CTA ("Explore case studies", smooth scrolls to `#work`)
- **Work cards**: Full-width 2-col, image stack right, text + "Read case study →" link left. Hover: subtle shadow. Square images with `ring-2 ring-white`.
- **About**: Open editorial layout — large Fraunces headline, 2 body paragraphs, "More about me →" arrow link. No card, no photo.
- **Extra Pixels**: 4-item hover-expand gallery (ExampleGallery from `examples.js`)
- **Accent colour**: `violet-600` throughout (buttons, links, hover states)

## Button style — `btn-violet-3d`
Defined in `globals.css` `@layer utilities`. Applied to all filled violet buttons.
- Solid `#7c3aed` base, `ring-1` same colour, `::before` white gradient (50% → 100% on hover)
- No ambient shadow (removed). `rounded-xl` shape (not pill).
- Hover darkens to `#6d28d9`.

## Dark mode
- **Tailwind v4** dark mode: configured via `@variant dark (&:is(.dark, .dark *))` in `globals.css`
- **Do NOT use** `darkMode: 'class'` in `tailwind.config.js` — that's v3 syntax and is ignored
- ThemeProvider adds/removes `dark` class on `<html>`. Toggle persists to `localStorage`.
- FOUC prevention: inline `<script>` in layout.js applies dark class before hydration
- `<html>` has `suppressHydrationWarning` to avoid React mismatch warnings
- PageBackground.js only reacts to theme changes (NOT pathname — avoids purple flash on modal open)

## Case study modal (Parallel + Intercepting Routes)
- Clicking a card triggers `@modal/(.)casestudy/[slug]/page.js` — URL updates, modal slides up
- Direct URL (`/casestudy/Prompt`) still renders the full page normally
- Modal: spring slide-up (open), fast `easeIn` 0.22s (close)
- Close: sticky X button inside panel, Escape key. `router.back()` fires after animation.
- OtherCaseStudies links use `replace` prop to avoid history stacking (close always returns home)
- Scroll lock: `overflow: hidden` + `paddingRight` compensates for scrollbar width shift
- Modal bg: `bg-violet-600/[0.12] dark:bg-violet-950/90 backdrop-blur-sm`

## Navigation
- Left: `just_me.webp` circular avatar (spring hover: scale + rotate) + "Tom Spencer" in Fraunces `font-normal text-2xl` (inline style: `var(--font-fraunces)`)
- Desktop links: Work, About, Resume pill (hover → violet-600 with white text)
- Mobile: full-screen `bg-slate-950` overlay with Menu/X lucide icons

## Card interactions
- **Hover**: subtle shadow `0 4px 24px rgba(0,0,0,0.07)` light / `rgba(0,0,0,0.3)` dark
- **Border**: static — does NOT change on hover
- **Image stack**: square images, `ring-2 ring-white`, `imageSize: 37`, `restSpread: 80`

## OtherCaseStudies cards
- Layout: title (Fraunces, text-base, font-normal) left — image stack right
- Padding: `px-5 py-8`, image container `h-16 w-28 mr-6`
- `replace` prop on Link prevents modal history stacking
- Images: use real case study images (prompt_1-3, acj_1-3); Rakuten still uses Unsplash placeholders

## Colour palette — Production
| Role | Light | Dark |
|------|-------|------|
| Page background | `#fafafa` | `#0a0a0a` |
| Modal bg | `violet-600/12%` | `violet-950/90%` |
| Accent / CTA | `violet-600` | `violet-600` |
| Body text | `#020617` | `#ededed` |

## Case studies
- `/casestudy/Prompt` — Natural Language Search & AI (2025)
- `/casestudy/ACJ` — Multi-Touch Attribution for Affiliate (2024)
- `/casestudy/Rakuten` — Enhancing Offer Management (2021)
- `/casestudy/InfluencerCampaigns` — Influencer Campaigns (2025) ⚠️ not linked from nav/home (WIP)
- `/casestudy/Brewtiful` — Craft Beer & Design (2023)
- `/casestudy/DesignFlows` — DIY Toolkit Rental App (2021)

**Known issue in InfluencerCampaigns/page.js**: contains `[IMAGE: ...]` placeholder text in `<p>` tags that will render visibly. Case study is not linked from home page so not visible to users.

## Typographic scale
| Role | Font | Size | Weight | Color | Leading |
|------|------|------|--------|-------|---------|
| Page title (h1) | Fraunces | `text-3xl` → `text-5xl` | `font-semibold` (hero) / `font-normal` (case studies) | `text-slate-950 dark:text-white` | `leading-tight` |
| Section heading (h2) | Fraunces | `text-2xl` → `text-3xl` | `font-normal` | `text-slate-950 dark:text-white` | `tracking-tight` |
| Sub-heading (h3) | Fraunces | `text-xl` | `font-normal` | `text-slate-950 dark:text-white` | — |
| Body / muted text | DM Sans | `text-base` | `font-normal` | `text-slate-600 dark:text-slate-400` | `leading-relaxed` |
| Small / caption | DM Sans | `text-sm` or `text-xs` | — | — | — |

**Rule**: All body/muted `<p>` text must use `text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400`. Do NOT use `font-medium`, `font-semibold`, `text-slate-700`, `leading-7`, or `text-lg` for regular body copy.

**Fraunces on non-heading elements**: apply via `style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}` — there is no Tailwind utility class for it.

## Case study page spacing system
- Main card padding: `p-8 md:p-12`
- Between major sections: `mb-12`
- Image containers: `mb-8`
- Section heading top: `pt-10`
- Lists: `mb-8 space-y-2`
- Grid gaps: `gap-8 md:gap-12`
- Section h2: `pt-10 text-xl tracking-tight` (font-normal from globals)
- Section h3: `pt-10` (font-normal, size from globals)

## Important conventions
- Dark mode uses Tailwind v4 `@variant dark` — all `dark:` classes work via `.dark` class on `<html>`.
- `CardImageStack.js` is a shared component — changes affect all card layouts.
- `PageBackground.js` must NOT use pathname logic — causes purple flash when modal intercepts route.
- Favicon: `icons: { icon: '/just_me.webp' }` in `generateMetadata()` in `layout.js`.
- Image filenames in `/public` must be lowercase (e.g. `.png` not `.PNG`) — Vercel runs on Linux (case-sensitive).
- `group-hover` animations require `group` class on the parent element — check this when adding arrow animations to links.
