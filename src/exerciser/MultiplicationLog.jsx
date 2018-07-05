import React from 'react'

const MultiplicationLog = ({ exercises }) => {
  const colors = {
    1: 'green',
    2: 'yellow',
    3: 'red'
  }

  return (
    <div>
      <h4>Log:</h4>
      <ol>
        {exercises.map(({ answerSeconds, elapsedSeconds, problem, answer }, i) =>
          <li key={i} className={colors[answerSeconds]}>{elapsedSeconds}" [{answerSeconds}"] {problem} = {answer}</li>
        )}
      </ol>
    </div>
  )
}

export default MultiplicationLog;
