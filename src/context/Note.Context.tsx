import { createContext, ReactNode, useEffect, useReducer } from "react";
import { addNote, getNotes, updateNotes } from "../componets/api/firebase";

export interface Note {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  isPinned: boolean;
}

interface NoteContextProps {
  NoteData: Note[];
  dispatchNote: ({ type, payload }: { type: string; payload: Note }) => void;
}

function reducer(state: Note[], action: { type: string; payload: any }) {
  switch (action.type) {
    case "ADD_NOTE":
      addNote(action.payload);
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter((note: Note) => note.id !== action.payload.id);
    case "UPDATE_NOTE":
      return state.map((note: Note) => {
        if (note.id === action.payload.id) {
          updateNotes(note.id, action.payload);
          return action.payload;
        }
        return note;
      });
    case "PIN_NOTE":
      return state.map((note: Note) => {
        if (note.id === action.payload) {
          return { ...note, isPinned: !note.isPinned };
        }
        return note;
      });
    default:
      return state;
  }
}
export const NoteDataContext = createContext({} as NoteContextProps);

const NoteDataProvider = ({ children }: { children: ReactNode }) => {
  const [NoteData, dispatchNote] = useReducer(reducer, []);

  useEffect(() => {
    getNotes().then((notes) =>
      notes.map((note) => dispatchNote({ type: "ADD_NOTE", payload: note }))
    );
  }, []);

  const value = {
    NoteData,
    dispatchNote,
  };

  return (
    <NoteDataContext.Provider value={value}>
      {children}
    </NoteDataContext.Provider>
  );
};

export default NoteDataProvider;
