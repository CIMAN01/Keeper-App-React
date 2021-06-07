import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  
  function deleteNote(id) {
    setNotes(prevNotes => {
      // filter out the items we no longer need from the array
      return prevNotes.filter((noteItem, index) => {
        return index !== id; // return all of the notes except those that are to be deleted 
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => { // iterate over array of notes and for each note item inside that array execute the function
        return ( 
          <Note
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content} 
            onDelete={deleteNote} 
          />
        );  
      })}
      <Footer />
    </div>
  );
}

export default App;
