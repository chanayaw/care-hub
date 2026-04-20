import { logger } from "@/lib/utils/logger";
import { appointmentSchema } from "@/lib/validators/appointmentSchema";
import type {
  Appointment,
  CreateAppointmentInput,
} from "@/features/appointments/types";

const mockAppointments: Appointment[] = [
  {
    id: "1",
    title: "Doctor Visit",
    date: "2026-04-20T10:00:00.000Z",
    status: "scheduled",
  },
  {
    id: "2",
    title: "Therapy Session",
    date: "2026-04-22T14:00:00.000z",
    status: "completed",
  },
];

export function listAppointments() {
  logger.info("Listing Appointments");

  return mockAppointments;
}

export function createAppointment(input: CreateAppointmentInput) {
  logger.info("Creating Appointment");

  const validatedInput = appointmentSchema.parse(input);

  const newAppointment: Appointment = {
    id: String(mockAppointments.length + 1),
    title: validatedInput.title,
    date: validatedInput.date,
    status: validatedInput.status,
  };

  mockAppointments.push(newAppointment);

  return newAppointment;
}
