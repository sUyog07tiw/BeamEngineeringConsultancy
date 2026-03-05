# BEAM Engineering Consultancy - UI/UX Design System 2026

## Overview
A modern, professional design system for an engineering & construction consultancy that embodies trust, precision, and excellence.

---

## 1. Color Palette

### Primary Colors
```
Deep Navy (Primary):     #0A1628 - Headers, primary text, trust & authority
Midnight Blue:           #14213D - Secondary headers, depth
Royal Blue (Accent):     #2563EB - CTAs, links, interactive elements
Electric Blue:           #3B82F6 - Hover states, highlights
```

### Secondary Colors
```
Warm Cream:              #F8F6F1 - Background, warmth
Light Gray:              #F1F5F9 - Card backgrounds
Cool Gray:               #64748B - Body text
Slate:                   #334155 - Secondary text
```

### Accent Colors
```
Gold:                    #D4AF37 - Premium highlights, accents
Amber Glow:              #F59E0B - Warm CTAs (alternative)
Success Green:           #10B981 - Positive indicators
```

### Gradient System
```css
/* Hero Gradient - Soft navy to blue */
background: linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #2563EB 100%);

/* Premium Gradient - Gold accent */
background: linear-gradient(135deg, #D4AF37 0%, #F59E0B 100%);

/* Soft Overlay */
background: linear-gradient(180deg, rgba(10,22,40,0.9) 0%, rgba(37,99,235,0.7) 100%);

/* Card Gradient */
background: linear-gradient(145deg, #FFFFFF 0%, #F8F6F1 100%);
```

---

## 2. Typography Pairing

### Font Stack
```css
/* Headings - Sophisticated & Modern */
font-family: 'Playfair Display', 'Georgia', serif;

/* Sub-headings - Clean & Professional */
font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;

/* Body - Highly Readable */
font-family: 'Inter', 'Roboto', sans-serif;
```

### Type Scale (Fluid Typography)
```
Display:     clamp(3.5rem, 8vw, 7rem)    - Hero headlines
H1:          clamp(2.5rem, 5vw, 4.5rem)  - Section titles
H2:          clamp(2rem, 4vw, 3.5rem)    - Sub-section titles
H3:          clamp(1.5rem, 3vw, 2rem)    - Card titles
H4:          clamp(1.25rem, 2vw, 1.5rem) - Smaller headings
Body:        1rem (16px)                  - Paragraphs
Small:       0.875rem                     - Captions, labels
Micro:       0.75rem                      - Fine print
```

### Letter Spacing
```
Headings:    0.05em to 0.15em (tracking-wider to tracking-widest)
Body:        0.01em (tracking-tight)
CTA/Buttons: 0.1em to 0.2em (uppercase)
```

---

## 3. Layout Structure

### Grid System
```
Container:   max-w-7xl (1280px)
Gutters:     px-6 (mobile) → px-8 (tablet) → px-12 (desktop)
Columns:     12-column with 32px gutters
```

### Section Spacing
```
Hero:        min-h-screen (100vh)
Sections:    py-24 (96px) → py-32 (128px) large screens
Cards:       gap-8 (32px) → gap-12 (48px)
```

### Breakpoints
```
sm:  640px   - Mobile landscape
md:  768px   - Tablet
lg:  1024px  - Small desktop
xl:  1280px  - Desktop
2xl: 1536px  - Large desktop
```

---

## 4. Section Breakdown

### Homepage Structure
1. **Hero** - Full-screen with gradient overlay, animated text reveal
2. **Stats Bar** - Animated counters with glass-morphism effect
3. **Featured Projects** - Asymmetric grid with hover reveals
4. **Services Grid** - Icon-led cards with subtle animations
5. **Testimonials** - Full-width carousel
6. **CTA Section** - Split design with image
7. **Footer** - Multi-column with newsletter

### Visual Flow
```
Hero → Trust Indicators (Stats) → Portfolio Proof → Services → Social Proof → CTA → Footer
```

---

## 5. UI Components

### Buttons
```jsx
// Primary CTA
<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 
                   text-white font-medium tracking-wider rounded-full
                   shadow-lg shadow-blue-500/25 hover:shadow-xl 
                   hover:shadow-blue-500/40 transition-all duration-300
                   hover:-translate-y-0.5">

// Secondary/Ghost
<button className="px-8 py-4 border-2 border-navy-900 text-navy-900
                   rounded-full font-medium tracking-wider
                   hover:bg-navy-900 hover:text-white transition-all duration-300">

// Premium Gold
<button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400
                   text-navy-900 font-semibold rounded-full shadow-lg">
```

