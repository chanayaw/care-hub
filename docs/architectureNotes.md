# Architecture Notes

## Architecture Style

CareHub uses a responsibility-based architecture.

The project is organized by what each folder is responsible for, not by visual page alone.

## Core Folder Structure

```txt
src/
  app/
  components/
    ui/
    shared/
    layout/
    forms/
  features/
  lib/
    db/
    env/
    services/
    validators/
    utils/
  hooks/
  types/
  config/
  constants/
  test/
```

## Folder Responsibilities

### `src/app/`

Routing layer.

Contains:

- pages
- layouts
- API route handlers
- route groups

### `src/components/ui/`

Primitive reusable UI components.

Examples:

- Button.tsx
- Input.tsx
- Textarea.tsx
- Card.tsx

### `src/components/shared/`

Reusable app-level components that are more opinionated than primitives.

Examples:

- PageHeader.tsx
- EmptyState.tsx

### `src/components/layout/`

Structural layout components.

Examples:

- AppShell.tsx
- Sidebar.tsx
- PublicHeader.tsx

### `src/components/forms/`

Reusable form-specific components.

Examples:

- FormField.tsx
- FormError.tsx
- SubmitButton.tsx

### `src/features/`

Feature-specific modules.

Each feature may contain:

- components
- hooks
- utilities
- local types

### `src/lib/db/`

Database setup and database client code.

### `src/lib/env/`

Environment variable validation and access.

### `src/lib/services/`

Business logic and application workflows.

Routes should call services instead of containing business logic directly.

### `src/lib/validators/`

Zod validation schemas.

### `src/lib/utils/`

Generic shared helper functions.

Examples:

- cn.ts
- response.ts
- logger.ts

### `src/hooks/`

Global reusable React hooks.

Feature-specific hooks should live inside their feature folder.

### `src/types/`

Shared global TypeScript types.

### `src/config/`

Application-level configuration.

Examples:

- site config
- navigation config

### `src/constants/`

Fixed reusable values.

Examples:

- form limits
- status values

### `src/test/`

Shared test setup and test utilities.

## Request Flow

Example: Creating an appointment

1. User submits AppointmentForm.
2. Frontend sends a POST request to /api/v1/appointments.
3. route.ts receives the request.
4. The route calls createAppointment in appointmentsService.ts.
5. The service validates the input using appointmentSchema.ts.
6. The service creates the appointment.
7. The route returns a standardized response using successResponse.

## Architecture Rules

- Pages compose features.
- Features own feature-specific UI and behavior.
- Services own business logic.
- Validators own validation rules.
- Route handlers stay thin.
- Shared UI belongs in components.
- Feature-specific UI belongs in features.
- Generic helpers belong in lib/utils.
- Constants should avoid magic numbers.
- Config should avoid hardcoded app structure.

Note: the code fence inside this Markdown file should stay as-is. It is documentation, not executable code.
