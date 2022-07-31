import { useContext, useState } from "react";
import { Note, NoteDataContext } from "../../context/Note.Context";
import NoteTextArea from "./NoteTextArea";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  value?: Note;
}

export default function NoteModal(props: ModalProps) {
  const { dispatchNote } = useContext(NoteDataContext);

  const [NoteValue, setNoteValue] = useState<Note>(props.value || ({} as Note));

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteValue({ ...NoteValue, [e.target.name]: e.target.value });
  };

  const handleUpdateNotes = () => {
    dispatchNote({ type: "UPDATE_NOTE", payload: NoteValue });
  };

  const handlePin = () => {
    setNoteValue({ ...NoteValue, isPinned: !NoteValue.isPinned });
  };

  return (
    <div>
      <label
        htmlFor='my-modal-4'
        id='text-area-modal'
        className={`modal cursor-pointer ${props.open ? "modal-open" : ""}`}
      >
        <div className='modal-box p-0'>
          <NoteTextArea
            value={NoteValue}
            onSave={handleUpdateNotes}
            expanded={true}
            isEditing={true}
            handlePin={handlePin}
            onChange={handleChange}
            modalClose={props.onClose}
          />
        </div>
      </label>
    </div>
  );
}
