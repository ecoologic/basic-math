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
  }

  reset() {
    this.setState({
      n: randomNumber(),
      m: randomNumber()
    });
    console.log("reset()", this.state);
  }

  onChangeAnswer(state) {
    console.log("onChangeAnswer()", state, this.inputRef.value);
    if (this.inputRef.value == this.state.n * this.state.m) {
      this.props.onScore()
      this.reset()
      this.inputRef.value = ''
    }
  }

  render() {
    console.log("MultiplicationExercice#render");

    return (
      <div>
        {this.state.n} * {this.state.m} =
        <input ref={r => (this.inputRef = r)}
               onChange={() => this.onChangeAnswer(this.state)}
               className="short-input"
               autoFocus />
      </div>
    )
  }
};
