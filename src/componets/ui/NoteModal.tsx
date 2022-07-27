import NoteTextArea from "./NoteTextArea";

export default function NoteModal() {
  return (
    <div>
      <input type='checkbox' id='my-modal-4' className='modal-toggle' />
      <label
        htmlFor='my-modal-4'
        id='text-area-modal'
        className='modal cursor-pointer'
      >
        <div className='modal-box p-0'>
          <NoteTextArea expanded={true} />
        </div>
      </label>
    </div>
  );
}
