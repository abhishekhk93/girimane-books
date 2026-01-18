E-commerce website for a Kannada author to sell his books.

TECH STACK
- Next.js 14.2.35 (App Router)
- TypeScript (progressively adopted)
- Vanilla CSS + CSS Modules
- Redux Toolkit for UI & cart state
- Hybrid rendering (SSR / ISR / CSR)

ARCHITECTURE
- Pages are server components by default
- Data fetching happens in server components
- Interactive UI uses client components ("use client")
- Redux Provider lives in app/providers.tsx
- Backend is source of truth for cart
- Redux holds cart UI state only

ROUTING
- Home: /
- Books listing: /books (SSR / ISR)
- Book detail: /books/[slug]
  Example: /books/the-journey-of-words

FOLDER STRUCTURE
src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ providers.tsx
 │   ├─ page.tsx
 │   └─ books/
 │       ├─ page.tsx
 │       └─ [slug]/page.tsx
 ├─ components/
 │   ├─ common/      (Navigation, Container, Button, etc.)
 │   ├─ home/        (AuthorHero, EventBanner)
 │   └─ books/       (BookGrid, BookCard)
 ├─ lib/api.ts       (backend API abstraction)
 ├─ store/           (Redux Toolkit store & slices)
 └─ styles/theme.css (CSS variables)

STYLING
- Global CSS variables in styles/theme.css
- Each component has its own .module.css file

CURRENT STATE
- Home page and books listing page exist
- Books listing uses mock data
- No auth yet
- No backend API contracts finalized yet

GOAL
Add the next step here