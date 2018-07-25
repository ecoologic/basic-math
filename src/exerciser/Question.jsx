import React, { Component } from 'react'
import { _math, _array, _onChangeInput } from 'helpers'

class Logic {
  get state() { return this._state }
  set state(newValue) { this._state = newValue }
  isCorrect(answer) { return answer === this.solution }
}

export class MultiplicationLogic extends Logic {
  static get points() { return 1 }
  _state = {
    n: _math.random(3, 9),
    m: _math.random(3, 9)
  }
  get problem() { return `${this.state.n} x ${this.state.m}` }
  get solution() { return this.state.n * this.state.m }
}

export class DivisionLogic extends Logic {
  static get points() { return 2 }
  divisor = _math.random(3, 9)
  dividend = this.divisor * _math.random(3, 9) // Ensures an integer result
  _state = {
    n: this.dividend,
    m: this.divisor
  }
  get problem() { return `${this.dividend} / ${this.divisor}` }
  get solution() { return this.dividend / this.divisor }
}

export class AdditionLogic extends Logic {
  static get points() { return 2 }
  _state = {
    n: _math.random(3, 9),
    m: _math.random(3, 9),
    o: _math.random(3, 9)
  }
  get problem() { return `${this.state.n} + ${this.state.m} + ${this.state.o}` }
  get solution() { return this.state.n + this.state.m + this.state.o }
}

export class RandomLogic extends Logic {
  constructor() {
    super()
    const logics = [MultiplicationLogic, DivisionLogic, AdditionLogic],
          Logic = _array.random(logics)
    this.logic = new Logic()
    this._state = this.logic.state
  }
  static get points() { return 2 }
  get problem() { return this.logic.problem }
  get solution() { return this.logic.solution }
}

// TODO: rename <Quiz />
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

// TODO: snackbars for gamification
