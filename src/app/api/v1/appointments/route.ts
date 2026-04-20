import { successResponse, errorResponse } from "@/lib/utils/response";

import { createAppointment, listAppointments } from "@/lib/services/appointmentService";

export async function GET() {
  try {
    const appointments = listAppointments()
    return successResponse(appointments);
  } catch {
    return errorResponse("Unable to load appointments", 500);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const appointment = createAppointment(body)

    return successResponse(appointment, 201)
  } catch {
    return errorResponse('Unable to create appointment', 400)
  }
}