import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class MultiplicationExercise extends Component {
  constructor() {
    super();
    this.state = {
      n: this.randomNumber(),
      m: this.randomNumber()
    }
  }

  randomNumber() {
    return Math.floor(Math.random() * 7) + 3
  }

  reset() {
    this.setState({
      n: this.randomNumber(),
      m: this.randomNumber()
    });
    console.log("reset()", this.state.n, this.state.m);
  }

  onChangeAnswer(state) {
    console.log("onChangeAnswer()", this.state.n, this.state.m, this.inputRef.value);
    if (this.inputRef.value == this.state.n * this.state.m) {
      this.reset();
      this.inputRef.value = '';
    }
  }

  render() {
    console.log("MultiplicationExercice#render");

    return (
      <div>
        {this.state.n} * {this.state.m} =
        <input ref={r => (this.inputRef = r)}
               onChange={() => (this.onChangeAnswer(this.state))}
               className="short-input"
               autoFocus />
        <span>--</span>
      </div>
    )

  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <MultiplicationExercise />
      </div>
    );
  }
}

export default App;
