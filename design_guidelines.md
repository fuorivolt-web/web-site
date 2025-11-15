# FuoriVolt Website Design Guidelines

## Design Approach
**Reference-Based**: Modern tech/SaaS aesthetic inspired by mobile app landing pages (Notion, Linear, Vercel) with clean layouts and prominent app showcases.

## Brand Color Palette (Extracted from Logo)
- **Primary Cyan**: #00D4FF (vibrant blue)
- **Accent Green**: #5EFFC4 (mint green)
- **Accent Coral**: #FF6B7A (salmon pink)
- **Accent Purple**: #9B59D6
- **Dark Background**: #0A0F1F or similar deep navy/black
- **Light Backgrounds**: White/off-white (#F8F9FA)

Use ONLY these colors throughout the entire site. Dark backgrounds with vibrant accent highlights for hero sections, light backgrounds for content sections.

## Typography
- **Primary Font**: Inter or Outfit (via Google Fonts CDN)
- **Headings**: Bold (700-800), sizes ranging from text-5xl (hero) to text-2xl (section headers)
- **Body Text**: Regular (400), text-base to text-lg
- **Italian Language**: All content in Italian

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, gap-8, py-20, etc.)
**Container**: max-w-7xl centered with px-6 for consistent margins

## Site Structure

### Navigation (Both Pages)
- Clean horizontal menu with "Home" and "Galleria" links
- Sticky header with logo (FuoriVolt) on left
- Prominent "Scarica su Google Play" button with Play Store icon on right
- Dark background (#0A0F1F) with cyan accent on hover

### Page 1: Homepage

**Hero Section (80vh)**
- Dark gradient background (#0A0F1F → #1A1F3F)
- Left column (50%): 
  - H1: "FuoriVolt – Monitora guasti elettrici nella tua zona" (text-5xl, bold, white)
  - Subtitle: Brief description (text-xl, gray-300)
  - Large "Scarica su Google Play" button with official badge/icon (cyan background)
- Right column (50%): Smartphone mockup showing app screenshot (use provided apertura app.jpeg)

**Come Funziona Section**
- Light background (#F8F9FA)
- py-20 padding
- 3-column grid (grid-cols-1 md:grid-cols-3, gap-12)
- Each step: Linear icon (from Heroicons), bold title, description
  1. "Apri la mappa" - Map icon
  2. "Filtra l'area" - Filter icon
  3. "Visualizza dettagli guasto" - Document icon

**Funzionalità Principali Section**
- White background
- py-24 padding
- 2x2 grid (grid-cols-1 md:grid-cols-2, gap-8)
- Feature cards with gradient borders (cyan to purple):
  - Mappa interattiva delle interruzioni
  - Ricerca e filtri geografici
  - Dettaglio dei guasti e interventi programmati
  - Interfaccia semplice e immediata

**Benefici Section**
- Light background
- py-20 padding
- 3-column grid for 3-4 benefit blocks
- Each block: Icon, title, short description highlighting user advantages

**Footer**
- Dark background matching header
- 3 columns: Copyright, Privacy Policy link, Contatti link
- Centered text, py-12

### Page 2: Galleria

**Gallery Hero**
- Smaller hero (40vh) with title "Anteprime dell'app"
- Centered text on dark background
- "Scarica su Google Play" button below title

**Screenshot Grid**
- Light background
- py-20 padding
- 3-column grid desktop, 2-column tablet, 1-column mobile (grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8)
- 6 screenshot cards with rounded corners (rounded-xl), subtle shadow
- Use provided images: mappe.jpeg, home.jpeg, statistiche.jpeg, filtri avanzati.jpeg, impostazioni.jpeg, + apertura app
- Below each image: Brief description (text-sm, gray-600)

**CTA Section**
- Centered "Scarica su Google Play" button
- py-16 padding

## Component Library

**Buttons**
- Primary (Google Play): Cyan background (#00D4FF), white text, rounded-lg, px-8 py-4, hover: brightness increase
- Secondary: Outlined style with cyan border

**Cards**
- Feature cards: White background, rounded-xl, p-8, subtle shadow, hover: lift effect
- Screenshot cards: Rounded-xl, overflow-hidden, aspect-video

**Icons**: Heroicons (outline style), sized h-12 w-12 for features, h-16 w-16 for steps

## Images
**Hero Image**: Smartphone mockup with app screenshot (apertura app.jpeg) - positioned on right side, tilted slightly for depth
**Gallery Images**: All 6 provided app screenshots displayed in organized grid

## SEO
- Meta title: "FuoriVolt – App per monitorare guasti elettrici in Italia"
- Meta description: "Monitora interruzioni elettriche in tempo reale con FuoriVolt. Mappa interattiva, filtri geografici e dettagli guasti." (max 160 chars)

## Responsive Behavior
- Desktop (lg): Multi-column layouts as specified
- Tablet (md): 2 columns maximum
- Mobile: Single column, stack all elements, larger touch targets (min 44px)