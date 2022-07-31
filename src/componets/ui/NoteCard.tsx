import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import PinIcon from "./PinIcon";
import NoteModal from "./NoteModal";
import { Note, NoteDataContext } from "../../context/Note.Context";
import { useContext, useState } from "react";

export default function NoteCard({ note }: { note: Note }) {
  const [modalOpen, setModalOpen] = useState(false);

  const { dispatchNote } = useContext(NoteDataContext);
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const handleDelete = () => {
    dispatchNote({ type: "DELETE_NOTE", payload: note });
  };
  const handlePin = () => {
    dispatchNote({ type: "PIN_NOTE", payload: note });
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
          <PinIcon
            className='mx-2 cursor-pointer '
            isPinned={note.isPinned}
            onClick={handlePin}
          />
          <FontAwesomeIcon
            onClick={handleDelete}
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
