import React, { useState } from "react";

function CreateArea(props) {
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  
  function handleChange(event) {
    // destructure the event into event.target.name & event.target.value
    const {name, value} = event.target;
    
    setNote(prevValue => {
      return {
        ...prevValue, // use spread operator to spread all key-value pairs that is currently in existence in our notes
        [name]: value // use [] syntax to refer to constant name (key)
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    // clear out the note object after adding a note
    setNote({
      title: "",
      content: ""
    });
    // prevent default behavior of refreshing the page after submit button is clicked
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
        name="title" 
        onChange={handleChange}
        value={note.title} 
        placeholder="Title" 
        />
        <textarea
        name="content" 
        onChange={handleChange} 
        value={note.content}
        placeholder="Take a note..." 
        rows="3" 
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
