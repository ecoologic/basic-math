import React, { Component } from 'react'
import 'exerciser/Timer.css'
import logo from 'logo.svg'
import { _setState } from 'helpers'
import { actions, store } from 'store'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    store.dispatch({ ...actions.timer.set, payload: { remainingSeconds: props.seconds } })
    this.state = store.getState().timer
  }
  componentDidMount() {
    let timer = setInterval(
      () => {
        if (this.state.remainingSeconds > 0) {
          // Trigger data change
          store.dispatch(actions.timer.tick)

          this.setState(store.getState().timer)
          this.props.onTick(store.getState().timer)
        } else {
          clearInterval(timer)
          this.props.onTimeUp()
        }
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
