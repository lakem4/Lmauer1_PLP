# STANDARDS.md

## BAIS:3300 - Digital Product Management · Module 8 | Personal Landing Page Project

_This file contains technical instructions for this project. Every time you
begin a coding session, ask your LLM to read this file before writing any code.
The LLM will follow these standards automatically without you needing to repeat
them in every prompt._

_To start a session, paste this into your LLM:_  
_"Please read my STANDARDS.md file before we begin. I will be asking you to build
and modify my personal landing page."_

---

## 1. Project Overview

This site is a personal landing page for Lake Mauer, a Business Analytics & Information Systems student at the University of Iowa targeting early-career data roles in finance. It is designed for hiring managers and recruiters to quickly evaluate both technical skills and team fit. A successful outcome is generating interest from employers and leading to LinkedIn outreach after viewing the page.

---

## 2. Technical Standards

These rules apply to every file in this project without exception.

**Languages and versions:**

- HTML5 — use semantic elements throughout: `<header>`, `<main>`, `<section>`,
  `<article>`, `<footer>`, `<nav>`
- CSS3 — all styles must be written in `css/stylesheet.css`; no inline `style=""`
  attributes; no `<style>` tags in any HTML file
- HTML5 and CSS3 code must pass validation

**Folder structure:**

/your-website-project (Root Folder)  
├── index.html  
├── /css  
│    └── stylesheet.css  
├── /js  
│    └── scripts.js  
├── /images  
│    └── headshot.jpg

**Framework:**

- No framework — vanilla CSS only

**Architecture:**

- Static site — no JavaScript, no server-side code, no database, no back-end
- Single `index.html` file in the project root
- External stylesheet: `stylesheet.css` in the css folder and referenced by relative path
- All images stored in the `images/` subfolder and referenced by relative path
- Do not link to or embed my resume anywhere on the site

**Responsiveness:**

- Fully responsive at all screen widths from 320px and wider
- No horizontal scrolling on any viewport

**Accessibility — WCAG 2.2 Level AA (non-negotiable):**

- All `<img>` elements must have a descriptive `alt` attribute
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text
- Heading hierarchy must be logical: `<h1>` → `<h2>` → `<h3>`
- All link text must be descriptive
- Page `<title>` element must be descriptive
- All interactive elements must be keyboard navigable

**Compatibility:**

- Must render correctly on Chrome, Safari, and Firefox
- Must be mobile-responsive

## Security:

- Links to external sites open in a new tab with rel="noopener noreferrer"

---

## 3. Design Standards

**Color palette:**

| Role                 | Hex Code | Usage                               |
|----------------------|----------|-------------------------------------|
| Background           | #F8F9FA  | Page background                     |
| Primary text         | #212529  | Body copy                           |
| Accent               | #0D6E6E  | Headings, links, skill tags         |
| Secondary background | #E9ECEF  | Cards and sections                  |

**Typography:**

- Heading font: Inter (Google Fonts)
- Body font: Inter
- Body size: 16px
- Line height: 1.6
- H1: 1.5rem bold
- H2: 1.25rem bold

**Imagery:**

- Professional headshot only

**Layout:**

- Max width: 800px centered
- Sticky top navigation
- Section spacing: 60px
- Single column mobile, two-column desktop (projects)

**Component styles:**

_Profile photo:_
- Circular, centered

_Skill tags:_
- Rounded badges

_Contact links:_
- LinkedIn, GitHub, Email (open in new tab)

_Navigation links:_
- Simple text, accent hover

**Tone:**

- Professional, Approachable, Data-driven
- First person, direct, confident

**Reference sites:**

- read.cv
- brittanychiang.com

---

_Remember: this document is a living artifact. Update it as you learn more._
