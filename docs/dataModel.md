# Data Model

## Current MVP Model

The first version of CareHub uses simple in-memory data while the application architecture is being built.

Later, these models will be moved into Prisma and backed by PostgreSQL.

## Core Entities

- User
- Appointment
- Note

## Entity: User

Represents a person using CareHub.

### Fields

- `id`
- `name`
- `email`
- `createdAt`
- `updatedAt`

## Entity: Appointment

Represents a scheduled care-related appointment.

### Fields

- `id`
- `title`
- `date`
- `status`
- `createdAt`
- `updatedAt`
- `userId`

### Status Values

- `scheduled`
- `completed`
- `cancelled`

## Entity: Note

Represents a care-related note or observation.

### Fields

- `id`
- `content`
- `createdAt`
- `updatedAt`
- `userId`

## Relationships

- A user can have many appointments.
- A user can have many notes.
- An appointment belongs to one user.
- A note belongs to one user.

## Future Entities

Potential future entities include:

- CareCategory
- Tag
- Medication
- Reminder
- Contact
- Attachment

## Data Modeling Notes

The MVP should keep data simple and explicit.

The goal is not to over-model the domain early, but to create a structure that can evolve cleanly once real persistence is added.