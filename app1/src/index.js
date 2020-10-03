import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CourseComp from "./components/CourseComp.js";

const App = () => {
	class Course {
		constructor (id, name, parts) {
			this.id = id;
			this.name = name;
			this.parts = parts;
		}
	}
	
	class Part {
		constructor(id, name, exercises) {
			this.id = id;
			this.name = name;
			this.exercises = exercises;
		}
	};
  
	const courses = [
		new Course(1,
			"Half Stack application development",
			[
				new Part(1, "Fundamentals of React", 10),
				new Part(2, "Using props to pass data", 7),
				new Part(3, "State of a component", 14),
				new Part(4, "Redux", 11)
			]
		),
		new Course(2,
			"Node.js",
			[
				new Part(1, "Routing", 3),
				new Part(2, "Middlewares", 7)
			]
		)
	]

	return (
		<div>
			{ courses.map(course => <CourseComp key = {course.id} course = {course}/>) }
		</div>
	)
}

ReactDOM.render(
  	<React.StrictMode>
    	<App />
  	</React.StrictMode>,
  	document.getElementById("root")
);
