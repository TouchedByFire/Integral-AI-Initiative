---
name: Integral AI Initiative
version: 1.0.0
author: Antigravity AI
description: A premium, atmospheric design system for an AI-focused academic initiative, blending glassmorphism with high-tech professionalism.

tokens:
  colors:
    background:
      base: "#f5f9ff" # Cool, light blue-grey base
      surface: "rgba(255, 255, 255, 0.78)" # Semi-transparent glass surface
      surface-light: "rgba(229, 242, 255, 0.92)" # Lighter, more opaque surface for emphasis
      header: "rgba(248, 252, 255, 0.84)" # Specific header background for visibility
      footer: "rgba(236, 247, 255, 0.82)" # Subtle tint for the footer area

    brand:
      primary: "#1167d8" # Deep, trustworthy blue
      primary-glow: "rgba(17, 103, 216, 0.24)" # Low-opacity glow for accents
      secondary: "#18a5c9" # Vibrant cyan/teal
      accent: "#5b5ce2" # Modern violet accent
      gold: "#fbbf24" # Used for trophies and achievements

    text:
      main: "#142033" # Near-black blue for high legibility
      muted: "#5e6b7f" # Soft grey-blue for secondary information
      white: "#ffffff" # Pure white for dark backgrounds/buttons

    border:
      default: "rgba(42, 86, 132, 0.14)" # Subtle, non-intrusive border
      highlight: "rgba(17, 103, 216, 0.32)" # Active or focused border state

    gradients:
      text: "linear-gradient(135deg, #0b55c4, #16a7c8 48%, #655ce7)"
      button: "linear-gradient(135deg, #1167d8, #18a5c9)"
      hero-overlay: "radial-gradient(circle at 50% 46%, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.18) 34%, rgba(255, 255, 255, 0.02) 62%)"
      body-radial-1: "radial-gradient(circle at 15% 25%, rgba(24, 165, 201, 0.18), transparent 24%)"
      body-radial-2: "radial-gradient(circle at 85% 20%, rgba(91, 92, 226, 0.14), transparent 25%)"

  typography:
    fonts:
      sans: "'Inter', sans-serif" # Geometric sans-serif for UI and body text
      display: "'Outfit', sans-serif" # High-character display font for headings

    weights:
      light: 300
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
      black: 800

    sizes:
      hero-title: "clamp(3rem, 5vw, 5rem)" # Responsive hero heading
      section-title: "2.5rem"
      card-title: "1.5rem"
      body-large: "1.25rem"
      body-base: "1rem"
      caption: "0.75rem"

    line-heights:
      tight: 1.2 # Headings
      relaxed: 1.6 # Body text
      loose: 1.8 # Extended reading areas

  spacing:
    section-y: "4rem"
    section-x: "2rem"
    hero-y: "8rem"
    grid-gap: "1.5rem"
    container-max: "1200px"
    nav-max: "1800px"

  radii:
    default: "16px" # Standard card and panel radius
    large: "24px" # Hero content and major sections
    small: "8px" # Buttons and navigation items
    pill: "20px" # Badges and search bar

  shadows:
    glow: "0 18px 45px rgba(17, 103, 216, 0.14)"
    glass: "0 18px 50px rgba(31, 71, 112, 0.12)"
    hero: "0 24px 70px rgba(20, 43, 74, 0.12)"
    search: "0 8px 32px rgba(0,0,0,0.25)"

  motion:
    durations:
      fast: "0.2s"
      standard: "0.3s"
      slow: "0.5s"
      entrance: "1.5s"
    
    physics:
      spring-default: "stiffness: 50, damping: 15"
      spring-nav: "stiffness: 100, damping: 20"
      spring-search: "duration: 0.18"

  effects:
    glass-blur: "12px"
    header-blur: "16px"
    bento-hover-scale: 1.05
    button-hover-y: "-2px"
    cyber-grid-opacity: 0.05

---

# Integral AI Initiative: Design System

The Integral AI Initiative design system is built to reflect the intersection of high-level academic research and cutting-edge artificial intelligence. It prioritizes **clarity**, **atmosphere**, and **modern professionalism**.

## Design Ethos

The visual identity is defined by a sense of "digital air"—an open, breathable space filled with light and depth. This is achieved through a layering strategy that uses glassmorphism to separate content from a dynamic, ambient background.

### 1. Atmosphere & Depth
Instead of flat surfaces, the UI utilizes a system of **Glass Panels**. These panels use high levels of background blur (`12px` to `16px`) and subtle semi-transparency. This creates a layered effect where the background gradients of the site peek through, giving the interface a sense of life and motion even when the user is stationary.

- **The Base Layer**: A subtle blend of light blue-grey with large, soft radial gradients in cyan and violet.
- **The Content Layer**: Glass panels with soft shadows and thin, high-contrast borders that define edges without adding visual weight.
- **The Interactive Layer**: Vibrant primary-to-secondary gradients that draw the eye to calls-to-action.
- **Card Tinting System**: Specific sections use tinted glass panels (`--primary`, `--secondary`, `--accent`, `--gold`) to create visual hierarchy and thematic differentiation.
- **The AI Atmosphere**: Global background grid (Cyber Grid) that reinforces the theme of machine intelligence and systematic analysis.
- **Floating Data**: Subtle particle animations representing the fluid movement of information.

### 2. Typography Strategy
The system employs a dual-font strategy to balance technical precision with human-centric innovation:
- **Outfit (Headings)**: A display font with a unique character. Used in its heaviest weight (800) for headings to provide a strong, authoritative voice.
- **Inter (UI & Body)**: A clean, geometric sans-serif that ensures maximum legibility across all device types and font sizes.

### 3. Color Logic
The palette is rooted in **Academic Blue** (`#1167d8`), representing stability and tradition. This is augmented by **Innovation Cyan** (`#18a5c9`) and **Intelligence Violet** (`#5b5ce2`), which are used in gradients to symbolize the dynamic nature of AI.

- **Primary Gradients**: Always follow a 135-degree angle, moving from deep blue to vibrant cyan.
- **Micro-Accents**: Primary-glow backgrounds are used behind icons and badges to provide a soft focal point without overwhelming the content.

### 4. Motion & Interaction
Motion is used to guide the user's focus and provide feedback:
- **Entrances**: Content fades and slides upwards using spring physics, making the UI feel responsive and organic rather than mechanical.
- **Hovers**: Interactive elements like bento-grid items and buttons utilize scale (`1.05x`) and subtle vertical translations to "lift" towards the user.
- **Smooth Navigation**: Page transitions and internal links use smooth-scroll behaviors to maintain spatial awareness.

### 5. Layout Patterns
- **The Bento Grid**: Used for complex information architectures, providing a modular, organized way to display highlights, features, and achievements.
- **The Immersive Hero**: Large-scale imagery combined with a glassmorphic content card and centered typography creates a high-impact first impression.
- **Fluid Connectivity**: Wide navigation containers and responsive padding ensure the initiative's content feels expansive on desktops while remaining accessible on mobile devices.
