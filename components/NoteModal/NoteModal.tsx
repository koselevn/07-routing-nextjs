'use client';

import css from "./Modal.module.css"

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const NoteModal = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button onClick={() => router.back()}>Close</button>
      </div>
    </div>
  );
};

export default NoteModal;