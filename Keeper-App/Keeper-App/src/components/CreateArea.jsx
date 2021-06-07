import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  
  // use state for rendering components conditionally 
  const [isExpanded, setExpanded] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && ( // conditional rendering | {isExpanded ? <input/> : null}  
        <input 
        name="title" 
        onChange={handleChange}
        value={note.title} 
        placeholder="Title" 
        /> )}
        <textarea
        name="content" 
        onClick={expand}
        onChange={handleChange} 
        value={note.content}
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1} 
        />
        <Zoom in={isExpanded}>
          <Button variant="contained" onClick={submitNote}>
            <AddIcon />
          </Button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
