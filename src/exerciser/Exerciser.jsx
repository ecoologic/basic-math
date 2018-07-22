import React, { Component } from 'react'
import MultiplicationExercise from 'exerciser/MultiplicationExercise'
import AdditionExercise from 'exerciser/AdditionExercise'
import Timer from 'exerciser/Timer'
import Stats from 'exerciser/Stats'
import { store } from 'store'
import { Button } from 'renderHelpers'

const initialState = {
  started: false,
  elapsedSeconds: 0,
  remainingSeconds: 5,
  latestSolutionSeconds: 0,
  points: 0,
  solvedExercises: [],
  exercise: () => null
}

export default class Exerciser extends Component {
  constructor() {
    super()
    this.state = initialState

    this.start = (exercise) => {
      this.setState({
        ...initialState,
        exercise,
        started: true
      })
    }

    this.onTick = (args) =>
      this.setState(args)

    this.onScore = (exercise) => {
      const timedExercise = {
        ...store.getState().timer,
        ...exercise,
        answerSeconds: this.state.elapsedSeconds -
                       this.state.latestSolutionSeconds
      }
      this.setState({
        latestSolutionSeconds: this.state.elapsedSeconds,
        points: this.state.points + 1,
        solvedExercises: [...this.state.solvedExercises, timedExercise]
      })
    }

    this.onTimeUp = () =>
      this.setState({ started: false })
  }

  render() {
    const Exercise = this.state.exercise
    if (this.state.started) {
      return (
        <div>
          <Timer seconds={initialState.remainingSeconds}
                 onTick={this.onTick}
                 onTimeUp={this.onTimeUp}
          />
          <Exercise onScore={this.onScore} />
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
          <Button onClick={() => this.start(MultiplicationExercise)}>
            Multiplication
          </Button>
          <Button onClick={() => this.start(AdditionExercise)}>
            Addition
          </Button>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Exercises</h2>
          <p>
            Answer as many questions as possible
            in {initialState.remainingSeconds} seconds.
            <br />
            Good luck!
          </p>

          <Button autoFocus onClick={() => this.start(MultiplicationExercise)}>
            Multiplication
          </Button>
          <Button onClick={() => this.start(AdditionExercise)}>
            Addition
          </Button>
        </div>
      )
    }
  }
}
