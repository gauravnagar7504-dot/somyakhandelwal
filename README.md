# Somya Khandelwal — Personal Freelance Website

An art-directed, high-end editorial freelance website for **Somya Khandelwal**, independent creative and digital partner.

## Overview & Disciplines

The website showcases Somya Khandelwal's core freelance offerings:
1. **SEO & Organic Growth** — Keyword research, on-page optimization, topic clusters, and technical audits.
2. **Social Media Marketing** — Narrative-driven social strategy, campaign concepts, and editorial calendars.
3. **Content Writing** — Website copy, thought leadership publications, and brand messaging.
4. **Graphic Designing** — Visual identity systems, collateral, campaign graphics, and design systems.
5. **Website Development** — Performant, accessible, and responsive web implementation.

## Visual Design Identity

- **Design System**: Editorial Precision
- **Color Palette**:
  - Pure White Canvas: `#FFFFFF`
  - Primary Cobalt: `#1746D1` (hover: `#0F35A3`)
  - Deep Navy Text: `#14284B`
  - Atmospheric Pale Blue Surface: `#F3F7FC`
  - Secondary Slate Text: `#526078`
  - Hairline Border: `#E4EAF2`
  - Subtle Hover Accent: `#EAF1FF`
- **Typography**:
  - Headings: **Plus Jakarta Sans**
  - Body & Micro-copy: **DM Sans**
- **Theme**: Pure light theme throughout with publication-grade whitespace, tactile buttons, and no generic gradients or AI dark hero sections.
- **Portraits & Transparency**: Strictly avoids fabricated portraits of Somya. Curated concept case studies are honestly labeled as concept explorations.

## Routes & Pages

1. **Home (`/`)**: Asymmetric hero with availability badge, studio blueprint composition, interactive services list, featured case studies, philosophy callout, 3-stage process, and direct contact CTA.
2. **About (`/about`)**: Studio narrative, foundational ethos ("Clarity over clutter", "Creativity with purpose", "Consistency that builds trust"), four-stage collaboration workflow (Discover, Plan, Create, Refine), and capability overview.
3. **Services (`/services`)**: In-depth breakdowns of all 5 disciplines with deliverables, 4-step agile methodologies, ethical practice guarantee, and interactive FAQ accordion.
4. **Work (`/work`)**: Responsive portfolio gallery with real-time category filtering (All Work, Graphic Design, Social Media, Websites, Content & SEO), empty state handling, and interactive monograph case-study modals.
5. **Contact (`/contact`)**: Responsive two-column layout with validated contact form, multi-select service chips, budget selector, honeypot anti-spam protection, honest submission logging, prefilled email composition link (`mailto`), and direct email copy helper.

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Clone or navigate to the project directory
cd "Somya Khandelwal"

# Install dependencies
npm install
```

### Development Server

```bash
# Run local Vite development server
npm run dev
```

The application will launch at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build

```bash
# Type check and build for production
npm run build
```

The production assets will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Form Endpoint Configuration

To connect a real form collection service (such as Formspree, Formspark, or Basin):

1. Open `src/components/ContactForm.tsx`.
2. Update the `FORM_ENDPOINT` constant:
   ```ts
   const FORM_ENDPOINT = 'https://formspree.io/f/your_form_id';
   ```
3. When left blank, the form automatically uses the honest prefilled email client fallback (`mailto:hello@somyakhandelwal.com`) and clipboard helper with zero fake submission promises.

## Accessibility & SEO Highlights

- Semantic HTML landmarks (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`).
- Full keyboard navigation and visible focus rings (`focus-visible`).
- Dynamic `<title>`, `<meta name="description">`, and Open Graph tags per route.
- Validated `public/sitemap.xml` and `public/robots.txt`.
- Respect for `prefers-reduced-motion`.
