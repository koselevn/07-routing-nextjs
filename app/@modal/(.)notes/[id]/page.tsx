
import NoteModal from "@/components/NoteModal/NoteModal";
import { fetchNoteById } from "@/lib/api";

interface NotePreviewProps {
  params: Promise<{ id: string }>;
};


export default async function NotePreview({ params }: NotePreviewProps) {
    const { id } = await params

    const {title, content} = await fetchNoteById(id)

    return (
        <NoteModal>
            <h2>{title}</h2>
            <p>{content}</p>
        </NoteModal>
    )
}