# MVP Scope

## MVP Goal

Build a working version of CareHub that demonstrates the core product workflow:

- Public landing experience
- Login screen placeholder
- App shell
- Dashboard
- Appointments feature
- Notes feature
- Backend API structure
- Service-layer architecture
- Validation
- Documentation

## Public Routes

- Home page
- Login page

## App Routes

- Dashboard
- Appointments
- Notes

## API Routes

- `GET /api/v1/appointments`
- `POST /api/v1/appointments`
- `GET /api/v1/notes`
- `POST /api/v1/notes`

## Core Features

### Appointments

Users should be able to:

- View appointments
- Create a new appointment
- See appointment status
- See formatted appointment time

### Notes

Users should be able to:

- View notes
- Create a new note
- See notes displayed in a readable list

### Dashboard

Users should be able to:

- View a basic overview of appointments and notes
- See high-level activity or summary cards

## Out of Scope for MVP

The following are intentionally excluded from the first MVP:

- Real authentication
- Multi-user accounts
- Role-based access
- Notifications
- Calendar integrations
- File uploads
- Clinical recommendations
- Diagnosis or medical advice
- Advanced analytics
- Production deployment hardening

## Future Enhancements

- User authentication
- Database persistence with Prisma
- Appointment editing
- Appointment deletion
- Note editing
- Note deletion
- Search and filtering
- Dashboard summary metrics
- User settings
- Care categories or tags
- Exportable summaries