import React, { Component } from 'react'
import 'exerciser/MultiplicationExercise.css'
import { _math, _onChangeInput } from 'helpers'

const newState = () => ({
  n: _math.random(3, 9),
  m: _math.random(3, 9),
  answer: ''
})

export default class MultiplicationExercise extends Component {
  state = newState()
  constructor() {
    super()
    this.onChangeAnswer = (ev) => {
      _onChangeInput(this, 'answer')(ev)
      const answer = parseInt(ev.target.value, 10),
            n = this.state.n,
            m = this.state.m
      if (answer === n * m) {
        this.props.onScore({ problem: `${n} x ${m}`, solution: n * m, answer })
        this.setState(newState())
      }
    }
  }

  render() {
    return (
      <div className="MultiplicationExercise">
        {this.state.n} x {this.state.m} =
        <input type="number"
               autoFocus
               className="short-input"
               onChange={this.onChangeAnswer}
               value={this.state.answer}
        />
      </div>
    )
  }
}
