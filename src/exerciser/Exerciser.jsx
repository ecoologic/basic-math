import React, { Component } from 'react'
import MultiplicationExercise from 'exerciser/MultiplicationExercise'
import Timer from 'exerciser/Timer'
import Stats from 'exerciser/Stats'
import { _setState } from 'helpers'
import { reducer, actions, store } from 'store'

const initialState = {
  started: false,
  elapsedSeconds: 0,
  remainingSeconds: 20,
  latestSolutionSeconds: 0,
  points: 0,
  solvedExercises: []
}

export default class Exerciser extends Component {
  constructor() {
    super()
    this.state = initialState

    this.start = () =>
      this.setState({ ...initialState, started: true })

    this.onTick = (args) =>
      this.setState(args)

    this.onScore = (exercise) => {
      // Read data
      const previousSolutionSeconds = this.state.latestSolutionSeconds // New name for clarity
      this.setState({ latestSolutionSeconds: this.state.elapsedSeconds })
      _setState.plus(1, this, 'points')
      console.log('Here', { ...store.getState().timer, ...exercise })
      _setState.push({
        ...store.getState().timer,
        ...exercise,
        answerSeconds: this.state.elapsedSeconds - previousSolutionSeconds
      }, this, 'solvedExercises');
    }

    this.onTimeUp = () =>
      this.setState({ started: false })
  }

  render() {
    if (this.state.started) {
      return (
        <div>
          <Timer seconds={initialState.remainingSeconds}
                 onTick={this.onTick}
                 onTimeUp={this.onTimeUp}
          />
          <MultiplicationExercise onScore={this.onScore} />
          <Stats points={this.state.points}
                 exercises={this.state.solvedExercises}
                 seconds={initialState.remainingSeconds}
          />
        </div>
      )
    } else if (this.state.points) {
      return (
        <div>
          <Stats points={this.state.points}
                 exercises={this.state.solvedExercises}
                 seconds={initialState.remainingSeconds}
          />
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
