import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { _array } from 'helpers'

export default class Encouragement extends Component {
  state = {
    encouragement: _array.random(['Good Job', 'Awesome', 'Flawless', 'Yeah',
                                  'Cool', 'Boom', 'Fantastic', 'Spectacular']),
    emoji: _array.random(['😘', '😝', '😎', '😄', '✌', '👌', '👍',
                          '💪', '☝', '🤘', '💃', '👯'])
  }

  render() {
    if (this.props.open) {
      return (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={!!this.state.encouragement}
          autoHideDuration={700}
          disableWindowBlurListener={true}
          onClose={this.props.onClose}
          message={`¡¡${this.state.encouragement}!! ${this.state.emoji}`}
        />
      )
    } else {
      return null
    }
  }
}
