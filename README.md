# Riya - Personal Portfolio Website

A modern, responsive personal portfolio website built with React + Vite, showcasing skills, projects, and experience.

## 🚀 Tech Stack

- **Framework:** React.js + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React + Custom SVGs
- **Font:** Inter (Google Fonts)

## ✨ Features

- 🌓 Dark/Light mode toggle (persists in localStorage)
- 📱 Fully responsive (mobile-first design)
- 🎯 Smooth scroll navigation with active section highlighting
- 🎬 Scroll-triggered animations with Intersection Observer
- 💼 Project showcase with hover effects
- 📊 Animated skill progress bars
- ⏳ Experience/education timeline
- 📬 Contact form (mailto integration)
- 🔝 Back-to-top button
- ♿ Accessible with ARIA labels and semantic HTML
- 🎨 Modern gradient design with glass morphism navbar

## 🛠️ Customization Guide

### 1. Personal Information

Edit `src/data/portfolioData.js` to update:
- Your name, tagline, email, phone, location
- Social media links (LinkedIn, GitHub)
- Bio paragraphs
- Education history
- Certifications
- Skills and proficiency levels
- Projects (title, description, tech stack, links, images)
- Experience timeline entries

### 2. Replace Profile Image

The hero section currently shows a gradient avatar with your initial letter. To add a real photo:
1. Add your image to `public/assets/` folder
2. Modify `src/components/Hero.jsx` - replace the avatar div with an `<img>` tag

### 3. Color Scheme

Edit `src/index.css` to change the `@theme` custom colors. The primary color is indigo (`#6366f1`). You can change:
- `--color-primary` - Main brand color
- `--color-primary-dark` - Darker variant
- `--color-primary-light` - Lighter variant
- `--color-accent` - Accent color

### 4. Add/Remove Sections

Edit `src/App.jsx` to add or remove section components. Each section component is in `src/components/`.

### 5. Update Resume

Place your resume PDF in `public/assets/` and update the `resumeUrl` in `portfolioData.js`.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/              # Images, resume PDF
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero/landing section
│   │   ├── About.jsx        # About me
│   │   ├── Skills.jsx       # Skills with progress bars
│   │   ├── Projects.jsx     # Project cards
│   │   ├── Experience.jsx   # Timeline
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer
│   │   └── BackToTop.jsx    # Scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js # All editable content
│   ├── App.jsx              # Main app with dark mode
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind + custom styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy (zero configuration needed)

### Netlify
1. Push code to GitHub
2. Import repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📄 License

This project is open source and free to use for your personal portfolio.

---

Built with ❤️ by Riya