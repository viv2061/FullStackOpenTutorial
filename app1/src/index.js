import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = function(props) {
	return(
		<h1> { props.course } </h1>
	);
}

const Part = function (props) {
	console.log(props);
	return (
		<p>{ props.part.name }: { props.part.exercises }</p>	
	);
}

const Content = function(props) {
	console.log(props);
	return (
		<div>
			<Part part = {props.parts[0]}/>
			<Part part = {props.parts[1]}/>
			<Part part = {props.parts[2]}/>
		</div>
	);
}

const Total = function(props) {
	return (
		<div>
			<p>Total exercises: { props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>
		</div>
	);
}

const App = () => {
	class Part {
		constructor(name, exercises) {
			this.name = name;
			this.exercises = exercises;
		}
	};

	const course = {
		name: 'Half Stack application development',
		parts: [
			new Part('Fundamentals of React', 10),
			new Part('Using props to pass data', 7),
			new Part('State of a component', 14)
		]
	};
  
	return (
		<div>
			<Header course = { course.name }/>
			<Content parts = {course.parts}/>
			<Total parts = {course.parts}/>
		</div>
	)
}

ReactDOM.render(
  	<React.StrictMode>
    	<App />
  	</React.StrictMode>,
  	document.getElementById('root')
);
