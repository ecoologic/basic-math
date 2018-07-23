import React from 'react'

const Log = ({ exercises }) => {
  const colorFor = (secondsPerPoint) => {
    if (secondsPerPoint <= 1.5) {
      return 'green'
    } else if (secondsPerPoint < 3) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  return (
    <div>
      <h4>Log:</h4>
      <ol>
        {exercises.map(({ answerSeconds, elapsedSeconds, points, problem, answer }, i) =>
          <li key={i} className={colorFor(answerSeconds / points)}>
            {Number(elapsedSeconds).toFixed(2)}"
            [{Number(answerSeconds).toFixed(2)}"] {problem} = {answer}
          </li>
        )}
      </ol>
    </div>
  )
}

export default Log;
