



import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import { Card, Button } from 'react-bootstrap';

export const NoteItem = (props) => {
    const { note, updatenote, showAlert } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;

    const delete_note = () => {
        if (window.confirm("Want to delete?")) {
            deleteNote(note._id);
            showAlert("Successfully deleted", "success");
        }
    };

    return (
        <Card className="my-5 mx-1 border rounded" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{note.description}</Card.Subtitle>
                <Card.Text>{note.tag}</Card.Text>
                <Button variant="danger" className="mx-2" onClick={delete_note}>
                    Delete
                </Button>
                <Button variant="primary" className="mx-2" onClick={() => updatenote(note)}>
                    Update
                </Button>
            </Card.Body>
        </Card>
    );
};
