# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 website for **Sree Mulamkadakom Devi Temple**, a Hindu temple website featuring traditional Indian aesthetics with modern web technologies. The site includes Malayalam language content and emphasizes amber/orange color schemes representing traditional Hindu temple themes.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14.2.16 (App Router)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom amber color palette
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image with Sharp

### Project Structure

```
app/
├── layout.tsx          # Root layout with ThemeProvider
├── page.tsx            # Homepage (sections-based layout)
├── gallery/page.tsx    # Gallery with lightbox modal
├── trust-members/      # Trust members page
├── priests/            # Priests page
└── contact/            # Contact page

components/
├── layout/
│   ├── header.tsx      # Sticky header with navigation
│   └── footer.tsx      # Footer component
├── sections/           # Page sections (hero, about, deities, etc.)
├── ui/                 # Reusable UI components (shadcn/ui based)
└── theme-provider.tsx  # next-themes wrapper

public/
├── images/             # Organized image directories
│   ├── gallery/        # Gallery images (38 images with Malayalam titles)
│   ├── trust members/  # Trust member photos
│   └── priests/        # Priest photos
└── *.{png,jpg}        # Root-level assets (patterns, symbols, backgrounds)
```

## Important Patterns

### Path Aliases
Use `@/` for imports: `import { Header } from "@/components/layout/header"`

### Image Handling
- All static images go in `public/` directory
- Reference images from root: `/images/gallery/example.jpg`
- Use Next.js `<Image>` component with `priority` prop for above-the-fold images
- Sharp package installed for automatic image optimization
- Images are auto-optimized to WebP format

### Modal/Overlay Components
When creating modals or overlays that must appear above all content (including the sticky header at z-50):
- Use `createPortal` from `react-dom` to render into `document.body`
- Add `isMounted` state check for SSR compatibility
- Example: `components/sections/gallery-grid.tsx` (lines 101-190)

### Client Components
Components using hooks, animations, or browser APIs need `"use client"` directive:
- All components using `useState`, `useEffect`, `usePathname`
- Components with Framer Motion animations
- Interactive components with event handlers

### Color Scheme
- Primary colors: Amber/Orange palette (amber-50 through amber-900)
- Background: `bg-amber-50/50` for soft backgrounds
- Accents: Gradients using `from-amber-500 to-orange-600`
- Text: `text-amber-900` for headings, `text-slate-700` for body

### Typography
- Headings: `font-serif` for traditional feel
- Body: Default sans-serif
- Support for Malayalam Unicode text throughout

### Animation Patterns
- Use Framer Motion's `<motion.div>` for entrance animations
- Staggered animations for lists: `delay: index * 0.05`
- `<AnimatePresence>` for exit animations
- Common pattern: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`

## Configuration Notes

### Next.js Config (`next.config.mjs`)
- ESLint and TypeScript errors ignored during builds (rapid development mode)
- Image optimization enabled (do not set `unoptimized: true`)

### TypeScript Config
- Strict mode enabled
- Path alias: `@/*` maps to project root
- Target: ES6

### Tailwind Config
- Custom amber color palette defined
- Container centered with 2rem padding
- Dark mode class-based (though site uses light theme)

## Page Layout Pattern

Standard page layout structure:
```tsx
<div className="flex min-h-screen flex-col bg-amber-50/50">
  <Header />
  <main className="flex-1">
    <PageHeader title="..." breadcrumbs={[...]} />
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/mandala-pattern.png" alt="Background Pattern" fill />
      </div>
      <div className="container relative z-10">
        <SectionTitle subtitle="..." title="..." description="..." />
        {/* Content */}
      </div>
    </section>
  </main>
  <Footer />
</div>
```

## Navigation Structure

Header navigation (`components/layout/header.tsx`):
- About → `/#about` (hash link to homepage section)
- Deities → `/#deities`
- Events → `/#events`
- Gallery → `/gallery` (dedicated page)
- Trust Members → `/trust-members` (dedicated page)
- Priests → `/priests` (dedicated page)
- Donate → `/#donate`
- Contact → `/contact` (button)

## Content Guidelines

- Maintain traditional Hindu temple aesthetic
- Use warm amber/orange gradients for decorative elements
- Include decorative dividers between sections
- Add Om symbols and mandala patterns for visual interest
- Support Malayalam language content (ensure proper Unicode rendering)
- All cards use hover effects with gradient borders and scale transforms

## Common Component Patterns

### Card with Gradient Border Hover
```tsx
<div className="relative rounded-2xl overflow-hidden">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
  <div className="relative bg-white rounded-2xl overflow-hidden">
    {/* Content */}
  </div>
</div>
```

### Section with Background Pattern
```tsx
<section className="py-20 bg-white relative overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <Image src="/mandala-pattern.png" alt="" fill className="object-cover" />
  </div>
  <div className="container relative z-10">
    {/* Content */}
  </div>
</section>
```

## Known Quirks

- Build configured to ignore TypeScript/ESLint errors for rapid iteration
- Sticky header uses `z-50` - ensure modals/overlays use portals or higher z-index
- Mobile menu auto-closes on route change (handled in header component)
- Gallery images use file names as titles (stored with Malayalam text)
