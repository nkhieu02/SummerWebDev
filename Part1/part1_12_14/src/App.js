import { useState } from 'react'

const Button = ({ method, text }) => {
  return (
    <>
      <button onClick={method }>{ text}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
  const len = anecdotes.length;
  const voting = new Array(len);
  voting.fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(voting);
  let num = Math.floor(Math.random() * len);
  const onClickOne = () => {
    while (num === selected) {
      num = Math.floor(Math.random() * len);
    }
    console.log(num);
    setSelected(num);
  }
  const onClickTwo = () => {
    const votinCopyy = [...votes];
    votinCopyy[selected] += 1;
    console.log(votinCopyy);
    setVotes(votinCopyy);
  }
    const maxNum = Math.max(...votes);
    const maxIndex =  votes.findIndex((element) => element === maxNum);
  return (
    <div>
      <h2> Anecdote of the day </h2>
      <p>{anecdotes[selected]}</p>
      <p> has { votes[selected]} votes </p>
      <Button method={onClickTwo} text={ "vote"} />
      <Button method={onClickOne} text={"next anecdote"} />
      <h2> Anecdote with most votes </h2>
      <p>{anecdotes[maxIndex]}</p>
      <p>has { maxNum} votes</p>
    </div>
  )
}

export default App