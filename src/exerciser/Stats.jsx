import React from 'react'
import { _math } from 'helpers'

const Stats = (props) => {
  const secondsEach = _math.decimal(props.seconds / props.points)
  return (
    <div>
      <p>Time: {props.seconds} seconds</p>
      <p>Points: {props.points}</p>
      <p>Average: One solution every {secondsEach} seconds</p>
      <h4>Log:</h4>
      <pre>{props.log}</pre>
    </div>
  )
}

export default Stats;
