import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props){
   const [note, createNote] = useState({
        title: "",
        content: ""
    });

    const [expand, setExpand] = useState(false)

    function handleChange(event) {
        const {name, value } = event.target;

        createNote(prevNote =>{
            return {
                ...prevNote, [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        createNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleExpand(){
        setExpand(true)
    }


    return (
        <>
        <form className="create-note">

         
            <input
             type="text" 
             placeholder={expand ? "Title" : "Take a note..."}
              name='title' 
              value={note.title}
                onChange={handleChange}
                onClick={handleExpand}
               /> 

    {   expand ? 
            <textarea
             placeholder='Take a note...'
              name='content'
               rows= "3"
               value={note.content}
                onChange={handleChange}
                onClick={handleExpand}
                />: null }
            <Zoom in={expand}>
            <Fab type="submit"
            onClick={submitNote}
            ><AddIcon/>
            </Fab>
            </Zoom>
        </form>
        </>
    )
}

export default CreateArea;