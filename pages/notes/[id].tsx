import NoteForm from "@/components/NoteForm";
import { useRouter } from "next/router";
import axios from "axios";
import { Note } from "@/components/Notes";
import { useState, useMemo } from "react";

export default function EditNotePage() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState<Note | null>(null);

  useMemo(() => {
    if (id) {
      const fetchNoteToEdit = async () => {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/v1/notes/${id}`,
          { withCredentials: true }
        );
        setNote(response.data);
        setIsLoading(false);
      };
      fetchNoteToEdit();
    }
  }, [id]);

  return !isLoading && note ? <NoteForm note={note} /> : <div>Loading</div>;
}
