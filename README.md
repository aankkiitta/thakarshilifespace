# AVANA — Premium Real Estate Website

An original, production-ready luxury real-estate website built with React, Vite, and Tailwind CSS v4, inspired by the design quality of leading luxury real-estate brands (no copied assets, logos, or content).

## Stack
- React 19 + Vite (rolldown)
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file — tokens live in `src/index.css`)
- React Router v7 for multi-page routing
- lucide-react for icons

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure
```
src/
├── components/     Navbar, Hero, ProjectCard, Gallery, ContactForm, etc.
├── pages/          Home, Projects, ProjectDetails, About, Contact
├── data/           projects.js — all project/testimonial/location content
├── hooks/          useCounter, useReveal, useScrollNav
└── index.css       design tokens (colors, type, animations) + Tailwind
```

## Design system
- **Colors:** ivory `#F7F4EE`, charcoal `#1C1B18`, bronze accent `#A9793C`
- **Type:** Cormorant Garamond (display) + Manrope (body)
- **Signature element:** the gold hairline + eyebrow label that draws in on scroll, repeated at the top of every section

## Notes
- Images are hotlinked from Unsplash as stock placeholders — swap in your own architectural photography before launch.
- The WhatsApp button and map embed use placeholder phone numbers/addresses — update `WhatsAppButton.jsx` and `Footer.jsx`/`Contact.jsx` with real details.
- The enquiry form validates client-side and shows a success state; wire `ContactForm.jsx`'s `handleSubmit` to your CRM/email endpoint to make it live.
