# Srihari S. — Personal Developer Portfolio

A premium, visually distinctive, fully responsive personal developer portfolio website designed with a **Black and Red Cinematic Developer aesthetic**. Built with React, Vite, TypeScript, Tailwind CSS, Three.js, React Three Fiber, and GSAP.

---

## ⚡ Tech Stack

- **Core Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling & Design System**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [GSAP](https://greensock.com/gsap/) + [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Key Features & Sections

1. **Cinematic Loading Screen**: Large statement typography (*"BUILDING IDEAS INTO REALITY."*) with smooth progress transition.
2. **Minimalist Navigation**: Sticky header with smooth scrolling, active section tracking, and mobile drawer menu.
3. **Cinematic Hero**: Dominant typography, interactive 3D metallic geometric core that tracks mouse movement, and ambient dust particles.
4. **About Me**: Narrative of developer philosophy, academic background at Sri Krishna College of Technology (B.E. CSE), and core engineering pillars.
5. **Technology Arsenal**: Categorized interactive technology matrix (Languages, Frontend, Backend, Databases, AI/CV, and Dev Tools) with zero arbitrary percentages.
6. **Featured Projects**: Showcase of 5 core projects with domain-specific architecture visuals:
   - **AgroPlay**: AI-Powered Context-Aware Farming (React, Node, PostgreSQL, Gemini API)
   - **Avianguard**: Autonomous Bird Repellent System (Python, OpenCV, ESP32, Raspberry Pi)
   - **NutriDairy (CattleFeedAI)**: Silage & Feed Quality Assessment (React, Spring Boot, Flask)
   - **Quiz Management Application**: RESTful Assessment Engine (Java, Spring Boot, MySQL)
   - **Customer Shopping Behavior Analysis**: Retail Analytics (Python, SQL, Power BI)
7. **Experience**: Industry internship timeline at Knite Infotech.
8. **Achievements**: Competitive hackathon awards (1st Place Dhruva '26 Hackathon, SIH Top 500).
9. **Contact & Socials**: Direct email mailto with copy-to-clipboard, phone call link, resume link, and social profiles.

---

## 🛠️ Local Development

### Prerequisites

- Node.js (v18+ or v20+)
- pnpm (or npm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Srihari-Asus/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
pnpm install
```

### Running the Development Server

```bash
pnpm run dev
```

Visit `http://localhost:3000` to view the application.

### Building for Production

```bash
pnpm run build
```

The production assets will be generated in the `dist/` directory.

### Previewing Production Build

```bash
pnpm run preview
```

---

## 🌐 Deployment on Vercel

The project includes a ready-to-use [`vercel.json`](./vercel.json) configuration for instant deployment on Vercel.

### Deploying via Vercel Dashboard

1. Push this repository to your GitHub account (`Srihari-Asus`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `pnpm run build` (or `npm run build`).
6. Output Directory: `dist`.
7. Click **"Deploy"**.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── profile/
│       │   └── portrait-silhouette.svg
│       └── projects/
│           ├── agroplay.svg
│           ├── avianguard.svg
│           ├── nutridairy.svg
│           ├── quiz-management.svg
│           └── shopping-behavior.svg
├── src/
│   ├── components/
│   │   ├── three/
│   │   │   ├── HeroScene.tsx
│   │   │   └── ParticleField.tsx
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Loader.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolio.ts         # Centralized portfolio data
│   ├── hooks/
│   │   └── useGSAPAnimations.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## 📄 License

MIT License © 2026 Srihari S.
