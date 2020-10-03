import React from "react";

const CourseComp = ({course}) => {
	return (
		<div>
			<Header courseName = {course.name}/>
			<Content parts = {course.parts}/>
			<Total parts = {course.parts}/>
		</div>
	)
}

const Header = ({courseName}) => {
	return(
		<h1>{courseName}</h1>
	);
}

const Content = ({parts})  => {
	return (
		<ul>
			{ parts.map(part => <Part key = {part.id} part = {part}/>) }
		</ul>
	);
}

const Part = ({part}) => {
	return (
		<li>{part.name}: {part.exercises}</li>	
	);
}

const Total = ({parts}) => {
	return (
		<div>
			<p>
				Total exercises: { parts.reduce((total, part) => total + part.exercises, 0) }
			</p>
		</div>
	);
}

export default CourseComp;