


import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import noteContext from '../context/notes/noteContext';

const AddNotes = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: '', description: '', tag: '' });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: '', description: '', tag: '' });
        props.showAlert('Added Note successfully', 'success');
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
   

    return (
        <div className="container" >
        <div className="box" >
            <h2>ADD NOTES </h2>
            <Form >
                <Form.Group controlId="title" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={note.title}
                        name="title"
                        placeholder="Enter title here"
                        minLength={5}
                        required
                        onChange={onChange}
                    />
                </Form.Group>

                

<Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Add Your Note</Form.Label>
      <Form.Control
      className='mb-3'
        as="textarea"
        name='description'
        onChange={onChange}
        minLength={5}
        value={note.description}
        rows={6} // Set the number of rows for a larger text area
        placeholder="Enter your text here..."
        style={{ resize: 'vertical' }} // Optional: Allows vertical resizing
      />
    </Form.Group>:

                <Button
                    disabled={ note.description.length < 5}
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleClick}
                >
                    ADD NOTE
                </Button>
                <hr />
            </Form>
        </div>
        </div>
    );
};

export default AddNotes;
