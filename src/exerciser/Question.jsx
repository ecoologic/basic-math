import React, { Component } from 'react'
import { _math, _onChangeInput } from 'helpers'

export class MultiplicationLogic {
  static get points() { return 1 }
  state = {
    n: _math.random(3, 9),
    m: _math.random(3, 9)
  }
  get problem() { return `${this.state.n} x ${this.state.m}` }
  get solution() { return this.state.n * this.state.m }
  isCorrect(answer) { return answer === this.solution }
}

export class DivisionLogic {
  static get points() { return 2 }
  divisor = _math.random(3, 9)
  dividend = this.divisor * _math.random(3, 9) // Ensures an integer result
  get problem() { return `${this.dividend} / ${this.divisor}` }
  get solution() { return this.dividend / this.divisor }
  isCorrect(answer) { return answer === this.solution }
}

export class AdditionLogic {
  static get points() { return 2 }
  state = {
    n: _math.random(3, 9),
    m: _math.random(3, 9),
    o: _math.random(3, 9)
  }
  get problem() { return `${this.state.n} + ${this.state.m} + ${this.state.o}` }
  get solution() { return this.state.n + this.state.m + this.state.o }
  isCorrect(answer) { return answer === this.solution }
}

export default class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      Logic: props.Logic,
      logic: new props.Logic()
    }
    const changeAnswerInput = _onChangeInput(this, 'answer')
    this.onChangeAnswer = (ev) => {
      changeAnswerInput(ev)
      const answer = parseInt(ev.target.value, 10)
      if (this.state.logic.isCorrect(answer)) {
        props.onScore({
          points: props.Logic.points,
          problem: this.state.logic.problem,
          solution: this.state.logic.solution,
          answer,
        })
        this.setState({
          logic: new props.Logic(),
          answer: ''
        })
      }
    }
  }
  render() {
    return (
      <div className="big">
        {this.state.logic.problem} =
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
