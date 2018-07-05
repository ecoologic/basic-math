import React, { Component } from 'react'
import logo from 'logo.svg'
import { _setState } from 'helpers'
import 'exerciser/Timer.css'

export default class Timer extends Component {
  constructor(props) {
    super()
    this.state = { remainingSeconds: props.seconds }
  }

  componentDidMount() {
    let timer = setInterval(
      () => {
        if (this.state.remainingSeconds > 0) {
          _setState.minus(1, this, 'remainingSeconds')
        } else {
          clearInterval(timer)
          this.props.onTimeUp()
        }
        this.props.onTick(this.state.remainingSeconds)
      },
      1000)
  }

  render() {
    if (this.state.remainingSeconds > 0) {
      return (
        <div>
          <img src={logo} className="Timer-logo" alt="logo" />
          <p>{this.state.remainingSeconds} Seconds left</p>
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
