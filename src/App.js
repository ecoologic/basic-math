import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MultiplicationExercise from './MultiplicationExercise'

const Timer = () => { return "Timer" }
const Counter = () => { return "Counter" }
const Log = () => { return "Log" }

class Exerciser extends Component {
  render() {
    return (
      <div>
        <Timer />
        <MultiplicationExercise />
        <Counter />
        <Log />
      </div>
    )
  }
}

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

        <Exerciser />
      </div>
    );
  }
}

export default App;
