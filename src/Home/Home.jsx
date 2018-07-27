import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { _onChangeInput } from 'helpers'
import { Button } from 'renderHelpers'

export default class Home extends Component {
  state = { name: '' }
  constructor() {
    super()

    this.onChangeName = _onChangeInput(this, 'name')
    this.onSubmit = (ev) => {
      ev.preventDefault()
      this.setState({ redirect: true })
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/user/${this.state.name}`} />
    } else {
      return (
        <div>
          <h2>Welcome</h2>
          <p>This app helps you train in basic math.</p>
          <form onSubmit={this.onSubmit}>
            <label>
              Your Name:
              <input autoFocus
                     required
                     placeholder="Name"
                     minLength={1}
                     onChange={this.onChangeName}
              />
            </label>

            <Button>Start</Button>
          </form>
        </div>
      )
    }
  }
}
