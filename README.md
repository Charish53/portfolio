# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, featuring beautiful animations, smooth scrolling, and a professional design.

## Features

- 🎨 **Modern Design** - Clean, professional UI with gradient accents
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎭 **Smooth Animations** - Engaging transitions and hover effects
- 🧭 **Smooth Scrolling** - Seamless navigation between sections
- 📧 **Contact Form** - Interactive contact form for inquiries
- 🎯 **SEO Friendly** - Optimized meta tags and semantic HTML

## Sections

1. **Hero** - Eye-catching introduction with animated typing effect
2. **About** - Personal information and key features
3. **Skills** - Technology stack with progress bars
4. **Projects** - Showcase of featured projects with links
5. **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update personal description
   - Modify statistics (projects, experience, clients)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels (percentages)

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your own
   - Update project images, descriptions, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Modify social media links
   - Connect form to your backend (currently just shows success message)

### Styling

- Global styles: `src/index.css`
- Component styles: Individual CSS files in `src/components/`
- Color scheme: Modify CSS variables in `src/index.css`

### Colors

The default color scheme uses:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)

You can customize these in the `:root` variables in `src/index.css`.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React

