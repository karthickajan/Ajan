# Portfolio App - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a professional Angular portfolio application that replicates the EXACT design and functionality of https://www.sunnypatel.net/. The goal is to create an identical user experience with the same layout, styling, interactions, and features.

**Target Repository**: https://github.com/sunnypatell/react-threejs-portfolio  
**Reference Website**: https://www.sunnypatel.net/  
**Development Note: Always use port 4200 for testing (`ng serve --port 4200`)**

## Design Reference - Sunny Patel's Portfolio
**PRIMARY GOAL: Create an exact replica of https://www.sunnypatel.net/**

### Key Design Elements to Replicate:
- **Hero Section**: "Hi, I'm [Name] 👋" with animated waving hand emoji
- **Navigation**: Clean, minimal navigation with smooth scrolling
- **Typography**: Modern, clean fonts with proper hierarchy
- **Color Scheme**: Professional blue/gray color palette
- **Layout**: Single-page application with smooth scroll sections
- **Sections**: Overview, Education, Work Experience, Certifications, Skills, Projects, Contact
- **Interactive Elements**: Hover effects, smooth animations, responsive design
- **Project Cards**: Clean project showcase with images, descriptions, and tech tags
- **Contact Form**: Functional contact form with reCAPTCHA
- **Mobile Responsive**: Optimized for all device sizes

### Specific UI/UX Features to Match:
- Smooth scroll navigation between sections
- Professional profile image placement
- Company logos in work experience
- Certification badges with images
- Skills organized by categories (programming, IT tools, content production)
- Project showcase with live links and GitHub links
- Clean, minimalist footer
- Professional color transitions and hover states

## Architecture Guidelines
- Use Angular 17 with standalone components where appropriate
- Implement responsive design with mobile-first approach
- Use Angular Material ONLY if it matches the reference design
- Apply clean architecture with feature modules
- Implement lazy loading for optimal performance
- Use TypeScript strictly with proper typing
- Follow Angular style guide and best practices

## Code Standards
- Use reactive forms over template-driven forms
- Implement proper error handling and loading states
- Use OnPush change detection strategy where possible
- Implement proper accessibility (a11y) standards
- Use semantic HTML and proper ARIA labels
- Write unit tests for all components and services

## Design Principles
- **EXACT REPLICA**: The design must match https://www.sunnypatel.net/ pixel-perfect
- Modern, clean, and minimalist design identical to reference
- Smooth animations and micro-interactions as shown in reference
- Professional color scheme matching the reference site
- Performance optimization with lazy loading and code splitting
- Mobile-responsive design matching reference behavior

## Features to Include (Based on Reference Site)
- Hero section with "Hi, I'm [Name] 👋" and animated introduction
- Overview section with profile image and professional summary
- Education section with timeline format
- Work Experience section with company logos and detailed descriptions
- Certifications section with badge images and credentials
- Skills section organized by categories with visual indicators
- Projects showcase with:
  - Project images/screenshots
  - Detailed descriptions
  - Technology tags
  - Live project links
  - GitHub source code links
- Contact form with:
  - Name, Email, Message fields
  - reCAPTCHA integration
  - Professional styling
- Smooth scroll navigation between sections
- Professional footer with social links

## Technical Stack
- Angular 17 with TypeScript
- SCSS for styling to match reference design exactly
- Angular Animations for smooth transitions (matching reference)
- Responsive design framework
- Contact form integration
- Smooth scrolling implementation

## Color Palette (Based on Reference)
- Primary: Professional blue tones
- Secondary: Gray/neutral tones
- Accent: Subtle highlights
- Background: Clean white/light gray
- Text: Dark gray for readability

## Typography (Based on Reference)
- Clean, modern sans-serif fonts
- Proper font weights and sizes
- Professional hierarchy
- Readable line spacing

## CRITICAL: Every design decision must reference and match https://www.sunnypatel.net/ exactly.
