import React from 'react'
import MultiplicationLog from 'exerciser/MultiplicationLog'
import { _math } from 'helpers'

const Stats = ({ points, seconds, exercises }) => {
  const secondsEach = _math.decimal(seconds / points)
  return (
    <div>
      <p><b>Time:</b> {seconds} seconds</p>
      <p><b>Points:</b> {points}</p>
      <p><b>Average:</b> One solution every {secondsEach} seconds</p>
      <MultiplicationLog exercises={exercises} />
    </div>
  )
}

export default Stats;
