import { NOTE_MAX_LENGTH } from '@/constants/formLimits';

export default function NotesPage() {
	return (
		<>
			<h1>Notes</h1>
			<p>Max note length: {NOTE_MAX_LENGTH}</p>
		</>
	);
}
