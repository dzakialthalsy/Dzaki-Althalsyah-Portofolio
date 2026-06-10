# Dzaki Althalsyah — Personal Portfolio

This repository contains the source code of my personal portfolio website — a single-page site that introduces who I am, the fields I'm currently focused on (Data Science, Machine Learning, Data Analytics, Business Intelligence, and Cyber Security), my organizational experience, featured projects, skills, and recognition.

The site is designed with a **"data editorial"** look: oversized typography, full-width ledger-style rows, an ink-black and electric-indigo palette on a white base, and monospace technical accents — built to feel like an engineering journal rather than a generic template.

## What's inside

- **Hero** — oversized stacked name with line-by-line reveal, a `$ whoami →` typewriter, a spinning "open to work" badge, and a marquee strip of my interest areas
- **About** — magazine-style intro with animated keyword highlights and a stat board of project numbers
- **Experience** — numbered ledger rows of my campus-organization roles (POROS FILKOM UB, BCC FILKOM UB, COSMOS); hovering a row fills it with ink and reveals the details
- **Projects** — an accordion index of my data science / ML / BI projects, each expanding into a description, tech tags, and a link to its GitHub repository
- **Skills** — a split-panel explorer grouping languages, ML tooling, visualization & BI, data engineering, cyber security, and soft skills
- **Recognition** — licenses, certifications, and honors (Dicoding ML certification, UPN Veteran Jakarta security appreciation)
- **Contact** — a form that delivers messages straight to my inbox (powered by FormSubmit, no backend required), alongside my direct channels

Interactive details throughout: a custom rocket cursor with a trailing ring, magnetic buttons, a scroll progress bar, and scroll-triggered reveal animations.

## Tech stack

| Layer | Tool |
|---|---|
| UI framework | React 18 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Space Grotesk · Inter · JetBrains Mono |

## Repository structure

```
dzaki-portfolio/
├── index.html                  # HTML entry point (meta tags, font loading)
├── vite.config.js              # Vite configuration (React + Tailwind plugins)
├── public/
│   └── favicon.svg             # Site favicon
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page composition (section order)
    ├── index.css               # Theme tokens, fonts, and shared animations
    ├── data.js                 # ALL site content — profile, experience,
    │                           #   projects, skills, certifications, stats
    └── components/
        ├── CustomCursor.jsx    # Rocket cursor + trailing ring
        ├── Magnetic.jsx        # Magnetic-pull hover wrapper
        ├── Navbar.jsx          # Fixed nav with scroll progress bar
        ├── Section.jsx         # Shared editorial section header
        ├── Hero.jsx            # Landing section
        ├── About.jsx           # Intro + stat board
        ├── Experience.jsx      # Organization ledger rows
        ├── Projects.jsx        # Project accordion index
        ├── Skills.jsx          # Skill category explorer
        ├── Certifications.jsx  # Recognition ledger
        ├── Contact.jsx         # Contact form + channels
        └── Footer.jsx          # Footer with giant watermark name
```

Every piece of text on the site — bio, roles, project descriptions, skills, certifications — lives in [`src/data.js`](src/data.js), so the content can be updated without touching any component.

## Connect

- GitHub: [@dzakialthalsy](https://github.com/dzakialthalsy/)
- LinkedIn: [dzaki-althalsyah-27z](https://www.linkedin.com/in/dzaki-althalsyah-27z/)
- Email: dz4ic7@gmail.com
