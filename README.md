# UIKit

A modern React component library with design tokens, accessible components, and a clean developer experience.

## Stack

- **React 18** — UI framework
- **Vite 5** — build tool & dev server
- **CSS Modules** — scoped component styles
- **React Router 6** — client-side routing

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Base UI components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Badge/
│   │   └── Avatar/
│   └── layout/       # Layout components
│       ├── Navbar/
│       └── Footer/
├── pages/
│   ├── LandingPage/
│   └── DashboardPage/
├── tokens/           # Design tokens (JS)
│   ├── colors.js
│   ├── typography.js
│   └── spacing.js
└── styles/           # Global CSS & utilities
    ├── global.css
    └── utilities.css
```

## Components

| Component | Variants |
|-----------|----------|
| `Button` | primary, secondary, ghost, danger · sm/md/lg |
| `Input` | with label, hint, error state |
| `Card` | padding sm/md/lg · shadow none/base/md/lg |
| `Badge` | default, primary, success, warning, error |
| `Avatar` | image or initials fallback · sm/md/lg/xl |

## Scripts

```bash
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # lint source files
npm run format    # format with Prettier
```
