import React, { Component } from 'react'
import { _math, _onChangeInput } from 'helpers'

const newState = () => ({
  n: _math.random(3, 9),
  m: _math.random(3, 9),
  answer: ''
})

export default class MultiplicationForm extends Component {
  state = newState()
  constructor() {
    super()
    this.onChangeAnswer = (ev) => {
      _onChangeInput(this, 'answer')(ev)
      const answer = parseInt(ev.target.value, 10),
            solution = this.state.n * this.state.m
      if (answer === solution) {
        this.props.onScore({
          problem: `${this.state.n} x ${this.state.m}`,
          solution,
          answer
        })
        this.setState(newState())
      }
    }
  }

  render() {
    return (
      <div className="big">
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
