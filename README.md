# architec_demo

A portfolio website for an architecture studio. It gives a design firm a fast, image-first site to present its projects, its story and a way to get in touch.

**Live demo:** https://web-architec-demo.vercel.app

## Stack

- React 19 (JavaScript, JSX)
- React Router 7
- Tailwind CSS 4
- Vite 6
- Deployed on Vercel

## Features

- **Project gallery** with a detail page for every project (`/project/:id`), all driven by one data file.
- **Multi-page navigation** (Home, About, Projects, Contact) with client-side routing and a 404 page.
- **Contact form** page.
- **Responsive, image-first layout** that works from phone to wide desktop.
- **Reusable components** (project cards, detail cards, page titles) so new projects need data, not new code.

## Run locally

Requirements: Node.js 18+.

```bash
git clone https://github.com/Brayanketchup/architec_demo.git
cd architec_demo
npm install
npm run dev
```

Then open http://localhost:5173. Build for production with `npm run build`.
