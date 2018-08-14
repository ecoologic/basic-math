import React from 'react'
import Log from 'BasicMath/Log'
import { _math } from 'helpers'

const Stats = ({ points, seconds, exercises }) => {
  // https://emojikeyboard.io/?ref=materialui
  const secondsEach = _math.decimal(seconds / exercises.length),
        stars = (parseInt(points / 3, 10)) - 1,
        allStars = ['👍', '😄', '👌', '😝', '✌', '😎', '🤘', '😘', '💃', '👯', '👽'],
        feedback = allStars.slice(0, stars)

  return (
    <div>
      <p><b>Time:</b> {seconds} seconds</p>
      <p><b>Points:</b> {points} {feedback}</p>
      <p><b>Average:</b> One solution every {secondsEach} seconds</p>
      <Log exercises={exercises} />
    </div>
  )
}

export default Stats;
