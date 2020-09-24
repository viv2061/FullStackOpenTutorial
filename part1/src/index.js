import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Component = function(props) {
	return (
		<div>
			<p>My name is { props.name.first != null ? (props.name.first + " " + props.name.last) : props.name }</p>
		</div>
	)
}

const App = () => {
	console.log("This is a React App");
	const now = new Date();
	const name = {
		first: "Bob",
		last: "Marley"
	}
	return (
		<div>
			<p>Hello world! Right now, it is { now.getHours()}: { now.getMinutes() }, and the day is { now.getDate()}</p>
			<Component name = { {first: "Plain", last: "Lane"} }/>
			<Component name = { name }/>
			<Component name = "Hoo Boi"/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));
