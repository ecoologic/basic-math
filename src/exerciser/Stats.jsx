import React from 'react'
import MultiplicationLog from 'exerciser/MultiplicationLog'
import { _math } from 'helpers'

const Stats = ({ points, seconds, exercises }) => {
  const secondsEach = _math.decimal(seconds / points)
  return (
    <div>
      <p>Time: {seconds} seconds</p>
      <p>Points: {points}</p>
      <p>Average: One solution every {secondsEach} seconds</p>
      <MultiplicationLog exercises={exercises} />
    </div>
  )
}

export default Stats;
