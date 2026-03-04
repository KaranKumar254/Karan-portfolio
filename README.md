# 🚀 Karan Kumar — Premium Developer Portfolio

A modern, premium developer portfolio website built with React (Vite), Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4-purple)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

---

## ✨ Features

- 🎨 **Ultra-Premium UI** — Glassmorphism, gradient lighting, soft shadows
- 🌌 **Interactive Particles** — Canvas-based animated particle background with mouse interaction
- 🖱️ **Custom Cursor** — Animated cursor with hover effects
- ⌨️ **Typing Animation** — Dynamic role-cycling text animation
- 🌙 **Dark/Light Mode** — Persistent theme toggle
- 📊 **Skill Visualization** — Animated skill bars with icons
- 🃏 **3D Project Cards** — Hover animations with tilt effects
- 📜 **Timeline Layout** — Experience & Education section
- 🏆 **Certifications** — Interactive certificate cards
- 📧 **EmailJS Contact** — Functional contact form
- 📱 **Fully Responsive** — Mobile, tablet, laptop, ultra-wide
- ⬆️ **Back to Top** — Smooth scroll-to-top button
- 📈 **Scroll Progress** — Progress bar indicator
- ⏳ **Loading Screen** — Animated loader with progress

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | React Icons |
| Scroll | React Scroll |
| Typing | React Type Animation |
| Email | EmailJS |
| Background | Custom Canvas Particles |

---

## 📁 Project Structure

```
karan-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here
├── src/
│   ├── animations/
│   │   └── variants.js     ← Framer Motion variants
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AnimatedCursor.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useScrollProgress.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser at http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration

### 1. EmailJS Setup (Contact Form)

Go to [emailjs.com](https://www.emailjs.com/), create an account and:

1. Create a new **Email Service**
2. Create a new **Email Template** with variables:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{user_message}}`
3. Get your `Service ID`, `Template ID`, and `Public Key`

Update `src/components/Contact.jsx`:
```js
await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // ← Replace
  'YOUR_TEMPLATE_ID',   // ← Replace
  formRef.current,
  'YOUR_PUBLIC_KEY'     // ← Replace
);
```

### 2. Add Your Profile Photo

Place your photo as `public/profile.jpg` and update `Hero.jsx`:
```jsx
// In Hero.jsx, replace the fallback avatar div with:
<img src="/profile.jpg" alt="Karan Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

### 3. Add Your Resume

Place your resume PDF as `public/resume.pdf`

### 4. Update Personal Info

Edit these files with your actual data:
- `src/components/Hero.jsx` — Name, title, social links
- `src/components/About.jsx` — Bio, personal facts
- `src/components/Skills.jsx` — Tech skills & levels
- `src/components/Projects.jsx` — Project details & GitHub links
- `src/components/Experience.jsx` — Education & experience
- `src/components/Certificates.jsx` — Certifications
- `src/components/Contact.jsx` — Contact info & social links
- `src/components/Footer.jsx` — Footer info

---

## 🎨 Customization

### Color Theme

Edit `tailwind.config.js` to change the color palette:
```js
colors: {
  primary: '#6C63FF',    // Purple accent
  secondary: '#00D9FF',  // Cyan accent
  accent: '#FF6584',     // Pink accent
}
```

Also update CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary: #6C63FF;
  --secondary: #00D9FF;
}
```

---

## 📱 Responsive Breakpoints

| Screen | Breakpoint |
|---|---|
| Mobile | `< 768px` |
| Tablet | `768px - 1024px` |
| Desktop | `> 1024px` |
| Ultra-wide | `> 1440px` |

---

## 📄 License

MIT License — feel free to use and customize!

---

## 🙌 Credits

Built with ❤️ by **Karan Kumar**  
GitHub: [@KaranKumar254](https://github.com/KaranKumar254)  
LinkedIn: [karan-kumar-282278301](https://www.linkedin.com/in/karan-kumar-282278301/)
