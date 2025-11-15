# Color Picker

A small React color picker application bootstrapped with Vite.

This project is a lightweight UI that lets users choose and preview colors. It's intended as a simple demo / playground for React, Vite, and modern frontend tooling.

## Requirements

- Node.js 16 or newer
- npm (or yarn / pnpm)

## Install

Open a terminal in the project root and run:

```powershell
npm install
```

## Development

Start the dev server with HMR:

```powershell
npm run dev
```

Then open http://localhost:5173 (Vite default) in your browser.

## Build & Preview

Create an optimized production build:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Scripts (from package.json)

- `dev` — starts Vite dev server
- `build` — builds production assets
- `preview` — locally previews built assets
- `lint` — run ESLint (if configured)

## Project structure

Key files and folders:

- `index.html` — app entry HTML
- `src/` — source files
	- `main.jsx` — app bootstrap
	- `App.jsx` — main app component
	- `ColorPicker.jsx` — primary color picker UI
	- `index.css` / `App.css` — styles
	- `assets/` — images and static assets
- `public/` — static files served as-is
- `vite.config.js` — Vite configuration
- `package.json` — scripts and dependencies

## Troubleshooting

- If the dev server doesn't start, ensure Node.js is v16+ and run `npm install` again.

## Contributing

1. Fork the repo (or work in your local copy)
2. Create a branch for your change
3. Run and test changes locally with `npm run dev`
4. Open a pull request describing your changes