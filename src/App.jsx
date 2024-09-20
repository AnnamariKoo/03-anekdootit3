import { useState } from "react";
import "./App.css";

const Anecdote = (props) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.points[props.selected]} votes</p>
    </>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const BestAnecdote = (props) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <div> {props.anecdotes[props.bestIndex]} </div>
      <p>has {props.bestVotes} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const bestVotes = Math.max(...points);
  const bestIndex = points.indexOf(bestVotes);

  const randomClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteClick = () => {
    const pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  return (
    <>
      <article>
        <Anecdote anecdotes={anecdotes} selected={selected} points={points} />
        <Button handleClick={voteClick} text="vote" />
        <Button handleClick={randomClick} text="next anecdote" />
        <BestAnecdote
          anecdotes={anecdotes}
          bestIndex={bestIndex}
          bestVotes={bestVotes}
        />
      </article>
    </>
  );
};

export default App;
