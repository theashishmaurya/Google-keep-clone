import { useState } from "react";
import NoteCard from "./NoteCard";
import NoteTextArea from "./NoteTextArea";
type EditorCardType = "Editor" | "Card";

export default function EditorCard({
  EditorState,
}: {
  EditorState: EditorCardType;
}) {
  const [state, setState] = useState<EditorCardType>(EditorState);

  const handleOnclick = () => {
    if (state === "Editor") return;
    setState(EditorState === "Editor" ? "Card" : "Editor");
  };

  return (
    <div className='w-full' onClick={handleOnclick}>
      {state === "Editor" ? <NoteTextArea expanded={true} /> : <NoteCard />}
    </div>
  );
}
