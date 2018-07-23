import React, { Component } from 'react'
import { _math, _onChangeInput } from 'helpers'

const newState = () => ({
  n: _math.random(3, 9),
  m: _math.random(3, 9),
  o: _math.random(3, 9),
  answer: ''
})

export default class AdditionForm extends Component {
  static get points() { return 2 }
  state = newState()
  constructor() {
    super()
    const changeAnswer = _onChangeInput(this, 'answer')
    this.onChangeAnswer = (ev) => {
      changeAnswer(ev)
      const answer = parseInt(ev.target.value, 10),
            solution = this.state.n + this.state.m + this.state.o
      if (answer === solution) {
        this.props.onScore({
          points: this.constructor.points,
          problem: `${this.state.n} + ${this.state.m} + ${this.state.o}`,
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
        {this.state.n} + {this.state.m} + {this.state.o} =
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
