export type AppointmentStatus = "scheduled" | "completed" | "cancelled";

export type Appointment = {
  id: string;
  title: string;
  date: string;
  status: AppointmentStatus;
};

export type CreateAppointmentInput = {
  title: string;
  date: string;
  status?: AppointmentStatus;
};
