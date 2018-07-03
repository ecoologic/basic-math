import React, { Component } from 'react';
import Timer from './Timer'
import MultiplicationExercise from './MultiplicationExercise'

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

const initialState = {
        started: false,
        seconds: 20,
        points: 0,
        log: '',
        eventCount: 0
      }

export default class Exerciser extends Component {
  constructor() {
    super()
    this.state = initialState

    this.onEvent = (log) =>
      this.setState({log: this.state.log + log + "\n"})

    this.onScore = () =>
      this.setState({points: this.state.points + 1})

    this.onTimeUp = () =>
      this.setState({started: false})

    this.start = () =>
      this.setState(Object.assign(initialState, {started: true}))
  }

  render() {
    if (this.state.started) {
      return (
        <div>
          <Timer seconds={this.state.seconds} onTimeUp={this.onTimeUp} />
          <MultiplicationExercise onScore={this.onScore}
                                  onEvent={this.onEvent} />
          <Stats points={this.state.points}
                 log={this.state.log}
                 seconds={this.state.seconds} />
        </div>
      )
    } else if (this.state.points) {
      return (
        <div>
          <Stats points={this.state.points}
                 log={this.state.log}
                 seconds={this.state.seconds} />
          <button autoFocus onClick={this.start}>Restart</button>
        </div>
      )
    } else {
      return (
        <div>
          <p>
            You'll be asked to multiply two numbers,
            answer as many questions as possible
            in {this.state.seconds} seconds.
            <br />
            Good luck!
          </p>
          <button autoFocus onClick={this.start}>Start</button>
        </div>
      )
    }
  }
}
