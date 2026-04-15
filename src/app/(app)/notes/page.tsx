import { NOTE_MAX_LENGTH } from "@/constants/formLimits";
import { PageHeader } from "@/components/shared/PageHeader";

export default function NotesPage() {
  return (
    <div>
      <PageHeader
        title="Notes"
        description="Review and mange your care notes."
      />
      <p>Max note length: {NOTE_MAX_LENGTH}</p>
    </div>
  );
}
