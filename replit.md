# Lake Mauer Personal Landing Page

## Overview
A personal landing page for Lake Mauer, a Business Analytics & Information Systems student at the University of Iowa targeting early-career data roles in finance.

## Architecture
- **Type:** Static site (HTML5, CSS3, vanilla JS)
- **No framework, no backend, no database**
- Single `index.html` at the project root

## File Structure
```
/
├── index.html          # Main page
├── css/
│   └── stylesheet.css  # All styles
├── js/
│   └── scripts.js      # Nav highlight logic
├── images/
│   └── Headshot.jpeg   # Profile photo
├── PRD.md              # Product requirements
├── STANDARDS.md        # Design/technical standards
└── replit.md           # This file
```

## Design Standards
- Color palette: bg #F8F9FA, text #212529, accent #0D6E6E, section-bg #E9ECEF
- Font: Inter (Google Fonts)
- Max width: 800px centered
- Fully responsive from 320px+
- WCAG 2.2 Level AA accessibility

## Dev Server
- Command: `npx serve . -l 5000`
- Port: 5000
- Workflow: "Start application"

## Deployment
- Target: static
- publicDir: `.` (project root)
