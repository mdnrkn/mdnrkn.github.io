# CLAUDE.md

This file is the working guide for this portfolio repository. It is tailored to my own project decisions and keeps the implementation clear, consistent, and lightweight.

## Project overview

This repository is a dependency-free personal portfolio built with semantic HTML, modern CSS, and small vanilla JavaScript enhancements.

The goal is to keep the site:
- fast and easy to maintain
- content-first and readable
- responsive across mobile and desktop
- visually consistent and accessible
- free from unnecessary frameworks or tooling

## Repository structure

- `CLAUDE.md` — project-specific guidance and standards for this portfolio.
- `index.html` — main portfolio page and content structure.
- `css/styles.css` — design tokens, layout, themes, and reusable component styles.
- `css/design-system.css` — design-system preview styling only.
- `js/main.js` — interactive behavior such as theme toggling and progressive enhancement.
- `sw.js` — offline caching for the app shell.
- `pages/design-system.html` — isolated preview page for visual system checks.
- `assets/` — local static assets only when they are verified and licensed for use.

## Core principles

### 1. Keep the site simple
- Prefer semantic HTML over complex abstractions.
- Use CSS variables for colors, spacing, typography, and motion.
- Keep JavaScript minimal and progressive.
- Avoid adding frameworks, build tools, or dependencies unless there is a real need.

### 2. Maintain visual consistency
- Reuse shared patterns instead of inventing one-off styles.
- Keep typography, spacing, borders, and colors aligned across sections.
- Ensure section rhythm remains consistent from header to footer.
- Check the design at mobile and desktop widths before finishing work.

### 3. Prioritize clarity and usability
- Keep the reading column narrow and comfortable.
- Preserve accessible semantics and keyboard focus states.
- Respect reduced-motion preferences.
- Favor readable text, good contrast, and stable spacing.

## Design direction

This portfolio should feel:
- minimal and intentional
- polished but restrained
- neutral, calm, and modern
- content-led rather than decorative

Use a compact identity header, a narrow content column, modular sections, and subtle interactive details only where they improve usability.

## Styling rules

### Layout
- Keep a single narrow reading column with balanced spacing.
- Use a light and dark theme with a neutral palette.
- Maintain consistent vertical rhythm between sections.
- Avoid large hero banners, heavy gradients, or decorative clutter.

### Typography
- Prefer a modern sans-serif font with a clean, neutral tone.
- Keep the type scale consistent and compact.
- Use section labels sparingly and clearly.
- Do not overuse oversized display typography.

### Color system
- Use CSS custom properties for all color decisions.
- Keep the palette mostly neutral.
- Reserve accent colors for small highlights and status cues only.
- Ensure strong contrast in both themes.

### Components
- Reuse shared list-row patterns for experience, writing, research, and education items.
- Keep project cards visually consistent and easy to scan.
- Treat links and buttons as accessible interactive elements with clear focus states.
- Avoid unnecessary visual noise in hover states.

## Interaction and accessibility

- Use semantic landmarks and meaningful heading structure.
- Keep all interactive elements keyboard reachable.
- Show clear focus styles in both light and dark themes.
- Prefer progressive enhancement over heavy client-side logic.
- Do not rely on color alone to communicate meaning.
- Respect `prefers-reduced-motion` and avoid distracting animation.

## Content workflow

When adding or changing site content:
1. Confirm the actual content intent before styling.
2. Keep the structure consistent with the rest of the portfolio.
3. Reuse existing patterns for metadata, rows, and sections.
4. Make sure mobile and desktop layouts still read cleanly.
5. Update this guide only when a project decision legitimately changes.

## Commands

There is no build system or package manifest in this repository yet.

Use a simple static preview when needed:

```text
py -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Working rules

- Keep the repo lightweight and dependency-free unless requirements demand otherwise.
- Preserve small, focused JavaScript behavior in `js/main.js`.
- Keep offline caching logic in `sw.js`.
- Do not add framework conventions for a static site.
- Keep assets local and verified before using them.
- If a design decision is intentional, document it here instead of scattering notes across unrelated files.

## Final reminder

This file is the project’s source of truth for implementation standards. It reflects my own creation and direction for this portfolio, not borrowed reference material.
