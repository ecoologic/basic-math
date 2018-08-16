import React, { Component } from 'react'
import Quiz from 'Game/Quiz'
import Timer from 'Game/Timer'
import Encouragement from 'Game/Encouragement'
import { store } from 'store'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsedSeconds: 0,
      durationInSeconds: props.seconds,
      latestSolutionSeconds: 0,
      points: 0,
      solvedExercises: [],
      Logic: props.Logic
    }

    this.onScore = exercise => {
      this.setState(state => ({
        latestSolutionSeconds: state.elapsedSeconds,
        points: state.points + exercise.points,
        solvedExercises: [
          ...state.solvedExercises,
          {
            ...exercise,
            ...store.getState().timer,
            answerSeconds: state.elapsedSeconds -
                           state.latestSolutionSeconds
          }
        ]
      }))
      this.encouragementRef.current.show()
    }

    this.onTick = (args) =>
      this.setState(args)

    this.onTimeUp = () => {
      this.props.onTimeUp({
        solvedExercises: this.state.solvedExercises,
        points: this.state.points
      })
    }

    this.encouragementRef = React.createRef()
  }

  render() {
    return (
      <div>
        <Timer seconds={this.state.durationInSeconds}
               onTick={this.onTick}
               onTimeUp={this.onTimeUp}
        />

        <Quiz Logic={this.state.Logic} onScore={this.onScore} />

        <Encouragement ref={this.encouragementRef} />
      </div>
    )
  }
}
