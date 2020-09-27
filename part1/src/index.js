import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let counter = 0;

const PersonComp = ({name, age}) => {
	// const { name, age } = props;
	const bornYear = () => new Date().getFullYear() - age;
	return (
		<div>
			<p>My name is { name.first != null ? ( name.first + " " + name.last) : name }</p>
			<ul>
				<li>I am { age } years old.</li>
				<li>I was born in year { bornYear() }</li>
			</ul>
		</div>
	)
}

// eslint-disable-next-line
const App = () => {
	console.log("This is a React App");
	const now = new Date();
	const person = {
		first: "Bob",
		last: "Marley",
		age: 32
	}
	return (
		<div>
			<h1>App1 Hello world!</h1>
			<p>
				Right now, it is {now.getHours() > 12 ? now.getHours() - 12 : now.getHours()}:{now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}, 
				and the day is {now.getMonth()}/{now.getDate()}
			</p>
			<PersonComp name = { {first: "Plain", last: "Lane"} } age = {person.age}/>
			<PersonComp name = { person } age = {18}/>
			<PersonComp name = "Hoo Boi" age = {12 + 8}/>
			<Counter counter = {counter}/>
		</div>
	)
}

const Button = ({handleClick, text}) => {
	return (
		<button onClick = {handleClick}>{text}</button>
	);
}

const Counter = () => {
	const [ counter, setCounter ] = useState(0);
	// setTimeout(() => setCounter(counter + 1), 1000);
	
	const increaseCount = () => { setCounter(counter + 1); sayMessage("I wanna say " + counter) };
	const decreaseCount = () => { setCounter(counter - 1); sayMessage("I'm going down to " + counter)};
	const resetCount = () => { setCounter(0); sayMessage("I am gonna reset") };
	
	const sayMessage = (msg) => {
		console.log("Hello, " + msg);
	}

	const adjustCount = (amt, msg) => () => {
		setCounter(amt);
		sayMessage("I wanna say " + msg);
	}

	return (
		<div>
			<p>Counter: {counter}</p>
			<Button text = "Click to count" handleClick = {adjustCount(counter + 2, "I'm increasing")}/>
			<Button text = "Click to go down" handleClick = {adjustCount(counter - 5, "I'm going down")}/>
			<Button text = "Reset button" handleClick = {adjustCount(0, "I'm reseting")}/>
		</div>
	)
}

// eslint-disable-next-line
const App2 = () => {
	return (
		<div>
			<h1>App2 Counter</h1>
			<Counter/>
		</div>
	)
}

const History = ({allClicks}) => {
	if (allClicks.length === 0) {
		return (
			<div>
				<p>No buttons clicked</p>
			</div>
		)	
	}
	return (
		<div>
			<p>All clicks: {allClicks}</p>
		</div>
	)
}

const App3 = () => {
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);
	const [allClicks, setAll] = useState("");

	const leftClick = () => { setAll(allClicks.concat("L")); setLeft(left + 1); }
	const rightClick = () => { setAll(allClicks.concat("R")); setRight(right + 1); }
	const resetClicks = () => { setLeft(0); setRight(0); setAll(""); }

	return (
		<div>
			<div>
				<p>L: {left}</p>
				<Button handleClick = {leftClick} text = "Left"/>
			</div>
			<div>
				<p>R: {right}</p>
				<Button handleClick = {rightClick} text = "Right"/>
			</div>
			<div>
				<Button handleClick = {resetClicks} text = "Reset"/>
			</div>
			<History allClicks = {allClicks}/>
		</div>
	)
}

// eslint-disable-next-line
const TestApp = () => {
	// won't rerender because not using state
	let thing = 1;
	const fun = () => { thing++; }
	return(
		<>
			<p>{thing}</p>
			<Button handleClick = {() => { fun(); console.log("clicked" + thing) }} text = "button"/>
		</>
	)
}

const App4 = () => {
	const saySomething = (message) => {
		let newMessage = "Hi, I wanna say " + message;
		return function() {
			console.log(newMessage);
		};
	}
	return (
		<div>
			<h1>App4</h1>
			<Button handleClick = {saySomething("bob")} text = "Say 1"/>
			<Button handleClick = {saySomething("it's gonna be ok")} text = "Say 2"/>
			<Button handleClick = {saySomething("3.14159")} text = "Say 3"/>
		</div>
	)
}

ReactDOM.render(<App2/>, document.getElementById('root'));

