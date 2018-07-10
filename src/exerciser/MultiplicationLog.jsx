import React from 'react'

const MultiplicationLog = ({ exercises }) => {
  const colorFor = (seconds) => {
    if (seconds <= 1) {
      return 'green'
    } else if (seconds < 3) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  return (
    <div>
      <h4>Log:</h4>
      <ol>
        {exercises.map(({ answerSeconds, elapsedSeconds, problem, answer }, i) =>
          <li key={i} className={colorFor(answerSeconds)}>
            {Number(elapsedSeconds).toFixed(2)}"
            [{Number(answerSeconds).toFixed(2)}"] {problem} = {answer}
          </li>
        )}
      </ol>
    </div>
  )
}

export default MultiplicationLog;
