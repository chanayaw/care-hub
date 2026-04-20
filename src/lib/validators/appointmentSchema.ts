import z from "zod";
import { APPOINTMENT_STATUSES } from "@/constants/appointmentStatuses";
import { TITLE_MAX_LENGTH } from "@/constants/formLimits";

export const appointmentSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(TITLE_MAX_LENGTH, `Title must be ${TITLE_MAX_LENGTH}`),
  date: z.string().min(1, "Date is required"),
  status: z.enum(APPOINTMENT_STATUSES).default("scheduled"),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
