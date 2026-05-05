
# Build Roadmap

## Progress

- Phase 1: ✅ Completed
- Phase 2: 🔄 In Progress
- Phase 3: 🔄 In Progress
- Phase 4: 🔄 In Progress
- Phase 5: ⬜ Not Started
- Phase 6: ⬜ Not Started
- Phase 7: ⬜ Not Started

---

## Current Phase

Phase 4: Feature Slices

## Current Task

Build appointments feature frontend

---

# Phase 1: Scaffold App Shape

## Goal

Set up the project structure and routing before adding application logic.

- [x] Initialize Next.js app
  - [x] Create Next.js project with App Router
  - [x] Configure TypeScript
  - [x] Configure Tailwind CSS
  - [x] Verify dev server runs

- [x] Install core packages
  - [x] zod
  - [x] react-hook-form
  - [x] @hookform/resolvers
  - [x] clsx
  - [x] tailwind-merge
  - [x] lucide-react
  - [x] date-fns
  - [x] @prisma/client
  - [x] pino
  - [x] prisma
  - [x] vitest
  - [x] @testing-library/react
  - [x] @testing-library/jest-dom
  - [x] jsdom
  - [x] prettier
  - [x] prettier-plugin-tailwindcss

- [x] Create folder structure
  - [x] Create `src/app/`
  - [x] Create `src/components/ui/`
  - [x] Create `src/components/shared/`
  - [x] Create `src/components/layout/`
  - [x] Create `src/components/forms/`
  - [x] Create `src/features/`
  - [x] Create `src/lib/db/`
  - [x] Create `src/lib/env/`
  - [x] Create `src/lib/services/`
  - [x] Create `src/lib/validators/`
  - [x] Create `src/lib/utils/`
  - [x] Create `src/hooks/`
  - [x] Create `src/types/`
  - [x] Create `src/config/`
  - [x] Create `src/constants/`
  - [x] Create `src/test/`
  - [x] Create `docs/`

- [x] Create route groups
  - [x] `(public)`
  - [x] `(app)`

- [x] Create placeholder pages
  - [x] Home page: `src/app/(public)/page.tsx`
  - [x] Login page: `src/app/(public)/login/page.tsx`
  - [x] Dashboard page: `src/app/(app)/dashboard/page.tsx`
  - [x] Appointments page: `src/app/(app)/appointments/page.tsx`
  - [x] Notes page: `src/app/(app)/notes/page.tsx`

- [x] Create placeholder API routes
  - [x] Appointments API route: `src/app/api/v1/appointments/route.ts`
  - [x] Notes API route: `src/app/api/v1/notes/route.ts`

- [x] Verify app structure
  - [x] App runs without errors
  - [x] Frontend routes resolve correctly
  - [x] API routes return JSON

---

# Phase 2: Foundational Infrastructure

## Goal

Set up core systems and helper files that the rest of the project depends on.

- [x] Fix Prisma version mismatch
  - [x] Align `prisma` and `@prisma/client`

- [x] Configure Prettier + Tailwind sorting
  - [x] Install Prettier
  - [x] Install `prettier-plugin-tailwindcss`
  - [x] Configure Prettier
  - [x] Verify class sorting works

- [x] Create project-wide foundation helpers
  - [x] Create class name utility: `src/lib/utils/cn.ts`
  - [x] Create response helpers: `src/lib/utils/response.ts`
  - [x] Create logger: `src/lib/utils/logger.ts`

- [x] Create config files
  - [x] Create site config: `src/config/site.ts`
  - [x] Create navigation config: `src/config/navigation.ts`

- [x] Create constants
  - [x] Create form limits: `src/constants/formLimits.ts`

- [ ] Set up environment validation
  - [ ] Create server env file: `src/lib/env/server.ts`
  - [ ] Create client env file: `src/lib/env/client.ts`

- [ ] Set up database foundation
  - [ ] Initialize Prisma
  - [ ] Create Prisma client: `src/lib/db/prisma.ts`
  - [ ] Create initial Prisma schema
  - [ ] Run first migration

---

# Phase 3: Shared UI and Layout

## Goal

Build reusable UI and layout primitives before feature development.

- [x] Build UI primitives
  - [x] Button: `src/components/ui/Button.tsx`
  - [x] Card: `src/components/ui/Card.tsx`
  - [x] Input: `src/components/ui/Input.tsx`
  - [x] Textarea: `src/components/ui/Textarea.tsx`

- [x] Build shared components
  - [x] PageHeader: `src/components/shared/PageHeader.tsx`

- [x] Build layout components
  - [x] PublicHeader: `src/components/layout/PublicHeader.tsx`
  - [x] Sidebar: `src/components/layout/Sidebar.tsx`
  - [x] AppShell: `src/components/layout/AppShell.tsx`

