import NotesContainer from "./componets/layout/NotesContrainer";
import NoteDataProvider from "./context/Note.Context";

function App() {
  return (
    <div className='h-full w-full flex mx-auto'>
      <NoteDataProvider>
        <NotesContainer />
      </NoteDataProvider>
    </div>
  );
}

export default App;
