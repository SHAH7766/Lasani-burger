# Lasani Burger & BBQ — Premium Restaurant Website

A complete, visually stunning, production-quality website built for **Lasani Burger & BBQ**, located at Imamia Colony Road, Imamia Colony, Shahdara, Lahore, Pakistan.

---

## Features

- **Cinematic Art Direction & Branding:** Rich dark food-inspired palette (`#10100F`, `#E53935`, `#FFB52E`), Bebas Neue display typography, smooth Framer Motion animations, and custom atmospheric glow effects.
- **Complete Route Architecture:**
  - `/` — Homepage with cinematic hero, promotional marquee strip, featured menu, signature dish spotlight, why choose us, photo gallery preview, Google reviews (4.3 rating from ~54 reviews), and location details.
  - `/menu` — Full menu browsing with instant search, category filtering (Burgers, BBQ, Pizza, Shawarma, Sides, Drinks), and sorting.
  - `/about` — Restaurant heritage and story in Shahdara.
  - `/gallery` — Editorial food gallery with interactive lightbox.
  - `/contact` — Contact form, location information, and directions.
  - `/cart` — Fully functional shopping cart with quantity management, subtotal calculations, localStorage persistence, and WhatsApp order submission workflow.
  - Custom 404 Page.
- **Functional Shopping Cart & Ordering Workflow:**
  - Real client-side cart state using Zustand with persistence.
  - Direct WhatsApp order summary integration with the restaurant's phone number (`0329 6000046`).
  - Quick-view modal for inspecting items, prep times, and descriptions.
- **Responsive & Accessible:** Fully optimized for mobile, tablet, and desktop screens with semantic HTML and keyboard navigation.

---

## Tech Stack

- **Framework:** React with Vite & TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** Zustand (with localStorage persistence)
- **Notifications:** Sonner
- **Routing:** React Router

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation & Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`.

### Production Build

To build the application for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Customization Guide

- **Updating Menu Items:** Edit `src/data/menu.ts` to add, remove, or update menu dishes, prices, descriptions, and category tags.
- **Updating Gallery Images:** Edit `src/data/gallery.ts` to update food photography.
- **Updating Restaurant Details:** Address, phone number (`0329 6000046`), and operating hours can be updated in `src/components/layout/Footer.tsx`, `src/components/home/LocationSection.tsx`, and contact pages.

---

## License

© Lasani Burger & BBQ. All rights reserved.
Generated with [Claude Code](https://claude.com/claude-code)
# Lasani-burger
