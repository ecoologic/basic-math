import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { _array } from 'helpers'

const newState = () => {
  const encouragements = ['Good Job', 'Awesome', 'Flawless', 'Yeah',
                          'Cool', 'Boom', 'Fantastic', 'Spectacular'],
        emojies = ['😘', '😝', '😎', '😄', '✌', '👌', '👍',
                   '💪', '☝', '🤘', '💃', '👯']
  return {
    encouragement: _array.random(encouragements),
    leftEmoji: _array.random(emojies),
    rightEmoji: _array.random(emojies),
    open: false
  }
}

export default class Encouragement extends Component {
  state = {}
  constructor() {
    super()
    this.show = () =>
      this.setState({ ...newState(), open: true })
  }

  render() {
    return (
      <Snackbar
        open={!!this.state.open}
        onClose={() => this.setState({ open: false })}
        autoHideDuration={900}
        disableWindowBlurListener={true}
        message={
          <span className="funny">
            {this.state.leftEmoji} &nbsp;
            ¡¡ {this.state.encouragement} !! &nbsp;
            {this.state.rightEmoji}
          </span>
        }
      />
    )
  }
}
