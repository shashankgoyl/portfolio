# Shashank Goyal — 3D Portfolio

A cyberpunk-themed 3D portfolio site built with React + Three.js + Framer Motion.

---

## Tech Stack
- **React 18** + **Vite** — fast build tool
- **Three.js** + **@react-three/fiber** — 3D canvas (particle field, floating geometry)
- **Framer Motion** — scroll animations, micro-interactions
- **react-scroll** — smooth section navigation
- **Orbitron + Syne + JetBrains Mono** — custom fonts

---

## Local Setup

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm (comes with Node)

### Steps

```bash
# 1. Extract the zip and enter the folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Build for Production

```bash
npm run build
```

This creates a `dist/` folder with the production-ready files.

To preview the production build locally:
```bash
npm run preview
```

---

## Deploy to Netlify

### Option A — Netlify CLI (Recommended)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# From inside the portfolio folder:
netlify init
# Choose: Create & configure a new site
# Team: your team
# Site name: shashank-goyal-portfolio (or any name)

# Deploy!
netlify deploy --prod
```

### Option B — Netlify Drag & Drop (Easiest)

1. Run `npm run build` to create the `dist/` folder
2. Go to https://app.netlify.com/drop
3. Drag & drop the `dist/` folder onto the page
4. Your site is live instantly! ✅

### Option C — GitHub + Netlify Auto Deploy

1. Push this folder to a GitHub repo:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
3. Connect GitHub → Select your repo
4. Build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

Every future `git push` will auto-redeploy! 🚀

---

## Customize

| File | What to change |
|------|---------------|
| `src/components/Hero.jsx` | Name, tagline, social links |
| `src/components/About.jsx` | Bio, location, phone |
| `src/components/Skills.jsx` | Tech stack |
| `src/components/Experience.jsx` | Jobs, education |
| `src/components/Projects.jsx` | Project details & links |
| `src/components/Achievements.jsx` | Awards |
| `src/components/Contact.jsx` | Email, phone, socials |
| `src/index.css` | Colors (CSS variables at top) |

### Change colors
Edit `:root` in `src/index.css`:
```css
--accent: #00d4ff;     /* cyan */
--accent2: #7b2fff;    /* purple */
--accent3: #ff2d6b;    /* pink/red */
```

---

## File Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx          ← 3D Three.js scene
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── netlify.toml
└── .gitignore
```
