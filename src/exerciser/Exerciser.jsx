import React, { Component, Fragment } from 'react'
import Question, {
  AdditionLogic,
  MultiplicationLogic
} from 'exerciser/Question'
import Timer from 'exerciser/Timer'
import Stats from 'exerciser/Stats'
import { store } from 'store'
import { Button } from 'renderHelpers'

const initialState = {
  started: false,
  elapsedSeconds: 0,
  remainingSeconds: 20,
  latestSolutionSeconds: 0,
  points: 0,
  solvedExercises: [],
  logic: () => null
}

export default class Exerciser extends Component {
  constructor() {
    super()
    this.state = initialState

    this.start = (Logic) => {
      this.setState({
        ...initialState,
        Logic,
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
        points: this.state.points + this.state.Logic.points,
        solvedExercises: [...this.state.solvedExercises, timedExercise]
      })
    }

    this.onTimeUp = () =>
      this.setState({ started: false })
  }

  description() {
    return (
      <Fragment>
        <h2>Exercises</h2>
        <p>
          Answer as many questions as possible
          in {initialState.remainingSeconds} seconds.
          <br />
          Good luck!
        </p>
      </Fragment>
    )
  }

  timer() {
    return (
      <Timer seconds={initialState.remainingSeconds}
             onTick={this.onTick}
             onTimeUp={this.onTimeUp}
      />
    )
  }

  question() {
    return <Question Logic={this.state.Logic} onScore={this.onScore} />
  }

  stats() {
    return (
      <Stats points={this.state.points}
             exercises={this.state.solvedExercises}
             seconds={initialState.remainingSeconds}
      />
    )
  }

  buttons() {
    return (
      <Fragment>
        <Button autoFocus onClick={() => this.start(MultiplicationLogic)}>
          Multiplication
        </Button>
        <Button onClick={() => this.start(AdditionLogic)}>
          Addition
        </Button>
      </Fragment>
    )
  }

  render() {
    if (this.state.started) {
      return (
        <div>
          {this.timer()}
          {this.question()}
          {this.stats()}
        </div>
      )
    } else if (this.state.points) {
      return (
        <div>
          {this.stats()}
          {this.buttons()}
        </div>
      )
    } else {
      return (
        <div>
          {this.description()}
          {this.buttons()}
        </div>
      )
    }
  }
}
