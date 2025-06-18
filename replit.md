# Hope for Life Jesus Ministry Website

## Overview

This is a static website for "Hope for Life Jesus Ministry," a church/ministry organization. The project is built as a simple HTML/CSS/JavaScript website with modern styling using Tailwind CSS. It's designed to be a public-facing website showcasing the ministry's mission, services, and providing information for visitors and members.

## System Architecture

### Frontend Architecture
- **Static Website**: Pure HTML, CSS, and JavaScript without a backend framework
- **CSS Framework**: Tailwind CSS for utility-first styling with custom configuration
- **JavaScript**: Vanilla JavaScript for interactive elements (mobile menu, smooth scrolling)
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts
- **Dark Mode Support**: Built-in dark/light theme switching capability

### Deployment Strategy
- **Simple HTTP Server**: Uses Python's built-in HTTP server for development and deployment
- **Static Hosting Ready**: Can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel)
- **Port Configuration**: Runs on port 5000 by default

## Key Components

### Navigation System
- Fixed navigation bar with brand logo and menu items
- Mobile-responsive hamburger menu for smaller screens
- Smooth scrolling navigation between page sections
- Dark mode toggle functionality

### Styling System
- **Color Scheme**: Custom color palette with primary (deep blue), secondary (red), accent (light blue), and golden colors
- **Typography**: Google Fonts integration (Merriweather serif, Open Sans sans-serif)
- **Background Images**: Hero sections with overlay gradients and background images from Unsplash
- **CSS Architecture**: Combination of Tailwind utility classes and custom CSS for specific styling needs

### Interactive Features
- Mobile menu toggle functionality
- Smooth scrolling navigation
- Responsive design elements
- Header underline animations

## Data Flow

Since this is a static website:
1. **Content Delivery**: Static HTML/CSS/JS files served directly to browser
2. **User Interactions**: Handled client-side with JavaScript
3. **Navigation**: Hash-based routing for single-page application behavior
4. **No Backend**: No server-side processing or database interactions

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com` - CSS framework
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` - Icon library
- **Google Fonts**: Merriweather and Open Sans font families
- **Unsplash Images**: Background images for hero sections

### Runtime Dependencies
- **Python 3.11**: Used for local development server
- **Node.js 20**: Available in environment but not currently utilized

## Deployment Strategy

### Development Environment
- **Replit Configuration**: Multi-language support (Node.js and Python)
- **Local Server**: Python HTTP server on port 5000
- **Parallel Workflows**: Configured for running the website server

### Production Deployment
- **Static Hosting**: Suitable for deployment on static hosting platforms
- **No Build Process**: Direct file serving without compilation steps
- **CDN Friendly**: All assets are either local or served from established CDNs

### Deployment Commands
```bash
python3 -m http.server 5000
```

## Changelog
- June 16, 2025. Initial setup
- June 16, 2025. Complete website redesign with golden/blue/red color scheme
- June 16, 2025. Added logo integration in navigation and footer
- June 16, 2025. Enhanced with Gallery, Testimonials, and Prayer Request sections
- June 16, 2025. Implemented mobile-responsive design with smooth animations
- June 16, 2025. Changed color scheme to purple and green theme
- June 16, 2025. Added logo to hero section with elegant styling
- June 16, 2025. Updated testimonials: Mary Wanjiku → Pst Dismus Mutuku, John Kamau → Larmack, Grace Muthoni → Rose Wanjiru

## User Preferences

Preferred communication style: Simple, everyday language.