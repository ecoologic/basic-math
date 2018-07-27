import React, { Component, Fragment } from 'react'
import {
  AdditionLogic,
  MultiplicationLogic,
  DivisionLogic,
  RandomLogic
} from 'Game/Quiz'
import Stats from 'BasicMath/Stats'
import Game from 'Game/Game'
import { Button } from 'renderHelpers'

// TODO: Use "functional" setState
export default class BasicMath extends Component {
  constructor() {
    super()
    this.state = {
      started: false,
      durationInSeconds: 30, // <== TIMER DURATION
      points: 0,
      solvedExercises: []
    }
    this.start = (Logic) =>
      this.setState({ started: true, Logic })
    this.onTimeUp = ({ solvedExercises, points }) => {
      this.setState({
        started: false,
        solvedExercises,
        points
      })
    }
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

  render() { /////////////////////////////////////////////////////////////////
    if (this.state.started) {
      return (
        <Game Logic={this.state.Logic}
              onTimeUp={this.onTimeUp}
              seconds={this.state.durationInSeconds}
        />
      )
    } else if (this.state.points) { //////////////////////////////////////////
      return (
        <div>
          <Stats points={this.state.points}
                 exercises={this.state.solvedExercises}
                 seconds={this.state.durationInSeconds}
          />
          {this.buttons()}
        </div>
      )
    } else { /////////////////////////////////////////////////////////////////
      return (
        <div>
          <h2>Exercises</h2>
          <p>
            Answer as many questions as possible
            in {this.state.durationInSeconds} seconds.
            <br />
            Good luck!
          </p>
          {this.buttons()}
        </div>
      )
    }
  } //////////////////////////////////////////////////////////////////////////
}
