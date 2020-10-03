import React from 'react';
import Note from './Note.js';

const App = ({notes}) => {
	return (
		<div>
			<h1>App 1</h1>
			<ul>
				{ notes.map(note => <Note note = {note}/> ) }
			</ul>
		</div>
	)
}

export default App;