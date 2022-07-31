import { useContext, useState, useMemo } from "react";
import { Note, NoteDataContext } from "../../context/Note.Context";
import NoteCard from "../ui/NoteCard";
import NoteTextArea from "../ui/NoteTextArea";
import Pagination from "../ui/Pagination";
import { nanoid } from "nanoid";

const PageSize = 6;

export default function NotesContainer() {
  const { NoteData, dispatchNote } = useContext(NoteDataContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return NoteData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, NoteData]);

  const [NoteValue, setNoteValue] = useState<Note>({
    id: nanoid(),
    title: "",
    tagline: "",
    description: "",
    isPinned: false,
  });

  const handleAddNotes = () => {
    dispatchNote({ type: "ADD_NOTE", payload: NoteValue });
    setNoteValue({
      id: nanoid(),
      title: "",
      tagline: "",
      description: "",
      isPinned: false,
    });
  };

  const handleCancel = () => {
    setNoteValue({
      id: nanoid(),
      title: "",
      tagline: "",
      description: "",
      isPinned: false,
    });
  };

  const handlePin = () => {
    setNoteValue({ ...NoteValue, isPinned: !NoteValue.isPinned });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteValue({ ...NoteValue, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen h-full w-full p-10'>
      <div className='flex justify-center'>
        <div className='w-9/12'>
          <NoteTextArea
            expanded={false}
            value={NoteValue}
            onChange={handleChange}
            onSave={handleAddNotes}
            handlePin={handlePin}
            onCancel={handleCancel}
          />
        </div>
      </div>
      <div className='my-4 text-2xl'>Pinned</div>
      <div className='h-full grid  grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-0 my-10 gap-4'>
        {/*  eslint-disable-next-line array-callback-return */}
        {currentTableData.map((note) => {
          if (note.isPinned) {
            return <NoteCard key={note.id} note={note} />;
          }
        })}
      </div>
      <div className='divider'></div>

      <div className='h-full grid  grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-0 my-10 gap-4'>
        {/*  eslint-disable-next-line array-callback-return */}
        {currentTableData.map((note) => {
          if (!note.isPinned) {
            return (
              <div className='' key={note.id}>
                <NoteCard note={note} />
              </div>
            );
          }
        })}
      </div>
      <div className=' w-full flex justify-center my-10'>
        <div className='relative bottom-0'>
          <Pagination
            currentPage={currentPage}
            totalCount={NoteData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
