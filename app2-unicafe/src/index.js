import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handler, text}) => {
	return (
		<button onClick = {handler}>{text}	</button>
	)
}

const Statistic = ({text, value}) => {
	return (
		<tr>
			<td>{text}:</td>
			<td>{value}</td>
		</tr>
	)
}

const Statistics = ({good, neutral, bad}) => {
	const total = good + neutral + bad;
	const average = total !== 0 ? (good + -bad) / total : 0;
	const positivityRate = total !== 0 ? good / total : 0;
	
	return (
		total > 0 ?
		<div>
			<h2>Statistics</h2>
			<table>
				<Statistic text = "Good" value = {good}/>
				<Statistic text = "Neutral" value = {neutral}/>
				<Statistic text = "Bad" value = {bad}/>
				<Statistic text = "Total" value = {total}/>
				<Statistic text = "Average score" value = {average}/>
				<Statistic text = "Positivity Rate" value = {positivityRate}/>
			</table>
		</div>
		:
		<div>
			<h2>Statistics</h2>
			<p>No feedback given</p>
		</div>
	)
}

const GiveFeedbackApp = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const addFeedback = (type) => () => {
		switch(type) {
			case "good":
				setGood(good + 1);
				break;
			case "neutral":
				setNeutral(neutral + 1);
				break;
			case "bad":
				setBad(bad + 1);
				break;
			default:
				break;
		}
	}

	return (
		<div>
			<h2>Give feedback</h2>
			<Button handler = {addFeedback("good")} text = "Good"/>
			<Button handler = {addFeedback("neutral")} text = "Neutral"/>
			<Button handler = {addFeedback("bad")} text = "Bad"/>
			<Statistics good = {good} bad = {bad} neutral = {neutral}/>
		</div>
	)
}

const AnecdotesApp = () => {
	const anecdotes = [
		'If it hurts, do it more often',
  		'Adding manpower to a late software project makes it later!',
  		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  		'Premature optimization is the root of all evil.',
  		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	];
	const [selected, setSelected] = useState(0);
	const [votes, setVoteForSelected] = useState(new Array(anecdotes.length).fill(0));

	const randomNumber = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length));
	}

	const nextSelected = () => {
		setSelected(selected < anecdotes.length - 1 ? selected + 1 : 0);
	}

	const voteForSelected = () => {
		let newVotes = [...votes];
		newVotes[selected] += 1;
		setVoteForSelected(newVotes);
	}

	const findMostUpvoted = () => {
		let maxVotes = 0; let anecdote = 0;
		for (let i = 0; i < votes.length; i++) {
			if (votes[i] > maxVotes) {
				maxVotes = votes[i];
				anecdote = i;
			}
		}
		return anecdote;
	}

	return (
		<div>
			<h2>Anecdotes from the software engineer</h2>
			<p>{anecdotes[selected]}</p>
			<p>Has {votes[selected]} upvotes <Button handler = {voteForSelected} text = "Upvote"/></p>
			<Button handler = {randomNumber} text = "Random anecdote"/>
			<Button handler = {nextSelected} text = "Next anecdote"/>
			<h2>Most upvoted anecdote</h2>
			<p>{anecdotes[findMostUpvoted()]}</p>
		</div>
	)
}

const App = () => {
	return (
		<div>
			<h1>Unicafe App</h1>
			{/* <GiveFeedbackApp/> */}
			<AnecdotesApp/>
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));