import React from 'react'
import Log from 'BasicMath/Log'
import { _math } from 'helpers'

const Stats = ({ points, seconds, exercises }) => {
  const secondsEach = _math.decimal(seconds / exercises.length)
  return (
    <div>
      <p><b>Time:</b> {seconds} seconds</p>
      <p><b>Points:</b> {points}</p>
      <p><b>Average:</b> One solution every {secondsEach} seconds</p>
      <Log exercises={exercises} />
    </div>
  )
}

export default Stats;
