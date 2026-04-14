export async function GET() {
	return Response.json([
		{ id: '1', title: 'Doctor Visit' },
		{ id: '2', title: 'Therapy Session' },
	]);
}
