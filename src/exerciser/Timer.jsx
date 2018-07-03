import React, { Component } from 'react';
import logo from '../logo.svg';
import './Timer.css';

export default class Timer extends Component {
  constructor(props) {
    super()
    this.state = {seconds: props.seconds}
  }

  componentDidMount() {
    let timer = setInterval(
      () => {
        if (this.state.seconds > 0) {
          this.setState({seconds: this.state.seconds - 1})
        } else {
          clearInterval(timer)
          this.props.onTimeUp()
        }
      },
      1000)
  }

  render() {
    if (this.state.seconds > 0) {
      return (
        <div>
          <img src={logo} className="Timer-logo" alt="logo" />
          <p>{this.state.seconds} Seconds left</p>
        </div>
      )
    } else {
      return (
        <div>
          <img src={logo} className="Timer-logo" alt="logo" />
          <p>Time's up!</p>
        </div>
      )
    }
  }
}
