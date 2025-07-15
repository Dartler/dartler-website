# Dartler Website

A modern, responsive website for the Dartler darts ecosystem featuring both a standalone mobile app and a complete tournament management system.

## Project Structure

```
dartler-website/
├── index.html              # Main landing page
├── ecosystem.html           # Ecosystem features, pricing, and contact page
├── assets/
│   ├── css/
│   │   └── styles.css      # Shared CSS styles with Material Design 3 theming
│   └── js/
│       ├── main.js         # Main JavaScript functionality
│       └── components.js   # Shared components (optional)
├── locales/
│   ├── en.json            # English translations
│   ├── de.json            # German translations
│   └── README.md          # Localization documentation
└── privacy-policy/
    ├── en.html            # English privacy policy
    └── de.html            # German privacy policy
```

## Features

### Main Landing Page (`index.html`)
- Hero section with compelling value proposition
- Standalone app features showcase
- Ecosystem overview
- Responsive design with Material Design 3 components
- Multi-language support (EN/DE)

### Ecosystem Page (`ecosystem.html`)
- Detailed system architecture overview
- Comprehensive feature lists for all components
- Pricing section with three tiers (Free, Professional, Enterprise)
- Contact form and information
- Same design consistency as main page

### Shared Assets
- **CSS**: Material Design 3 color system, component styles, responsive design
- **JavaScript**: Language switching, form handling, smooth scrolling, header effects
- **Translations**: JSON-based localization system

## Design System

The website uses Google's Material Design 3 (M3) principles:

### Color Palette
- **Primary**: Orange (#f97316) - Main brand color
- **Secondary**: Green (#16a34a) - Success and secondary actions
- **Tertiary**: Indigo (#4f46e5) - Accent and special features
- **Surface**: Light grays for backgrounds and cards
- **Error**: Red for error states and validation

### Components
- **M3 Cards**: Elevated cards with proper shadows and hover effects
- **M3 Buttons**: Filled, outlined, and text button variants
- **Form Controls**: Consistent input styling with focus states
- **Typography**: Inter font family with proper hierarchy

## Multi-language Support

The website supports English and German:
- Automatic language detection based on browser settings
- Manual language switching with persistent storage
- All UI text is externalized to JSON files
- Proper document title and lang attribute updates

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts that adapt to screen size
- Touch-friendly interactive elements

## Development

### Adding New Content
1. Add new translation keys to both `locales/en.json` and `locales/de.json`
2. Use `data-lang-key` attributes in HTML for translatable content
3. Follow Material Design 3 component patterns for consistency

### Styling Guidelines
- Use CSS custom properties for colors (defined in `:root`)
- Follow the established class naming conventions (`m3-*`)
- Maintain consistent spacing using Tailwind's spacing scale
- Ensure proper contrast ratios for accessibility

### JavaScript Architecture
- Modular approach with separate files for different concerns
- Event-driven architecture for user interactions
- Async/await for translation loading
- Error handling for network requests

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features used (async/await, fetch, etc.)
- CSS Grid and Flexbox for layouts
- Progressive enhancement approach

## Performance Considerations

- External fonts loaded with `display=swap` for better loading performance
- CSS and JS assets are separate files for better caching
- Optimized images (placeholder URLs currently used)
- Minimal JavaScript dependencies (only Tailwind CSS CDN)

## Future Enhancements

- Add proper image assets
- Implement actual backend for contact form
- Add animation libraries for enhanced user experience
- Consider service worker for offline functionality
- Add analytics and tracking
- Implement proper SEO meta tags
