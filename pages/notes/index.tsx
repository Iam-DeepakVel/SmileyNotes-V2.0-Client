import dynamic from "next/dynamic";

const Notes = dynamic(() => import("@/components/Notes"), {
  ssr: false,
});

export default function NotesPage() {
  return <Notes />;
}
