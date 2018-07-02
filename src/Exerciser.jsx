import React, { Component } from 'react';
import MultiplicationExercise from './MultiplicationExercise'

const Timer = (props) => <div>Time Left: {props.seconds} Seconds</div>
const Counter = (props) => <div>Points: {props.points}</div>
const Log = () => { return "Log" }

export default class Exerciser extends Component {
  constructor() {
    super()
    this.state = {
      seconds: 60,
      points: 0
    }

    this.onScore = () => {
      this.setState({points: this.state.points + 1})
      console.log("onScore", this.state);
    }
  }

  render() {
    return (
      <div>
        <Timer seconds={this.state.seconds} />
        <MultiplicationExercise onScore={this.onScore} />
        <Counter points={this.state.points} />
        <Log />
      </div>
    )
  }
}