- [x] Create route-group layouts
  - [x] Public layout: `src/app/(public)/layout.tsx`
  - [x] App layout: `src/app/(app)/layout.tsx`

- [ ] Build form abstractions when repeated patterns emerge
  - [ ] FormField
  - [ ] FormError
  - [ ] SubmitButton

- [ ] Add feedback components when needed
  - [ ] EmptyState
  - [ ] LoadingState
  - [ ] ErrorMessage

---

# Phase 4: Feature Slices

## Goal

Build the application feature by feature.

---

## Feature: Appointments

### Backend

- [x] Create appointments feature folder
  - [x] Create feature types: `src/features/appointments/types.ts`

- [x] Create appointment constants
  - [x] Appointment statuses: `src/constants/appointmentStatuses.ts`

- [x] Create appointment validator
  - [x] Appointment schema: `src/lib/validators/appointmentSchema.ts`

- [x] Create appointment service
  - [x] Appointments service: `src/lib/services/appointmentsService.ts`
  - [x] Add mock in-memory appointments
  - [x] Add `listAppointments`
  - [x] Add `createAppointment`

- [x] Update appointments API route
  - [x] Add `GET`
  - [x] Add `POST`
  - [x] Use `successResponse`
  - [x] Use `errorResponse`

- [x] Test appointments backend
  - [x] Verify `GET /api/v1/appointments`
  - [x] Verify `POST /api/v1/appointments`

### Frontend

- [ ] Create appointment formatter
  - [ ] `src/features/appointments/utils/formatAppointmentTime.ts`

- [ ] Create appointment feature hook
  - [ ] `src/features/appointments/hooks/useAppointments.ts`

- [ ] Create appointment components
  - [ ] `AppointmentCard.tsx`
  - [ ] `AppointmentList.tsx`
  - [ ] `AppointmentForm.tsx`

- [ ] Wire appointments page
  - [ ] Connect form and list to `src/app/(app)/appointments/page.tsx`
  - [ ] Verify list renders
  - [ ] Verify creation works end-to-end

---

## Feature: Notes

### Backend

- [ ] Create notes feature folder
  - [ ] Create feature types

- [ ] Create note validator
  - [ ] Note schema

- [ ] Create note service
  - [ ] Add mock in-memory notes
  - [ ] Add `listNotes`
  - [ ] Add `createNote`

- [ ] Update notes API route
  - [ ] Add `GET`
  - [ ] Add `POST`

- [ ] Test notes backend

### Frontend

- [ ] Create note formatter or helper if needed
- [ ] Create notes hook if needed
- [ ] Create note components
  - [ ] NoteCard
  - [ ] NoteList
  - [ ] NoteForm

- [ ] Wire notes page
  - [ ] Verify list renders
  - [ ] Verify creation works end-to-end

---

## Feature: Auth Placeholder

- [ ] Create auth feature folder
- [ ] Create login form
- [ ] Add basic validation
- [ ] Keep real auth out of MVP unless needed

---

## Feature: Dashboard

- [ ] Create dashboard overview
- [ ] Add summary cards
- [ ] Show recent appointments
- [ ] Show recent notes

---

# Phase 5: Persistence and Backend Refinement

## Goal

Replace in-memory data with database-backed persistence.

- [ ] Create Prisma models
  - [ ] User
  - [ ] Appointment
  - [ ] Note

- [ ] Run migration
- [ ] Generate Prisma client
- [ ] Refactor appointments service to use Prisma
- [ ] Refactor notes service to use Prisma
- [ ] Add error handling refinements
- [ ] Add service tests

---

# Phase 6: Refine, Test, and Polish

## Goal

Improve quality, maintainability, and user experience.

- [ ] Add loading states
- [ ] Add empty states
- [ ] Add error states
- [ ] Refactor repeated form patterns
- [ ] Add tests
  - [ ] Utility tests
  - [ ] Service tests
  - [ ] Component tests where helpful

- [ ] Review accessibility
  - [ ] Labels
  - [ ] Keyboard support
  - [ ] Semantic HTML
  - [ ] Color contrast

- [ ] Run QA
  - [ ] Test appointments flow
  - [ ] Test notes flow
  - [ ] Test navigation
  - [ ] Test responsive layout

---

# Phase 7: Documentation and Portfolio

## Goal

Prepare the project for GitHub and portfolio presentation.

- [ ] Write README
- [ ] Add architecture notes
- [ ] Add screenshots
- [ ] Add setup instructions
- [ ] Add project limitations
- [ ] Add future improvements
- [ ] Write portfolio case study
- [ ] Prepare deployment notes