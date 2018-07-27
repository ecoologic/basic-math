import React from 'react'
import { Paper } from 'renderHelpers'

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
      <p><b>Log:</b></p>
      <Paper className="x-fit x-centered">
        <ol>
          {exercises.map(({ answerSeconds, elapsedSeconds, points, problem, answer }, i) =>
            <li key={i} className={colorFor(answerSeconds / points)}>
              {Number(elapsedSeconds).toFixed(2)}"
              [{Number(answerSeconds).toFixed(2)}"] {problem} = {answer}
            </li>
          )}
        </ol>
      </Paper>
    </div>
  )
}

export default Log;
