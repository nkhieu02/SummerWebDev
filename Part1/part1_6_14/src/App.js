import { useState } from 'react'
const Title = ({ text }) => {
  return (
  <div>
      <h2>{ text}</h2>
  </div>
  )
}
const StatisticLine = ({ text, stat }) => {
  if (text === "positive") {
    return (
      <tr>
        <th>{ text} </th>
        <td> {stat} % </td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <th>{ text} </th>
        <td> {stat}  </td>
      </tr>
    )
  }
}
const Statistic = ({ texts, stats }) => {
  const [goodText, neutralText, badText, allText, avgText, posText] = texts;
  const [good, neutral, bad] = stats;
  const all = good + neutral + bad;
  if (all > 0) {
    const avg = (good - bad) / all;
    const pos = (good / all) * 100;
    return (
      <div>
        <table>
        <StatisticLine text={goodText} stat={good}/>
        <StatisticLine text={neutralText} stat={neutral}/>
        <StatisticLine text={badText} stat={bad} />
        <StatisticLine text={allText} stat={all} />
        <StatisticLine text={avgText} stat={avg} />
        <StatisticLine text={posText} stat={pos} />
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
  )}
}
const Button = ({ method, current, text }) => {
  return (
    <>
      <button onClick={() => {method(current + 1) }}>{text}</button>
    </>
  )
}
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const statText = ["good", "neutral", "bad", "all", "average", "positive"];
  const stats = [good, neutral, bad];
  return (
    <div>
      <Title text="give feedback" />
      <Button method={setGood} current={good} text="good" />
      <Button method={setNeutral} current={neutral} text="neutral" />
      <Button method={setBad} current={bad} text="bad" />
      <Title text="statistics" />
      <Statistic texts={statText} stats={ stats} />
    </div>
  )
}

export default App;