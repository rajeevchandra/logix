# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## MathMatrix / Logix Platform (artifacts/mathmatrix)

React + Vite SPA replicating the Logix educational math platform Figma design.
- **Design**: Light white theme, dark teal-green primary (#1a7a57), Logix diamond logo
- **CSS**: Tailwind v4 (`@import "tailwindcss"` + `@theme inline`) — NO `@tailwind base/components/utilities`
- **Primary HSL**: `158 64% 29%`

### Pages & Routes
- `/` → Landing page (public marketing: hero, features, curriculum, accessibility, testimonials)
- `/login` → Login page (split-screen: dark left + form right)
- `/signup` → Signup page (same split-screen layout)
- `/dashboard` → Dashboard (Hey Alex!, stats, chart, learning path, upcoming sessions)
- `/tutoring` → Schedule/Live Tutoring (calendar, time slots, featured tutors)
- `/videos` → Resource: Video Lessons (featured video, up next panel, video grid)
- `/quizzes` → Resource: Quizzes (knowledge assessment, daily challenges, quiz units)
- `/notes` → Resource: Study Notes (PDF guides by subject/unit)
- `/flashcards` → Resource: Flashcards (spaced repetition decks)
- `/study-groups` → Study Groups (community hub, live sessions, create group modal)

### Layout System
- `MarketingLayout`: For public pages (`/`, `/login`, `/signup`) — marketing navbar with Features/Curriculum/Accessibility/Testimonials/Login/Get Started
- `MainLayout` + `Navbar`: For app pages — app navbar with Dashboard/Schedule/Resources/Study Groups + toggle/bell/settings/avatar
- `ResourceSidebar`: Left sidebar for all resource pages (Quizzes/Videos/Notes/Flashcards)

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
