import React, { Component } from 'react';
import Timer from 'exerciser/Timer'
import MultiplicationExercise from 'exerciser/MultiplicationExercise'
import Stats from 'exerciser/Stats'

const initialState = {
        started: false,
        remainingSeconds: 20,
        points: 0,
        log: ''
      }

export default class Exerciser extends Component {
  constructor() {
    let remainingSecondsAtLatestEvent = initialState.remainingSeconds

    super()
    this.state = initialState

    this.onEvent = (log) => {
      const elapsed = initialState.remainingSeconds - this.state.remainingSeconds,
            solutionTime = remainingSecondsAtLatestEvent - this.state.remainingSeconds
      this.setState({log: `${this.state.log}${elapsed}" [${solutionTime}"]: ${log}\n`})
      remainingSecondsAtLatestEvent = this.state.remainingSeconds
    }

    this.onScore = () =>
      this.setState({points: this.state.points + 1})

    this.onTick = (remainingSeconds) =>
      this.setState({remainingSeconds})

    this.onTimeUp = () =>
      this.setState({started: false})

    this.start = () =>
      this.setState(Object.assign(initialState, {started: true}))
  }

  render() {
    if (this.state.started) {
      return (
        <div>
          <Timer seconds={initialState.remainingSeconds}
                 onTick={this.onTick}
                 onTimeUp={this.onTimeUp} />
          <MultiplicationExercise onScore={this.onScore}
                                  onEvent={this.onEvent} />
          <Stats points={this.state.points}
                 log={this.state.log}
                 seconds={initialState.remainingSeconds} />
        </div>
      )
    } else if (this.state.points) {
      return (
        <div>
          <Stats points={this.state.points}
                 log={this.state.log}
                 seconds={initialState.remainingSeconds} />
          <button autoFocus onClick={this.start}>Restart</button>
        </div>
      )
    } else {
      return (
        <div>
          <p>
            You'll be asked to multiply two numbers,
            answer as many questions as possible
            in {initialState.remainingSeconds} seconds.
            <br />
            Good luck!
          </p>
          <button autoFocus onClick={this.start}>Start</button>
        </div>
      )
    }
  }
}
