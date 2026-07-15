# Kitinun Khonson - Interactive Personal Portfolio 🚀

Welcome to the repository of my personal portfolio and interactive resume! This project is designed to be highly aesthetic, interactive, and functional, showcasing my skills as a developer and my professional journey.

## ✨ Features

- **Modern UI/UX**: Designed with a sleek, glassmorphic aesthetic featuring an "Aurora Borealis" mesh gradient background and noise texture.
- **Interactive Animations**: Powered by `framer-motion` and `react-parallax-tilt` for smooth page transitions, staggered text reveals, magnetic navigation pills, and 3D tilting project cards.
- **Bilingual Support**: Full support for both English (EN) and Thai (TH) seamlessly managed via Context API.
- **Dark & Light Mode**: A beautifully implemented dark mode that adjusts gradients and UI elements dynamically.
- **Command Palette**: Press `Cmd+K` (or `Ctrl+K`) to open a global command palette (built with `cmdk`) to navigate the site instantly.
- **Integrated Resume**: View and download my professional CV directly through an interactive modal.
- **Fun Micro-interactions**: Features like a confetti blast when copying the contact email, custom cursors, and an interactive "macOS terminal" About section.

## 🛠️ Tech Stack

- **Framework**: React 18 (via Vite)
- **Styling**: Tailwind CSS + Custom CSS Keyframes
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Effects**: 
  - `canvas-confetti` (Email interaction)
  - `react-parallax-tilt` (3D Card Glare)
  - `tsparticles` (Particle background effects)
- **Command Menu**: `cmdk`

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Resume-Gun
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View in browser**
   Open `http://localhost:5174/` (or the port specified by Vite) in your browser.

## 📂 Project Structure

- `src/components/sections/`: Contains the main sections of the website (Hero, About, Experience, Projects, Hobbies, Contact).
- `src/components/ui/`: Reusable UI components (Navbar, CustomCursor, HackerText, etc.).
- `src/components/widgets/`: Specific interactive widgets (CommandPalette, SpotifyWidget, etc.).
- `src/contexts/`: React Contexts for global state management (LanguageContext).
- `src/index.css`: Global styles, custom scrollbars, and complex keyframe animations for the background gradients.

## 📝 License

This project is created for personal portfolio purposes. Feel free to use it as inspiration!
