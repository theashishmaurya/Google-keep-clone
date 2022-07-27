import NoteCard from "../ui/NoteCard";
import NoteModal from "../ui/NoteModal";
import NoteTextArea from "../ui/NoteTextArea";
import Pagination from "../ui/Pagination";

export default function NotesContainer() {
  return (
    <div className='h-full w-full p-10'>
      <NoteModal />
      <div>
        <NoteTextArea expanded={false} />
      </div>
      <div className='h-9/12 w-full grid grid-cols-fluid gap-4 my-10'>
        <NoteCard />
      </div>
      <div className='w-full flex justify-center my-6'>
        <Pagination />
      </div>
    </div>
  );
}
