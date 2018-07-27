import React, { Component } from 'react'
import Quiz from 'BasicMath/Quiz'
import Timer from 'BasicMath/Timer'
import Encouragement from 'BasicMath/Encouragement'
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
        encourage: true
      })
    }

    this.onTick = (args) =>
      this.setState(args)

    this.onTimeUp = () => {
      this.props.onTimeUp({
        solvedExercises: this.state.solvedExercises,
        points: this.state.points
      })
    }
  }

  render() {
    return (
      <div>
        <Timer seconds={this.state.durationInSeconds}
               onTick={this.onTick}
               onTimeUp={this.onTimeUp}
        />

        <Quiz Logic={this.state.Logic} onScore={this.onScore} />

        <Encouragement open={this.state.encourage}
                       onClose={() => this.setState({ encourage: false })}
        />
      </div>
    )
  }
}
