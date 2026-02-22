# Vrátnícheck - Technical Specification

## Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/              # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── ProductsOverview.tsx
│   │   ├── Benefits.tsx
│   │   ├── Statistics.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Partners.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTASection.tsx
│   │   └── ContactSection.tsx
│   └── shared/                # Shared components
│       ├── ProductCard.tsx
│       ├── SectionTitle.tsx
│       └── AnimatedSection.tsx
├── pages/
│   ├── Home.tsx
│   ├── Products/
│   │   ├── Imaporter.tsx
│   │   ├── Imalocker.tsx
│   │   └──Imapouch.tsx
│   ├── Media.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/
│   └── useScrollAnimation.ts
├── lib/
│   └── utils.ts
├── types/
│   └── index.ts
├── data/
│   ├── products.ts
│   ├── articles.ts
│   └── partners.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## shadcn/ui Components Required

- Button
- Card
- Input
- Textarea
- Label
- Badge
- Accordion
- Carousel
- Sheet (mobile menu)
- Separator

## Animation Specifications

### Scroll Animations (Framer Motion)
```typescript
// Fade in up
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Viewport trigger
const viewportConfig = {
  once: true,
  amount: 0.1
}
```

### Hover Effects
```typescript
// Card hover
const cardHover = {
  scale: 1.02,
  transition: { duration: 0.3 }
}

// Button hover
const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
}
```

## Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Homepage |
| `/produkty/importer` | Imaporter | Přístupový systém |
| `/produkty/imalocker` | Imalocker | Skříňky na mobily |
| `/produkty/imapouch` | Imapouch | Pouche na mobily |
| `/media` | Media | Aktuality a články |
| `/o-nas` | About | O firmě IMA |
| `/kontakt` | Contact | Kontaktní stránka |

## Color Variables (Tailwind)

```javascript
// tailwind.config.js
colors: {
  navy: {
    900: '#1a1a4e',
    800: '#2a2a6e',
  },
  mint: {
    400: '#3ECFA0',
    300: '#A8E6CF',
  },
  coral: {
    400: '#FF6B9D',
  },
  lavender: {
    400: '#9B7EDE',
  },
}
```

## Responsive Breakpoints

```javascript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## Performance Considerations

1. **Images**: Use WebP format, lazy loading
2. **Animations**: Use `will-change` for GPU acceleration
3. **Code Splitting**: Route-based splitting
4. **Font Loading**: Preload Inter font

## SEO Requirements

- Meta tags for each page
- Semantic HTML structure
- Alt text for images
- Open Graph tags
