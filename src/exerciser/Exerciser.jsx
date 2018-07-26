import React, { Component, Fragment } from 'react'
import Question, {
  AdditionLogic,
  MultiplicationLogic,
  DivisionLogic,
  RandomLogic
} from 'exerciser/Question'
import Timer from 'exerciser/Timer'
import Stats from 'exerciser/Stats'
import { store } from 'store'
import { _array } from 'helpers'
import { Button } from 'renderHelpers'
import Snackbar from '@material-ui/core/Snackbar';

const initialState = {
  started: false,
  elapsedSeconds: 0,
  remainingSeconds: 5, // <== TIMER DURATION
  latestSolutionSeconds: 0,
  points: 0,
  solvedExercises: [],
  logic: () => null
}

// TODO: Create <BasicMath />
// TODO: Extract everything except Timer, Quiz and Encouragment, rename to Game
// TODO: Use "functional" setState
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
        solvedExercises: [...this.state.solvedExercises, timedExercise],
        encouragement: _array.random(['Good Job', 'Awesome', 'Flawless', 'Cool', 'Fantastic'])
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

  encouragement() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={this.state.encouragement}
        autoHideDuration={700}
        disableWindowBlurListener={true}
        onClose={() => this.setState({ encouragement: false })}
        message={`${this.state.encouragement}! ${_array.random(
          ['😘','😝','😎','😄','✌','👌','👍','💪','☝','🤘','💃','👯'])}`}
      />
    )
  }

  buttons() {
    return (
      <Fragment>
        <Button autoFocus onClick={() => this.start(RandomLogic)}>
          Random
        </Button>
        <Button onClick={() => this.start(MultiplicationLogic)}>
          Multiplication
        </Button>
        <Button onClick={() => this.start(DivisionLogic)}>
          Division
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
          {this.encouragement()}
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