### Cards
```jsx
// Project Card
<div className="group relative overflow-hidden rounded-2xl bg-white
                shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="aspect-[4/3] overflow-hidden">
    <img className="object-cover w-full h-full 
                    group-hover:scale-110 transition-transform duration-700" />
  </div>
  <div className="p-8">
    <h3 className="text-2xl font-serif text-navy-900">Title</h3>
    <p className="text-slate-600 mt-2">Description</p>
  </div>
</div>

// Service Card
<div className="group p-10 bg-gradient-to-br from-white to-cream-50
                rounded-2xl border border-slate-100 
                hover:border-blue-200 hover:shadow-xl
                transition-all duration-300">
  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center
                  group-hover:bg-blue-500 transition-colors duration-300">
    <Icon className="w-7 h-7 text-blue-500 group-hover:text-white" />
  </div>
  <h3 className="mt-6 text-xl font-semibold text-navy-900">{title}</h3>
  <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
</div>
```

### Navigation
```jsx
// Glass-morphism navbar
<nav className="fixed top-0 w-full z-50 
                bg-white/80 backdrop-blur-xl border-b border-slate-200/50
                shadow-sm transition-all duration-300">
```

---

## 6. Animation Guidelines

### Micro-interactions
```css
/* Hover lift */
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Subtle scale */
.hover-scale:hover {
  transform: scale(1.02);
}

/* Link underline reveal */
.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}
.link-underline:hover::after {
  width: 100%;
}
```

### Page Transitions
```css
/* Fade up on scroll */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Stagger children */
.stagger-children > * {
  animation: fadeUp 0.6s ease forwards;
}
.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
```

### Hero Animations
```css
/* Text reveal */
@keyframes textReveal {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Parallax subtle */
@keyframes parallaxFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

---

## 7. Visual Hierarchy

### Emphasis Levels
```
Level 1 (Highest):  Display text, Hero CTAs
Level 2:            Section headings, Primary buttons
Level 3:            Sub-headings, Card titles
Level 4:            Body text, Descriptions
Level 5 (Lowest):   Meta info, Timestamps, Fine print
```

### Contrast & Focus
- Primary actions: High contrast (solid backgrounds)
- Secondary actions: Medium contrast (outlined/ghost)
- Tertiary actions: Low contrast (text links)

---

## 8. CTA Placement Strategy

### Primary CTAs
- Hero: Center-bottom, above fold
- Section end: Centered after content
- Floating: Sticky bottom on mobile
- Exit-intent: Modal trigger

### CTA Hierarchy
```
1. "Start Your Project" / "Get a Quote" - Primary action
2. "View Our Work" / "Learn More" - Exploration
3. "Contact Us" / "Call Now" - Direct contact
```

### Placement Rules
- One primary CTA per viewport
- Secondary CTAs support discovery
- Mobile: Thumb-zone friendly positioning
- Repeat CTAs every 2-3 sections

---

## 9. Spacing Tokens

```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 0.75rem;  /* 12px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-2xl: 3rem;    /* 48px */
  --space-3xl: 4rem;    /* 64px */
  --space-4xl: 6rem;    /* 96px */
  --space-5xl: 8rem;    /* 128px */
}
```

---

## 10. 2026 Design Trends Applied

### Soft Gradients
- Hero backgrounds with subtle color transitions
- Card backgrounds with micro-gradients
- CTA buttons with glow effects

### Bold Typography
- Oversized serif headlines for impact
- Ultra-light weights for elegance
- Mixed weight pairing (Bold + Light)

### Clean Whitespace
- Generous padding around content blocks
- Asymmetric layouts for visual interest
- Breathing room between elements

### Premium Corporate Feel
- Muted color palette with strategic accents
- Photography with consistent color grading
- Subtle textures and patterns

### Glass-morphism
- Frosted navbar
- Floating cards with blur
- Stats sections with transparency

### Micro-animations
- Scroll-triggered reveals
- Hover state transitions
- Loading state animations

---

## Implementation Checklist

- [ ] Update Tailwind config with new colors
- [ ] Add custom fonts (Playfair Display, Plus Jakarta Sans)
- [ ] Create reusable component library
- [ ] Implement scroll animations
- [ ] Add loading states
- [ ] Mobile-first responsive styles
- [ ] Dark mode consideration (future)
- [ ] Accessibility audit (contrast, focus states)
