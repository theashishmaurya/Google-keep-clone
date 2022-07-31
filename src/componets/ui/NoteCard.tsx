import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import PinIcon from "./PinIcon";
import NoteModal from "./NoteModal";
import { Note } from "../../context/Note.Context";
import { useState } from "react";

export default function NoteCard({ note }: { note: Note }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <NoteModal
        value={note}
        open={modalOpen}
        onOpen={handleOpen}
        onClose={handleClose}
      />
      <div className='card w-96 glass bg-gray-400'>
        <div className='card-body pb-0' onClick={handleOpen}>
          <h2 className='card-title'>{note.title}</h2>
          <p>{note.description}</p>
        </div>
        <div className='card-actions justify-center my-4'>
          <PinIcon className='mx-2 cursor-pointer ' isPinned={note.isPinned} />
          <FontAwesomeIcon
            icon={faTrash}
            size='lg'
            className='mx-2 cursor-pointer'
          />
          <FontAwesomeIcon
            onClick={handleOpen}
            icon={faPen}
            size='lg'
            className='mx-2 cursor-pointer '
          />
        </div>
      </div>
    </div>
  );
}
