import React from 'react';

const Stats = (props) => {
  const secondsEach = Math.round(props.seconds / props.points * 100) / 100
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
