import React, { Component } from 'react';
import MultiplicationExercise from './MultiplicationExercise'

class Timer extends Component {
  constructor(props) {
    super()
    this.state = {seconds: props.seconds}
  }

  componentDidMount() {
    let timer = setInterval(
      () => {
        if (this.state.seconds > 0) {
          this.setState({seconds: this.state.seconds - 1})
        } else {
          clearInterval(timer)
          this.props.onTimeup()
        }
      },
      1000)
  }

  render() {
    if (this.state.seconds > 0) {
      return <div>{this.state.seconds} Seconds left</div>
    } else {
      return <div>Time's up</div>
    }
  }
}
const Counter = (props) => <div>Points: {props.points}</div>
const Log = () => { return "Log" }

export default class Exerciser extends Component {
  constructor() {
    super()
    this.state = {
      isPlaying: true,
      seconds: 60,
      points: 0
    }

    this.onTimeup = () => this.setState({isPlaying: false})

    this.onScore = () => {
      this.setState({points: this.state.points + 1})
      console.log("onScore", this.state);
    }
  }

  render() {
    if (this.state.isPlaying) {
      return (
        <div>
          <Timer seconds={this.state.seconds} onTimeup={this.onTimeup} />
          <MultiplicationExercise onScore={this.onScore} />
          <Counter points={this.state.points} />
          <Log />
        </div>
      )
    } else {
      return (
        <div>
          <Counter points={this.state.points} />
          <Log />
        </div>
      )
    }
  }
}
