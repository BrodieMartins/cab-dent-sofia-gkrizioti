# Implementation Plan: High-End Medical-Premium Overhaul

The goal is to transform the current "dark-tech" aesthetic into a "High-End Medical Boutique" experience. We will focus on luminosity, trust, and precision.

## 1. Design System Refresh
- **Color Palette**:
  - `Base`: Pure White (#FFFFFF) and Soft Azure (#F8FAFF).
  - `Primary`: Deep Navy (#0A1B4B) for authority.
  - `Accent`: Serene Blue (#2A7FFF) and Soft Gold (#C9A96E) for trust and premium feel.
  - `Surface`: Frosted Glass (backdrop-filter: blur).
- **Typography**:
  - `Headings`: Playfair Display (Serif) with increased tracking for a luxury feel.
  - `Body`: Inter (Sans) with 1.7 line-height for maximum readability.
- **Atmosphere**:
  - Subtitling "Digital Tech" with "Human Precision."
  - Using soft, diffuse shadows (box-shadow: 0 20px 40px rgba(0,0,0,0.05)).

## 2. Refactoring index.html (Styles & Structure)

### Phase A: Global Reset & Variables
- Invert the CSS `:root` variables.
- Implement a global "Micro-grain" overlay to add tactile depth to the light background.

### Phase B: Header & Hero Overhaul
- **Navbar**: Floating "Frosted Glass" island or sleek top-bar with a subtle border.
- **Hero**: Use a multi-layered background with soft gradients instead of dark blobs. Improve the Logo/Image display to feel integrated and professional.

### Phase C: Trust Bar & "Why Us"
- **Trust Bar**: Redesign as a "Floating Confidence Bar" with minimalist icons and high-clearance spacing.
- **Why Us**: Use a "Grid of Excellence" with soft-edged cards and elegant iconography.

### Phase D: Interactive Services Grid
- Replace dark cards with "Elevated White Cards" that use subtle hover states (lift + soft glow).

### Phase E: High-Trust Contact Form
- Focus on clarity and ease of use.
- Use a refined, minimalist form design that feels "boutique."

## 3. Visual Polish & Micro-interactions
- Implement a smoother "Scroll Reveal" logic.
- Add a "Grain" texture via CSS pseudo-element on `body`.
- Optimize SVG icons for a consistent, thin-stroke aesthetic (Lucide-style).

## 4. Execution Strategy
- We will modify the `<style>` block in `index.html` first.
- We will then ensure the HTML structure supports the new "airflow" (padding/margins).
