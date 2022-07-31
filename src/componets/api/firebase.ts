
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs , setDoc, doc } from 'firebase/firestore/lite';
import { Note } from "../../context/Note.Context";

const firebaseConfig = {
    apiKey: "AIzaSyA-V6epQZi9Q0n3guYg-aGYsD-zNvKdnEg",
    authDomain: "keep-dd150.firebaseapp.com",
    projectId: "keep-dd150",
    storageBucket: "keep-dd150.appspot.com",
    messagingSenderId: "251034407636",
    appId: "1:251034407636:web:f6c5eb79b1c6bea1a8a141"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export const getNotes = async () => {
    const notesCollection = collection(db,'notes');
    const notesSnapshot = await getDocs(notesCollection)
    const notes = notesSnapshot.docs.map(doc => doc.data())
    return notes
}

export const updateNotes = async (id:string,payload :Note)=>{
    const notesCollection = collection(db,'notes');
    const noteDoc = doc(notesCollection,id);
    await setDoc(noteDoc,payload)
}

export const deleteNote = async () =>{
    
}

export const addNote = async (payload:Note) =>{
    const notesDoc = doc(db,'notes',payload.id);
    const note = await setDoc(notesDoc,payload)
    return note
}