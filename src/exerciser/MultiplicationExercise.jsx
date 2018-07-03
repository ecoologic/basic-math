import React, { Component } from 'react';

// Between 3 and 9
const randomNumber = () => (Math.floor(Math.random() * 7) + 3)

export default class MultiplicationExercise extends Component {
  constructor() {
    super();
    this.state = {
      n: randomNumber(),
      m: randomNumber()
    }
    this.reset = () => {
      this.setState({
        n: randomNumber(),
        m: randomNumber()
      });
    }
  }

  onChangeAnswer(state) {
    const input = parseInt(this.inputRef.value, 10),
          n = this.state.n,
          m = this.state.m
    if (input === n * m) {
      this.props.onEvent(`${n} x ${m} = ${n * m}`)
      this.props.onScore()
      this.reset()
      this.inputRef.value = ''
    }
  }

  render() {
    return (
      <div>
        {this.state.n} x {this.state.m} =
        <input type="number" autoFocus className="short-input"
               ref={r => (this.inputRef = r)}
               onChange={() => this.onChangeAnswer(this.state)} />
      </div>
    )
  }
};
