"use client"

import NoteModal from "@/components/NoteModal/NoteModal";
import { fetchNoteById } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface NotePreviewProps {
  id: string;
};


export default function NotePreviewClient({ id }: NotePreviewProps) {
    
    const {data, isSuccess, isLoading, isError, error } = useQuery({
        queryKey: ["NotePreview", id],
        queryFn: () => fetchNoteById(id),
        refetchOnMount: false,
        placeholderData: keepPreviousData,
    })

    return (
        <>
            {isLoading && 
            <p>Loading...</p>}
            {isSuccess && 
            <NoteModal>
                <h2>{data.title}</h2>
                <p>{data.content}</p>
            </NoteModal>}
            {isError &&
            <NoteModal>
                <h2>Error!</h2>
                <p>{`${error}`}</p>
            </NoteModal>}
        </>
    )
}