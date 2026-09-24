# Raj's portfolio — Built with intent

The complete React + TypeScript portfolio with a CRED-inspired black-and-silver design, electric-blue accents, tactile buttons, an asymmetric project grid, accessible case study dialogs, responsive navigation, and a replaceable demo portrait. This is an original personal portfolio; it has no affiliation with CRED.

## Run on your computer

1. Install Node.js **24** (npm is included).
2. Extract this ZIP. Open the **raj-portfolio** folder in VS Code.
3. Open a terminal inside that folder — the one containing `package.json`.
4. Run:

```bash
npm install
npm run dev
```

Your browser opens automatically. The usual address is **http://localhost:5173/**. If that port is busy, Vite chooses the next available port; use the address printed in the terminal. If your system blocks the automatic browser launch, open that address manually.

Keep the terminal running while you use the portfolio. Press **Ctrl+C** to stop it. After the first install, just run `npm run dev` whenever you want to work on the site. Changes to the source update the browser automatically.

If you get “Missing script: dev” or “Could not read package.json,” check that you opened the extracted `raj-portfolio` folder rather than the folder around it.

## Build for deployment

```bash
npm run build
```

The finished website is written to **dist/**. Upload that folder's contents to a static host at your domain's root. A ready-built `dist` is included in this download; rebuild after changing the source.

To check the production build locally:

```bash
npm run preview
```

This opens **http://localhost:4173/** (or the next available port). Development and preview servers run on your computer; they do not publish a public website.

For a static hosting service, use these project settings:

- Framework: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Publish/output directory: `dist`
- Node.js version: 24

A `netlify.toml` with these build settings is included. No backend, account secrets, or environment variables are required for this portfolio. Google Fonts loads the two fonts when an internet connection is available; fallback fonts are defined in the CSS.

## Edit your portfolio

| File | What to edit |
| --- | --- |
| `src/profile.ts` | Your name, email, GitHub URL, location, photo, and demo-photo setting |
| `src/projects.ts` | Project descriptions, technologies, and case study content |
| `src/App.tsx` | Introduction, skills, page sections, and interactions |
| `src/project-previews.tsx` | The illustrative product interfaces inside the project cards |
| `src/index.css` | Colors, spacing, animations, typography, and responsive styles |
| `public/images/profile.jpg` | Your portrait (replace the included demo) |
| `public/favicon.svg` | Browser tab icon |
| `index.html` | Browser title and search/social description |
| `src/components/ui/` | Button, project dialog, and mobile menu components |
| `vite.config.ts` | Local server and build configuration |

The email is `rajeshpradhan9099@gmail.com` and the GitHub URL is `https://github.com/rajesh-kumar-pradhan`. Both can be edited in `src/profile.ts`.

### Add your own photo — two simple changes

1. Replace **public/images/profile.jpg** with your own JPG picture using exactly the same filename. A portrait around 800 × 1000 pixels works well. Keep your full head and shoulders visible.
2. In **src/profile.ts**, change:

```ts
demoPhoto: false,
```

This removes the visible “DEMO PORTRAIT” badge and uses your name for the image's accessible description. No JSX or layout changes are needed.

If your photo is PNG or WebP, keep its real extension and update the `photo` path in `src/profile.ts`, for example `photo: "/images/raj.png"`. If you accidentally remove the photo, the page falls back to an RP monogram.

The included portrait depicts a fictional person generated for this demo. It is not a photo of Raj.

### Change colors, buttons, and the grid

The shared palette is at the top of `src/index.css` under `:root`.

- `.sculpted-button`, `.button-primary`, and `.button-secondary` control the buttons.
- `.project-grid`, `.project-card`, and `.preview-button` control the project layout.
- `.portrait-card` and `.profile-photo` control photo size and crop.
- The media queries handle tablet and phone layouts.
- Motion respects the visitor's reduced-motion preference.

Project previews are illustrative interface concepts. The case studies describe the existing projects and their current limitations; the portfolio does not contain their full application backends.

## Commands

| Command | Result |
| --- | --- |
| `npm install` | Installs the project dependencies |
| `npm run dev` | Starts the development server and opens your browser |
| `npm run build` | Checks TypeScript and creates the deployable `dist` folder |
| `npm run preview` | Serves the built `dist` folder and opens your browser |
| `npm run typecheck` | Checks TypeScript without building |

The npm lockfile is included for reproducible installs. Dependency folders are intentionally excluded from the ZIP and created by `npm install`. Third-party package licenses remain with their packages; the vendored shadcn CSS license is in `vendor/`.
