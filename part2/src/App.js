import React, { useState } from 'react';
import Note from './Note.js';

const App = (props) => {
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);

	const addNote = (e) => {
		e.preventDefault();
		const newNoteObject = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString,
			important: Math.random() < 0.5
		}
		setNotes(notes.concat(newNoteObject));
		setNewNote("");
	}

	const handleNoteChange = (e) => {
		setNewNote(e.target.value);
	}

	const notesToShow = showAll ? notes : notes.filter(note => note.important);

	const handleShowNotes = () => {
		setShowAll(!showAll);
	}

	return (
		<div>
			<h1>Part 2</h1>
			<button onClick = {handleShowNotes}>Show {showAll ? "important" : "all"} notes</button>
			<ul>
				{ notesToShow.map(note => <Note key = {note.id} note = {note}/> ) }
			</ul>
			<form onSubmit = {addNote}>
				<input value = {newNote} onChange = {handleNoteChange}/>
				<button type = "submit">Save</button>
			</form>
		</div>
	)
}

export default App;