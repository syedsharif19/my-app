import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { NoteItem } from './Noteitem';
import AddNotes from './AddNote';
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap';



const Notes = (props) => {
    let navigate = useNavigate();

    const context = useContext(noteContext);
    const { notes, getnotes, editNote} = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
        getnotes();
    } else {
        // do not try .push function that a old method here i applied latest method to redirect
        navigate('/login');
    }
}, [getnotes,navigate])

    const ref = useRef(null); // seted initial value is null that means by deafault modal is closed 
    const refclose = useRef(null);
    
    const [note, setnote] = useState({id: "", etitle: "", edescription: "", etag: "default" })

    // we imported useref functionality in our file , useref provides us functionality of reference any object 🍉

    const updatenote = (currentNote) => {
        ref.current.click(); //used for showing modal if close or close if showing 

        setnote({
            id: currentNote._id,
            etitle: currentNote.title, 
            edescription: currentNote.description, 
            etag: currentNote.tag
         });
    }

    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refclose.current.click();
        props.showAlert("Updated successfully", "success")

    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    const myStyle={
                // backgroundImage:"url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                height:"100vh",
                // marginTop:"-50px",
                width:"100vw",
                // fontSize:"50px",
                backgroundSize:"cover",
                backgroundRepeat:"np-repeat",
                marginLeft:"-20px",
                marginTop:"16px"
            }
    return (
        <>
        <div className='container p-3 mb-2 ml-30 mt-10 bg-secondary text-white rounded' style={myStyle} >
<div>
        
            <AddNotes showAlert={props.showAlert}/>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <Form className="my-3">
                        <Form.Group controlId="etitle">
                            <Form.Label>Title</Form.Label>
                             <Form.Control
                                type="text"
                                name="etitle"
                                value={note.etitle}
                                onChange={onChange}
                                minLength={5}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="edescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="edescription"
                                value={note.edescription}
                                onChange={onChange}
                                minLength={5}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="etag">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control
                                type="text"
                                name="etag"
                                value={note.etag}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Form>

                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            <button disabled={note.etitle.length<=0 || note.edescription.length<=0} onClick={handleClick} type="button" className="btn btn-primary" >Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-4'>
                <h1>Your Notes 📒</h1>
                <div className='conatiner mx-2'>
                {notes.length === 0 && "No notes to display"}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updatenote={updatenote} showAlert={props.showAlert} note={note} />
                    // we passed a props to NoteItem component 
                }
                )}
            </div>
            </div>
            </div>
        </>
    )
}

export default Notes;




