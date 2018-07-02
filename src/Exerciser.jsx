import React, { Component } from 'react';
import MultiplicationExercise from './MultiplicationExercise'

const Timer = () => { return "Timer" }
const Counter = (props) => <div>Points: {props.points}</div>
const Log = () => { return "Log" }

export default class Exerciser extends Component {
  constructor() {
    super()
    this.state = {
      time: 60,
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
        <Timer />
        <MultiplicationExercise onScore={this.onScore} />
        <Counter points={this.state.points} />
        <Log />
      </div>
    )
  }
}
