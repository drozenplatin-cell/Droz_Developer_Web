# Droz_Developer Website

A responsive React and Vite portfolio for Droz_Developer, Android apps, and digital services.

## Features

- Cobalt, coral, and cool-gray visual theme with glass-style surfaces
- Responsive navigation and scroll-reveal motion with reduced-motion support
- Projects, services, downloads, social links, and project-planning sections
- WhatsApp contact links and a validated email-draft form
- English-first automatic page translation into 59 additional languages through Google Translate
- Developer profile, two years of experience, and education history
- Kimara, Ubungo location card with a Google Maps directions link
- SEO metadata and custom favicon

## Brand details

- Brand: Droz_Developer
- Email: drozenplatin@gmail.com
- WhatsApp: +255 619 551 619
- Location: Kimara, Ubungo, Dar es Salaam, Tanzania
- Slogan: "Building Ideas. Creating Technology. Shaping Tomorrow."
- Developer: Ivan John Mwalongo
- Diploma: Health Information Technology, Kilenzi Memorial College of Health and Allied Science

## Requirements

- Node.js 22.12 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173/`).

## Build for deployment

```bash
npm run build
npm run preview
```

The production site is generated in `dist/` and can be deployed to static hosts such as Cloudflare Pages or Netlify. Use `npm run build` as the build command and `dist` as the output directory.

## Main source files

- `src/App.jsx`: page sections, content data, contact actions, and navigation
- `src/App.css`: page layout, responsive styles, brand colors, glass surfaces, and animation
- `src/index.css`: global styles and reduced-motion preferences
- `src/assets/`: profile and site images
- `public/`: favicon, icons, and crawler rules
- `index.html`: page title and SEO metadata

Update project, social, and download details in `src/App.jsx`. The contact form currently opens a prefilled email draft; it does not send messages to a backend.

The language selector starts in English and offers 59 additional languages. It uses Google's automatic translation widget where available, with a Google Translate page link as a fallback. Translation requires an internet connection, may not be exact, and page content may be processed by Google. The fallback link requires the site to be deployed at a publicly accessible URL; Google cannot fetch a local development server. The contact form also requires an email app configured on the visitor's device.
