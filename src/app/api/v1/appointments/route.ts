import { successResponse, errorResponse } from '@/lib/utils/response';

export async function GET() {
	try {
		const appointments = [
			{ id: '1', title: 'Doctor Visit' },
			{ id: '2', title: 'Therapy Session' },
		];

		return successResponse(appointments);
	} catch {
		return errorResponse('Unable to load appointments', 500);
	}
}
