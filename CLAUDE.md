# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Environment Overview

This is a Next.js 13.5.6 website for an air conditioning installation company serving the Kerkrade region in the Netherlands. The site uses the App Router pattern with TypeScript and Tailwind CSS.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production (includes sitemap generation)
npm run build

# Run linting
npm run lint

# Generate/update sitemaps
npm run generate-sitemaps
npm run update-sitemaps

# TypeScript type checking (no dedicated script, use directly)
npx tsc --noEmit
```

## Architecture and Key Patterns

### Routing Structure
The site uses Next.js App Router with the following key routes:
- `/diensten/[slug]` - Service pages with city-specific sub-routes `/diensten/[slug]/[city]`
- `/steden/[city]` - City-specific landing pages (174 cities from cities.csv)
- `/merken/[slug]` - Brand information pages
- `/kennisbank/[slug]` - Knowledge base articles
- `/regio/*` - Regional landing pages (parkstad, zuid-limburg, limburg)

### Data Management
- Static data stored in `/data` directory (CSV and JSON files)
- City data: `data/cities.csv` contains 174 Limburg cities with population and postal codes
- Brand data: `data/brands.json` contains air conditioning brand information
- Dynamic routes generated from this static data at build time

### Component Architecture
- UI components use Shadcn/UI library (stored in `/components/ui`)
- Page sections organized in `/components/sections`
- Form handling uses React Hook Form with Zod validation
- Email functionality via EmailJS (see `lib/emailjs.ts`)

### SEO Strategy
- Comprehensive sitemap generation via `prebuild-sitemaps.js` and `next-sitemap`
- Multiple sitemap files: main, locations, services, brands, knowledge base
- Structured data implementation using JSON-LD
- Dynamic metadata generation for all pages
- City and service combination pages for local SEO

### Styling System
- Tailwind CSS with custom design tokens in `tailwind.config.ts`
- StayCool brand colors: primary blues (#003366, #00509E) and orange accent (#FF6B35)
- Utility classes follow pattern: `text-staycool-*`, `bg-staycool-*`
- Dark mode support via next-themes

### Form Security
- CSRF protection implemented in contact forms
- Rate limiting on form submissions
- DOMPurify for sanitizing user input
- Honeypot fields for spam prevention

### Deployment
- Hosted on Netlify with automatic deployments
- Standalone output mode for optimized builds
- Environment variable: `NEXT_PUBLIC_SITE_URL` (defaults to https://aircoinstallatiekerkrade.nl)

## Critical Implementation Details

### Image Handling
- Product images stored in `/public/images/`
- **Important**: Avoid spaces in filenames - they cause issues in production
- Use Next.js Image component for optimization
- Remote images allowed from images.unsplash.com

### Dynamic Route Generation
When adding new cities or services:
1. Update the relevant CSV/JSON file in `/data`
2. Run `npm run build` to regenerate static pages
3. Sitemaps will be automatically updated during build

### EmailJS Configuration
Contact forms use EmailJS with the following IDs:
- Service ID: `service_n1gwduc`
- Template IDs defined in components
- Public key in environment or hardcoded fallback

### Local Development Notes
- Site runs on http://localhost:3000 by default
- All external API calls (EmailJS) work in development
- Sitemap generation uses NEXT_PUBLIC_SITE_URL for proper URLs