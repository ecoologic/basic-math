import React, { Component } from 'react'
import 'exerciser/Timer.css'
import logo from 'logo.svg'
import { actions, store } from 'store'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    store.dispatch({ ...actions.timer.set, payload: { remainingSeconds: props.seconds } })
    this.state = store.getState().timer
  }
  componentDidMount() {
    let timerPeriod = 250,
        timer = setInterval(
        () => {
          if (this.state.remainingSeconds > 0) {
            store.dispatch({
              ...actions.timer.tick,
              payload: { elapsedSeconds: timerPeriod / 1000 } })

            this.setState(store.getState().timer)
            this.props.onTick(store.getState().timer)
          } else {
            clearInterval(timer)
            this.props.onTimeUp()
          }
        },
        timerPeriod)
  }

  // TODO: Make it with web assembly!!
  render() {
    if (this.state.remainingSeconds > 0) {
      return (
        <div>
          <img src={logo} className="Timer-logo" alt="logo" />
          <p>{Number(this.state.remainingSeconds).toFixed(2)} Seconds left</p>
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
